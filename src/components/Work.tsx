import { JSX, onMount } from "solid-js";
import VanillaTilt from "vanilla-tilt";

export default function About(): JSX.Element {
  onMount(() => {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]") as any);
  });

  return (
    <section class="flex flex-col w-full justify-center gap-5 px-32 h-[calc(100vh-96px)]" id="work">
      <div class="flex items-center gap-5">
        <span class="text-3xl text-accent">Work</span>
        <div class="h-[1px] bg-textPrimary w-1/2"></div>
      </div>
    </section>
  );
}
