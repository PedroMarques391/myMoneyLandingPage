import { writable, type Writable } from "svelte/store";

export const isOpen: Writable<boolean> = writable(false);