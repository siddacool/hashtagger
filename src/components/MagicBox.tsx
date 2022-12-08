import { Component, createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import { textConverter } from "~/utils";

const TextBoxEnclosure = styled("section")`
  display: flex;
  margin: 0 auto;
  max-width: 700px;
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
  const [value, setValue] = createSignal("");
  const [isPasted, setIsPasted] = createSignal(false);

  const handlePaste = (e: ClipboardEvent) => {
    e.stopPropagation();
    e.preventDefault();

    setIsPasted(true);

    const { clipboardData } = e;
    const pastedText = clipboardData?.getData("text") || "";
    const processedText = textConverter(pastedText);

    setValue(processedText);
  };

  const handleInput = (e: { currentTarget: { value: string } }) => {
    setIsPasted(false);
    setValue(e.currentTarget.value);
  };

  const handleBlur = () => {};

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
        onBlur={handleBlur}
        value={value()}
      />
    </TextBoxEnclosure>
  );
};

export default MagicBox;
