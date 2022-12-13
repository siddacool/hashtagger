import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { inputValue, setInputValue } from "~/store";
import { textConverter } from "~/utils";
import Button from "./Button";
import CloseIcon from "./Icons/CloseIcon";
import DuplicateIcon from "./Icons/DuplicateIcon";
import RefreshIcon from "./Icons/RefreshIcon";

const ActionBarStyled = styled("div")`
  display: flex;
  padding: 16px 0;
  justify-content: flex-end;

  & button {
    margin-left: 16px;
  }
`;

const ActionBar: Component = () => {
  const handleConvert = () => {
    const processedText = textConverter(inputValue());

    setInputValue(processedText);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputValue());
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <ActionBarStyled>
      <Button onClick={handleConvert}>
        <RefreshIcon />
        Convert
      </Button>
      <Button onClick={handleCopy}>
        <DuplicateIcon />
        Copy
      </Button>
      <Button onClick={handleClear}>
        <CloseIcon />
        Clear
      </Button>
    </ActionBarStyled>
  );
};

export default ActionBar;
