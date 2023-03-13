<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	export let running;
</script>
<h3>
	<span>
		{running ? 'running' : 'stopped'}
	</span>
	<button id='start_stop'
					on:click={() => dispatch('toggle')}>
		resume/pause
	</button>
	<button id='reset'
					on:click={() => dispatch('reset')}>
		reset
	</button>
</h3>