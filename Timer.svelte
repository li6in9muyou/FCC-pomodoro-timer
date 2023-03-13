<script>
	import { CONFIG, CURRENT_TIMER } from "./settings.js";
	import Controls from "./Controls.svelte";

	const beep_uri = `https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav`;

	const BEEP = () => document.getElementById("beep");
	const ACTUAL_SEC = 999;

	let running;
	let current_period = 0;
	let [period_name, minutes_left] = Object.entries($CONFIG)[current_period];

	const handle = setInterval(() => {
	  if (running === false) {
	    return;
	  }
	  if ($CURRENT_TIMER[period_name] === 0) {
	    if (BEEP()) BEEP().play();

	    current_period += 1;
	    current_period %= Object.values($CONFIG).length;

	    [period_name, minutes_left] = Object.entries($CONFIG)[current_period];
	    $CURRENT_TIMER[period_name] = $CONFIG[period_name] * 60;
	  } else {
	    $CURRENT_TIMER[period_name] -= 1;
	  }
	}, ACTUAL_SEC);

	resetTimer();

	function toggleRunning() {
	  running = !running;
	}
	function resetTimer() {
	  running = false;
	  current_period = 0;
	  period_name = "session";

	  $CONFIG = { session: 25, break: 5 };
	  $CURRENT_TIMER = { session: 25 * 60, break: 5 * 60 };
	  if (BEEP()) {
	    BEEP().pause();
	    BEEP().currentTime = 0;
	  }
	}
	const padTwo = t => ("00" + t).slice(-2);
	function showCountdown(sec) {
	  const mins = sec / 60;
	  return (
	    padTwo(Math.floor(mins)) +
	    ":" +
	    padTwo(Math.floor((mins - Math.floor(mins)) * 60))
	  );
	}
</script>

<style>
	p {
	  font-family: monospace;
	  font-weight: 900;
	  font-size: 1.6em;
	}
	p {
	  border: 2px solid green;
	}
	.timer-display__running {
	  background-color: lightpink;
	}
</style>
<audio
	id="beep"
	preload="auto"
	src={beep_uri}>
  <track kind='captions'/>
</audio>
<p id="timer-label"
	 class='timer-display' 
	 class:timer-display__running={running}>{period_name}</p>
<p id="time-left" 
	 class='timer-display' 
	 class:timer-display__running={running}>
	{ showCountdown($CURRENT_TIMER[period_name]) }
</p>
<Controls running={running} 
					on:toggle={toggleRunning}
					on:reset={resetTimer}
/>