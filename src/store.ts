import { createSignal } from "solid-js";

export const [inputValue, setInputValue] = createSignal("");

export const [inputFocused, setInputFocused] = createSignal(false);
