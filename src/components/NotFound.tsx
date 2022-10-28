import { JSX, onMount } from "solid-js";
import VanillaTilt from "vanilla-tilt";
import FadeIn from "~/components/FadeIn";

export default function About(): JSX.Element {
  function initTilt(elm: HTMLElement) {
    VanillaTilt.init(elm);
  }

  return (
    <section class="px-8 md:px-32 h-[calc(100vh-96px)]">
      <FadeIn
        id="about"
        class="flex flex-col w-full h-full justify-center gap-5"
      >
        <div>
          <span class="text-3xl text-accent">404 Not Found</span>
          <h1 class="text-5xl font-bold">Hmm, that page doesn't exist</h1>
        </div>
        <p class="text-lg">
          Looking for the{" "}
          <a
            href="/"
            class="text-accent border-expand"
            title="Home Page"
          >
            Home Page
          </a>
          ?
        </p>
      </FadeIn>
    </section>
  );
}
