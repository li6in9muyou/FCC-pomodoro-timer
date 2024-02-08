<script>
  import { CURRENT_TIMER, CONFIG } from "./settings.js";
  import {clamp} from "./utility";

  export let ID_PREFIX;
  export let ADJ_STEP = 1;

  const CAPS = { max: 60, min: 1 };

  function update_length(adj) {
    let current_length = $CONFIG[ID_PREFIX];
    current_length += adj;
    $CONFIG[ID_PREFIX] = clamp(current_length, CAPS.min, CAPS.max);
    $CURRENT_TIMER[ID_PREFIX] = $CONFIG[ID_PREFIX] * 60;
  }
</script>

<div id="{ID_PREFIX}-label" class="config">
  <h3>set {ID_PREFIX} length:</h3>
  <div id="{ID_PREFIX}-control" class="config-control">
    <button
      id="{ID_PREFIX}-decrement"
      class="config-btn"
      on:click={() => update_length(-1 * ADJ_STEP)}>less</button
    >
    <div class="config-length-wrap">
      <div id="{ID_PREFIX}-length" class="config-length">
        {$CONFIG[ID_PREFIX]}
      </div>
    </div>
    <button
      id="{ID_PREFIX}-increment"
      class="config-btn"
      on:click={() => update_length(ADJ_STEP)}>more</button
    >
  </div>
</div>

<style>
  .config-length {
    font-family: monospace;
  }
  .config-control {
    display: flex;
  }
  .config-control > * {
    margin-right: 1em;
  }
  .config {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .config-btn {
    margin-bottom: 0;
    color: red;
    background-color: lightgreen;
    font-family: monospace;
    font-weight: 900;
  }

  .config-length-wrap {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
</style>
