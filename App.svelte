<svelte:head>
	<script type="text/javascript" src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js">
</script>
</svelte:head>
<script>
	import LengthConfig from "./LengthConfig.svelte";
	import Timer from "./Timer.svelte";

	import { CONFIG } from "./settings.js";
</script>


{#each Object.entries($CONFIG) as [name, length]}
	<LengthConfig 
		ID_PREFIX={name}
	/>
{/each}

<Timer />