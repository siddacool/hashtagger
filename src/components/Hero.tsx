import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const HeroContainer = styled("header")`
  padding-top: 10vh;
  padding-bottom: 20px;
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
