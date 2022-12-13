import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const HeroContainer = styled("header")`
  padding-top: 6vh;
  padding-bottom: 20px;

  @media (min-width: 1250px) {
    padding-top: 10vh;
  }
`;

const Hero: Component = () => {
  return (
    <HeroContainer>
      <h1>#Hashtagger</h1>
      <h2>Make hashtags from normal text and vice versa.</h2>
    </HeroContainer>
  );
};

export default Hero;
