<!DOCTYPE html>
<html lang="en-US">
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<link rel="shortcut icon" href="/assets/favicon.png" type="image/png" />
	<link rel="stylesheet" type="text/css" href="/inc/tuningdrones.css" />
	<script type="text/javascript" src="/inc/tuningdrones.js"></script>
	<meta name="description" content="Customizeable drone pitches for intonation practice." />
</head>
<body class="internal">
	<aside id="config"></aside>
	<main>
		<header>
			<h1 title="Tuning Drones"> 
				<a href="/">
					<img src="/assets/tuningdrones_icon.png" />
					tuning<span class="highlight drones">drones</span>
				</a>
			</h1>
		</header>
<section>
	<ul class="subnav columns quarter">
		<li>
			<a href="#better">A better drone</a>
		</li>
		<li>
			<a href="#tuningdrones">Using drones</a>
		</li>
		<li>
			<a href="#developer">The developer</a>
		</li>
		<li>
			<a href="#contact">Contact</a>
		</li>
	</ul>
	<div class="subsection better"><a name="better"></a>
		<h3>Other drones</h3>
		<p>
			Most commonly, drone tones are produced by a metronome or tuner. These tones are nearly always simple sine waves or mechanical square waves. Furthermore, they are often limited to a single octave. Such tones, while steady and clean, do not blend well with the colorful overtone spectra of acoustical instruments. It can be difficult to hear beats and other intonation cues when playing with these sounds.
		</p>
		<p>
			To combat this, a variety of people have generated audio files of more natural drone tones that blend better. These audio files, however, are limited in duration. Whether they're a few seconds or a few minutes, they must either end or repeat at some point; either option is a jarring disruption to the tuning process.
		</p>
		<p>
			Neither of these methods is adaptable to multiple circumstances. If one's drone collection uses (for instance) a cello sound, there's not much one can do to tweak it to blend better with an oboe if necessary. Furthermore, a single drone sound &mdash; regardless of timbre &mdash; is unhelpful when practicing the ability to perform a passage in equal temperament.
		</p>
		<h3>An improved approach</h3>
		<p>
			A few years ago, I created my own set of drone pitches in my register, with a timbre based on my own tone. Because they were customized for myself, these drones were generally good enough for my own practice needs. It occurred to me, however, that with modern digital technology, custom pitches could be generated on demand. Such flexible drones wouldn't have a limited duration, and they could be altered to blend with any instrument.
		</p>
		<p>
			<em>Tuning<span class="drones">drones</span>.com is this customizeable practice tool.</em>
		</p>
		<p>
			This software algorithmically generates drone tones of arbitrary duration to match any timbre, on any pitch, in any register.
		</p>
		<p>
			The instrumental timbres are sampled from recordings of the greatest musicians of our time. Because the way that notes attack and develop are key elements of a believable sound, however, the synthesized audio will not sound "real." Such temporal elements, in addition to typical inharmonicities, are deliberately omitted from these drones to ensure a steady, resonant pitch reference that highlights any deviations. Despite this artificial character, the overtone spectra are modeled from real performances and blend very naturally with live instruments.
		</p>
		<p>
			In addition to arbitrary timbres, the software can layer multiple pitches to simulate various musical environments. For passages with extended range, a second octave may be added to the primary drone. For tonal context, a fifth or a triad can be generated above the main pitch. For these tonal pitch sets, both untempered and equal-tempered frequency relationships are available.
		</p>
		<h3>Moving forward</h3>
		<p>
			Do you need an option that is not represented? <a href="#contact">Let me know!</a> It is likely possible to enhance tuning<span class="drones">drones</span>.com to include your idea!
		</p>
	</div>
	<div class="subsection tuningdrones"><a name="tuningdrones"></a>
		<h3>The problem with tuners</h3>
		<p>
			Among the many challenges of playing a musical instrument, getting each note in tune is one of the most difficult. Many people turn to electronic tuners for aid in this task, but that approach is fundamentally flawed. Electronic tuners are valuable tools that provide objective information about a note's pitch level. However, such devices do not identify whether or not a given note is correctly tuned.
		</p>
		<p>
			Electronic tuners are not flexible to changing environments. When musicians experience fatigue (for instance, from playing a two-hour concert), or instruments experience temperature changes (for instance, from stage lights), their intonation level changes. If an entire orchestra slides a little lower throughout the course of a symphony, the person who keeps a tuner's needle in the middle of the dial will be sharp by comparison. It is important to match the pitch level of one's environment, rather than any abstract definition of pitch level that audience members cannot hear.
		</p>
		<p>
			Almost all tuners use a standard called <a href="http://jayfriedman.net/articles/an_introduction_to_temperament">equal temperament</a>, which compromises the integrity of each note's intonation in order to allow keyboard instruments to play in multiple keys. In equal temperament, every note is slightly out of tune. For most instruments, better intonation is possible by bending pitches to fit the harmonic context of the music. Playing a note perfectly "in tune" according to a tuner guarantees a note that doesn't fit just right with the other notes in the ensemble.
		</p>
		<p>
			Even if a machine could give an accurate pitch reference, relying on the tuner trains on a musician's eyes rather than his or her ears. If caught without electronics, musicians who have not learned to bring pitches into tune with what they hear will be completely lost. As artists who communicate with sound, musicians need to work in an audible world much more than a visible one.
		</p>
		<h3>The preferred alternative</h3>
		<p>
			Instead of an arbitrary and visual electronic tuner, a fixed tone can serve as a pitch reference. Musicians can use their ears to determine whether their notes are in tune or not, and develop the technique necessary to reliably produce pitches that match what they hear.
		</p>
		<p>
			When notes are out of tune with each other, an audible "wah-wah" effect is produced by the interference pattern between the conflicting sound waves. Listening for this "beating" effect is the best way to tune a pitch. As an interval grows more dissonant, the beats will speed up; as the notes get closer to in tune with each other, the beats slow down. When the beats disappear altogether, the interval is perfectly in tune.
		</p>
		<p>
			The beats in the sound wave form anywhere that two source waves interact. By playing a drone through headphones, the interference pattern forms in the listener's ears, and the beats on the listener's ear drum are audible. For many instrumentalists, however, feeling the vibrations in one's body is an important piece of feedback while playing. Brass players especially can detect complex physical phenomena in their embouchure as they play. For this reason, it is best to play drone tones through speakers. The drone will interact with the instrumental sound everywhere in the room, and provide tactile as well as aural feedback.
		</p>
	</div>
	<div class="subsection developer"><a name="developer"></a>
		<p>
			<a href="http://www.tenorposaune.com/">Dr. Benjamin Coy</a> serves as the brass professor at <a href="http://www.stcbrass.com/">South Texas College</a>, where he also directs the symphonic band and teaches music theory. He is a regular clinician and has presented lectures on pedagogical topics at conferences throughout the country, including the 2014 International Trombone Festival.
		</p>
		<img src="http://stcbrass.com/wp-content/uploads/2015/11/20141018_JHP_Fullsize-31-e1448414896572-300x300.jpg" class="photoright" />
		<p>
			As a trombonist, Dr. Coy plays with the Valley Symphony Orchestra, and has previously held positions in the Springfield Symphony, Orchestra Iowa, and the Waterloo/Cedar Falls Symphony. He has also performed with numerous other orchestras throughout the midwest and shared the stage with notable musicians from Lang Lang to Carol Jantsch. He has also played for a wide variety of critically-acclaimed opera and theater productions, including the national tour of <em>Hairspray</em>. Dr. Coy maintains a diverse performance calendar including classic rock, jazz, and chamber music.
		</p>
		<p>
			Dr. Coy is committed to the growth of brass repertoire, and his publications are available through <a href="http://www.kagarice.com/">Kagarice Brass Editions</a> and <a href="http://www.cherryclassics.com/">Cherry Classics Music</a>. His current project is to expand the spectrum of pieces appropriate for collegiate concerto competitions through the orchestration of music previously only available with piano accompaniment.
		</p>
		<p>
			Dr. Coy earned his doctorate in trombone performance and pedagogy at The Ohio State University. He previously studied in Chicago, earning his master's degree at Northwestern University and his bachelor's at the Chicago College of Performing Arts. His primary teachers were Chicago Symphony musicians Jay Friedman and Michael Mulcahy.
		</p>
	</div>
	<div class="subsection contact"><a name="contact"></a>
			<form 				action="?" 				method="post"							>		<div class="naked_field"><input id="nonce"  name="nonce" type="hidden" value="7610b1558133d2292ef7ff773bb16191" /></div><p class="field "><label for="name">Your name</label><input id="name" required="true" name="name" type="text" value="" /></p><p class="field "><label for="email">Email address</label><input id="email" required="true" name="email" type="email" value="" /></p><p class="field "><label for="content">Message</label><textarea id="content" required="true" name="content"></textarea></p><p class="submit "><input id="save"  name="save" type="submit" value="Send message" /></p></form>	</div>
