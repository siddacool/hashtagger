import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { inputValue, setInputValue } from "~/store";
import { ChangeEvent } from "~/types";
import { textConverter } from "~/utils";
import ActionBar from "./ActionBar";

const TextBoxEnclosure = styled("section")`
  display: flex;
  margin: 0 auto;
  max-width: 700px;
  flex-direction: column;
`;

const TextArea = styled("textarea")`
  border-radius: 6px;
  height: 25rem;
  resize: none;
  display: flex;
  flex: 1;
  padding: 16px;
  font-size: 1.4rem;
  font-family: inherit;
  background-color: var(--color-dark-1);
  color: var(--color-vibrant-1);
  outline-color: var(--color-vibrant-1);

  &::placeholder {
    color: inherit;
  }
`;

const MagicBox: Component = () => {
  const handlePaste = (e: ClipboardEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const { clipboardData } = e;
    const pastedText = clipboardData?.getData("text") || "";
    const processedText = textConverter(pastedText);

    setInputValue(processedText);
  };

  const handleInput = (e: ChangeEvent) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <TextBoxEnclosure>
      <TextArea
        name="paste-box"
        id="paste-box"
        cols="30"
        rows="10"
        placeholder="Ctrl + p (paste) to see it in action"
        onPaste={handlePaste}
        onChange={handleInput}
        value={inputValue()}
      />
      <ActionBar />
    </TextBoxEnclosure>
  );
};

export default MagicBox;
