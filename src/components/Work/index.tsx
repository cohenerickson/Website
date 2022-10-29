import { JSX, onMount } from "solid-js";
import FadeIn from "~/components/FadeIn";
import VanillaTilt from "vanilla-tilt";
import Project from "./Project";

export default function About(): JSX.Element {
  function initTilt(elm: HTMLElement) {
    VanillaTilt.init(elm);
  }
  return (
    <FadeIn
      class="flex flex-col w-full justify-center gap-5 px-8 md:px-32 min-h-[calc(100vh-96px)]"
      id="work"
    >
      <div class="flex items-center gap-5">
        <span class="text-3xl text-accent">What I've been working on</span>
        <div class="h-[1px] bg-textPrimary w-1/2"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        <Project
          name="Solid Timer"
          link="//github.com/cohenerickson/Solid-Timer"
          description="A Rubik's cube timer application inspired by ChaoTimer and csTimer."
          image="/projects/stimer.png"
        ></Project>
        <Project
          name="Radon Games"
          link="//radon.games"
          description="An open-source unblocked games website built with simplicity in mind."
          image="/projects/radon.png"
        ></Project>
        <Project
          name="A1Algo"
          link="//a1algo.com"
          description="An accurate momentum reversal indicator now available on TradingView."
          image="/projects/a1.png"
        ></Project>
      </div>
    </FadeIn>
  );
}
