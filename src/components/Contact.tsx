import { JSX, onMount } from "solid-js";
import FadeIn from "./FadeIn";

export default function About(): JSX.Element {
  return (
    <FadeIn
      class="flex flex-col w-full justify-center gap-5 px-32 h-[calc(100vh-96px)]"
      id="contact"
    >
      <div class="flex items-center gap-5">
        <span class="text-3xl text-accent">Get in touch</span>
        <div class="h-[1px] bg-textPrimary w-1/2"></div>
      </div>
    </FadeIn>
  );
}