</section>
<script type="text/javascript">
// <![CDATA[
document.addEventListener("DOMContentLoaded", function(e) {
	var links = document.querySelectorAll('section a[href^="#"]');
	for (var i=0; i<links.length; i++) {
		links[i].addEventListener('click', internalLink);
		var target, handle = links[i].href.replace(/^[^#]*#/, '');
		if (handle && (target = document.querySelector('a[name="'+handle+'"]'))) {
			console.log(target);
			target.parentNode.removeChild(target);
		}
	}
	var hash = document.location.hash;
	do {
		if (hash) {
			var link = document.querySelector('section a[href="'+hash+'"]');
			if (link) {
				link.click();
				window.scroll(0,0);
				break;
			}
		}
		if (links[0]) {
			links[0].click(); // default
			window.scroll(0,0);
		}
	} while(0);
});
function internalLink(e) {

	history.pushState({}, '', this.href);

	var el = up(e.target, 'a');
	handle = el.href.replace(/^[^#]*#/,'');

	var li, links = document.querySelectorAll('section .subnav a[href^="#"]');
	for (var i=0; i<links.length; i++) {
		li = up(links[i], 'li');
		li.className = '';
	}

	var link = document.querySelector('section .subnav a[href="#'+handle+'"]');
	if (link) {
		li = up(link, 'li');
		if (li) {
			li.className = 'selected';
		}
	}

	var allContent = document.querySelectorAll('section .subsection');
	for (var i=0; i<allContent.length; i++) {
		allContent[i].style.display = 'none';
	}

	var contentEl = document.querySelector('section .subsection.'+handle);
	if (contentEl) {
		contentEl.style.display = 'block';
	}

	e.preventDefault();
	return false;
}
// ]]>
</script>
	<footer>
		<div><a href="/about.php">About<span> tuning<span class="drones">drones</span>.com</span></a></div>
		<div>
<a data-action="login">Log in</a> or <a href="/register.php">Register</a><div id="login">
			<form 				action="/" 				method="post"							>		<div class="naked_field"><input id="nonce"  name="nonce" type="hidden" value="a5f55ccc1ca6564ff0ddeb1095ca017e" /></div><p class="field "><label for="login_username">Email address</label><input id="login_username" required="required" name="login_username" type="text" value="bobbycoancy@gmail.com" /></p><p class="field "><label for="login_password">Password</label><input id="login_password" required="required" name="login_password" type="password" value="" /></p><p class="field "><label for="remember_me">Remember me</label><input id="remember_me"  name="remember_me" type="checkbox" value="true" /></p><p class="submit "><input id="save"  name="save" type="submit" value="Log in" /></p></form></div>
		</div>
	</footer>
</body>
</html>

