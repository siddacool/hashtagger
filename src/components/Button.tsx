import { children, Component, ComponentProps } from "solid-js";
import { styled } from "solid-styled-components";

const ButtonStyled = styled("button")`
  display: inline-flex;
  font-size: 1rem;
  align-items: center;
  height: 38px;
  padding: 0 12px;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: var(--color-vibrant-1);
  transition: background-color 100ms;
  color: inherit;
  font-weight: 500;

  &:hover {
    background-color: var(--color-vibrant-1-dark);
  }

  &:active {
    background-color: var(--color-vibrant-1-light);
  }

  & svg {
    height: 1.2rem;
    width: 1.2rem;
    margin-right: 5px;
  }
`;

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
interface ButtonProps extends ComponentProps<any> {
  onClick: () => void;
}

const Button: Component<ButtonProps> = (props: ButtonProps) => {
  const c = children(() => props.children);

  return (
    <ButtonStyled type="button" onClick={props.onClick}>
      {c()}
    </ButtonStyled>
  );
};

export default Button;
