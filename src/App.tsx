import type { Component } from "solid-js";
import Hero from "./components/Hero";
import MagicBox from "./components/MagicBox";

const App: Component = () => {
  return (
    <main class="app">
      <Hero />
      <MagicBox />
    </main>
  );
};

export default App;
