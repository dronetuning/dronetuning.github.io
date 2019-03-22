var audioCtx = new (window.AudioContext || window.webkitAudioContext)(),
	oscillators = [],
	tuningConfig = {"drones":null, "transpositions":null, "instruments":null, "pitch":null};
if (!audioCtx) {
	// abort!!!
	document.location.href = 'browser.php';
}

window.addEventListener('touchstart', function() {

	// create empty buffer
	var buffer = myContext.createBuffer(1, 1, 22050);
	var source = myContext.createBufferSource();
	source.buffer = buffer;
	
	// connect to output (your speakers)
	source.connect(myContext.destination);

	// play the file
	source.noteOn(0);
	
}, false);

document.addEventListener("DOMContentLoaded", function(e) {

	var savedConfig = document.cookie.replace(/(?:(?:^|.*;\s*)tuningConfig\s*\=\s*([^;]*).*$)|^.*$/, "$1");
	if (savedConfig && (savedConfig = JSON.parse(savedConfig))) {
		for (var i in savedConfig) {
			if (savedConfig[i] && savedConfig[i]['name']) {
				tuningConfig[i] = savedConfig[i];
				setText(
					document.getElementById('settings').querySelector('li[data-list='+i+'] small'),
					savedConfig[i]['name']
				);
			}
		}
	}

	var configButtons = document.getElementById('settings').getElementsByTagName('li');
	for (var i=0; i<configButtons.length; i++) {
		configButtons[i].addEventListener('click', selectSetting);
	}

	var keys = document.getElementById('keyboard').getElementsByTagName('li');
	for (var i=0; i<keys.length; i++) {
		keys[i].addEventListener('click', selectPitch);
		if (savedConfig['pitch'] && savedConfig['pitch']['name'] && (keys[i].id == savedConfig['pitch']['name'])) {
			keys[i].className = 'selected';
		}
	}

	document.getElementById('playpause').addEventListener('click', togglePlay);

});

function selectSetting(e) {
        showPanel();

        var button = up(e.target, 'li');

        setText(
                document.getElementById('config').querySelector('h3'),
                button.querySelector('strong').textContent
        );

        var list = document.getElementById('config').querySelector('ul');
        var data = config[ button.getAttribute('data-list') ];
        list.setAttribute('data-list', button.getAttribute('data-list'));
        for (k in data) {
                if (data.hasOwnProperty(k)) {
                        list.appendChild(document.createElement('li'));
                        list.lastChild.appendChild(document.createTextNode(k));
                        list.lastChild.addEventListener('click', changeSetting);
                }
        }
}

function selectPitch(e) {
        var clicked = up(e.target, 'li');
        tuningConfig['pitch'] = {"name": clicked.id, "value": clicked.getAttribute('data-freq') };
        document.cookie = 'tuningConfig=' + JSON.stringify(tuningConfig) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
        var prev = clicked.parentNode.querySelector('.selected');
        if (prev) {
                prev.className = '';
        }
        clicked.className = 'selected';
        if ('playing' == document.getElementById('playpause').className) {
                stop();
                play();
        }
}

function changeSetting(e) {
	var clicked = up(e.target, 'li');
	var option = clicked.parentNode.getAttribute('data-list');
	tuningConfig[option] = {"name": clicked.textContent, "value": config[option][clicked.textContent]};
	document.cookie = 'tuningConfig='+JSON.stringify(tuningConfig);
	setText(
		document.getElementById('settings').querySelector('li[data-list='+option+'] small'),
		clicked.textContent
	);
	hidePanel();
	if ('playing' == document.getElementById('playpause').className) {
		stop();
		play();
	}
}

function togglePlay() {
	if ('playing' == document.getElementById('playpause').className) {
		stop();
	} else if (
		tuningConfig.drones &&
		tuningConfig.drones.value &&
		tuningConfig.instruments &&
		tuningConfig.instruments.value &&
		tuningConfig.transpositions &&
		tuningConfig.transpositions.value &&
		tuningConfig.pitch &&
		tuningConfig.pitch.value
	) {
		play();
	}
}

function play() {
	document.getElementById('playpause').className = 'playing';
	oscillators = [];
	var data = {};
	var baseFreq = config.settings.A4 * Math.pow(2, tuningConfig.pitch.value / 12) * tuningConfig.transpositions.value;
    console.log(tuningConfig.drones);
	for (var i=0; i<tuningConfig.drones.value.length; i++) {
			var newData = createOscillators(
				baseFreq * tuningConfig.drones.value[i],
				tuningConfig.instruments.value
			);
		data = overdub(
			data,
			newData
		);
	}
	data = normalize(data);
	for (var i in data) {
		if (data.hasOwnProperty(i)) {
			var oscillator = {};

			oscillator.gn = audioCtx.createGain();
			oscillator.gn.gain.value = data[i];

			oscillator.osc = audioCtx.createOscillator();
			oscillator.osc.type = 'sine';
			oscillator.osc.frequency.value = parseFloat(i);

			oscillator.osc.connect(oscillator.gn);
			oscillator.gn.connect(audioCtx.destination);
			if (oscillator.osc.start) {
				oscillator.osc.start(0);
			} else {
				oscillator.osc.noteOn(0);
			}

			oscillators.push(oscillator);
		}
	}
}

function stop() {
	document.getElementById('playpause').className = 'paused';
	if (oscillators && oscillators.length) {
		for (var i=0; i<oscillators.length; i++) {
			if (oscillators[i].osc.stop) {
				oscillators[i].osc.stop(0);
			} else {
				oscillators[i].osc.noteOff(0);
			}
			oscillators[i].gn.disconnect();

			// attempting to help garbage collection by removing references to objects explicitly
			oscillators[i].gn = null;
			oscillators[i].osc = null;
		}
	}
}

function createOscillators(baseFreq, overtones) {
	var osc = {};
	var	range=0,
		ranges=Object.keys(overtones);
	for (var i=0; i<ranges.length; i++) {
		ranges[i] = parseInt(ranges[i]);
	}
	ranges.sort(function(a, b) { return a - b; });
	for (var i=0; i<ranges.length; i++) {
		if (parseInt(ranges[i]) < baseFreq) {
			range = ranges[i].toString();
		}
	}
	if (overtones[range]) {
		for (var i=0; i<overtones[range].length; i++) {
			if (Array.isArray(overtones[range][i]) && (2 == overtones[range][i].length)) {
				osc[(overtones[range][i][0] * baseFreq).toFixed(4)] = overtones[range][i][1]
			} else if (!isNaN(overtones[range][i])) {
				osc[(baseFreq * (i+1)).toFixed(4)] = overtones[range][i];
			}
		}
	
		osc = normalize(osc);
		return osc;
	} else return {};
}

function normalize(osc) {
	var sum=0;
	for (var i in osc) {
		if (osc.hasOwnProperty(i)) {
			sum += osc[i];
		}
	}
	for (var i in osc) {
		if (osc.hasOwnProperty(i)) {
			osc[i] = osc[i] / sum
		}
	}
	return osc;
}

function overdub(osc1, osc2) {
	var result = {};
	for (var i in osc1) {
		var unique = true;
		if (osc1.hasOwnProperty(i)) {
			for (var j in osc2) {
				if (osc2.hasOwnProperty(j)) {
					if (i == j) {
						unique = false;
						osc2[i] += osc1[i];
						break;
					}
				}
			}
			if (unique) {
				result[i] = osc1[i];
			}
		}
	}
	for (var j in osc2) {
		osc1[j] = osc2[j];
	}
	return osc1;
}




if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}
