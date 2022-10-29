import { JSX } from "solid-js";
// import VanillaTilt from "vanilla-tilt";
import FadeIn from "~/components/FadeIn";

export default function About(): JSX.Element {
  // function initTilt(elm: HTMLElement) {
  //   VanillaTilt.init(elm);
  // }

  return (
    <FadeIn
      id="about"
      class="flex flex-col w-full min-h-[calc(100vh-96px)] px-8 md:px-32 justify-center gap-5"
    >
      <div>
        <span class="text-3xl text-accent">Hello, my name is</span>
        <h1 class="text-5xl font-bold">Cohen Erickson</h1>
      </div>
      <div class="text-4xl font-bold text-textSecondary">I make websites.</div>
      <p class="text-lg">
        I'm a young full stack developer working{" "}
        <a
          href="//www.a1algo.com"
          target="_blank"
          class="text-accent border-expand"
          title="A1Algo"
        >
          @A1Algo
        </a>
        , a trading indicator startup.
      </p>
      <p class="text-lg">
        I'm also working on a few personal projects including{" "}
        <a
          href="//github.com/cohenerickson/Solid-Timer"
          target="_blank"
          class="text-accent border-expand"
          title="Solid Timer"
        >
          Solid Timer
        </a>
        , a Rubik's cube timer application.
      </p>
      {/* <div class="flex w-full h-full items-center justify-center">
      <div
        class="bg-textSecondary h-full md:h-1/2 shadow-2xl rounded-2xl p-2"
        ref={initTilt}
        data-tilt
      >
        <img
          src="https://images.pexels.com/photos/399772/pexels-photo-399772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cohen Erickson"
          class="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </div> */}
    </FadeIn>
  );
}
