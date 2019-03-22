document.addEventListener("DOMContentLoaded", function(e) {

	var loginLink = document.querySelectorAll('a[data-action="login"]');
	for (var i=0; i<loginLink.length; i++) {
		loginLink[i].addEventListener('click', loginForm);
	}

	positionPlay();
	window.addEventListener('resize', positionPlay);
});

function loginForm() {
	var loginform = document.getElementById('login');
	loginform.style.display = 'block';
	var main = document.getElementsByTagName('main')[0];
	main.appendChild(document.createElement('div'));
	main.lastChild.className = 'mask';
	var draw = main.lastChild.offsetHeight;
	main.lastChild.style.opacity = '.5';
	main.lastChild.addEventListener('click', function() {
		loginform.style.display = 'none';
		var mask = document.querySelector('main .mask');
		mask.style.opacity = '0';
		window.setTimeout(function() {
			mask.parentNode.removeChild(mask);
		}, 500);
	});
}

function validatePassword(pass1, pass2) {
        var form = up(pass1, 'form');
        form.addEventListener('submit', function(e) {
                if (pass1.value != pass2.value) {
                        e.preventDefault();
                        return false;
                }
        });

	function passwordUI() {
		pass2.className = pass2.className.replace(new RegExp(' invalid', 'g'), '');
		if (pass1.value != pass2.value) {
                        pass2.className = pass2.className + ' invalid';
		}
	}
	pass2.addEventListener('keyup', passwordUI);
	pass1.addEventListener('keyup', passwordUI);
}


function positionPlay() {
	var play = document.getElementById('playpause');
	if (play) {
		var avail = window.innerHeight - (document.querySelector('header').offsetHeight + document.getElementById('settings').offsetHeight + document.getElementById('pitch').offsetHeight);
		play.style.top = (Math.max(0, (avail - play.offsetHeight) / 2) - 15) + 'px';
	}
}

function isMobile() {
	var el;
	if (el = document.getElementById('settings')) {
		return ('inline-block' != window.getComputedStyle(el.querySelector('li')).getPropertyValue('display'));
	} else if (el = document.querySelector('main section')) {
		return ('static' == window.getComputedStyle(el).getPropertyValue('position'));
	}
}
function up(el, tagName) {
	tagName = tagName.toLowerCase();
	while (el.nodeName.toLowerCase() != tagName) {
		if (el.parentNode) {
			el = el.parentNode;
		} else {
			return false;
		}
	}
	return el;
}
function setText(el, text) {
	if (el) {
		while (el.hasChildNodes()) {
			el.removeChild(el.lastChild);
		}
		el.appendChild(document.createTextNode(text));
	}
}

function showPanel(e) {
	var panel = document.getElementById('config');
	var main = document.getElementsByTagName('main')[0];
	main.appendChild(document.createElement('div'));
	main.lastChild.className = 'mask';
	main.lastChild.addEventListener('click', hidePanel);
	var draw = main.lastChild.offsetHeight;
	main.lastChild.style.opacity = '.5';
	if (isMobile()) {
		main.style.left = '-90%';
	} else {
		panel.style.zIndex = '500';
	}
}

function hidePanel() {
	var panel = document.getElementById('config');
	var main = document.getElementsByTagName('main')[0];
	var mask = main.querySelector('.mask');
	mask.style.opacity = 0;
	main.style.left = '0px';
	panel.style.zIndex = '1';
	window.setTimeout(function() {
		if (mask && mask.parentNode) {
			mask.parentNode.removeChild(mask); 
		}
		var list = panel.querySelector('ul');
		while (list.hasChildNodes()) {
			list.removeChild(list.lastChild);
		}
	}, 500);
}
