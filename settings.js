import { writable } from "svelte/store";

export let CONFIG = writable({
  session: 25,
  break: 5,
});

export let CURRENT_TIMER = writable({
  session: 25 * 60,
  break: 5 * 60,
});
