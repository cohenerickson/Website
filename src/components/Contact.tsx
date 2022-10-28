import { JSX } from "solid-js";
import FadeIn from "~/components/FadeIn";

export default function About(): JSX.Element {
  return (
    <FadeIn class="px-8 md:px-32 h-[calc(100vh-96px)]">
      <div
        id="contact"
        class="flex flex-col w-full h-full justify-center gap-5"
      >
        <div>
          <span class="text-3xl text-accent">
            Looking to bring your idea alive?
          </span>
          <h1 class="text-5xl font-bold">Get in touch</h1>
        </div>
        <p class="text-lg">
          I'm currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div>
          <a
            href="mailto:inquries@cohenerickson.com"
            target="_blank"
            class="py-2 px-3 bg-accent rounded-lg transition-all"
          >
            Send me an email!
          </a>
        </div>
      </div>
    </FadeIn>
  );
}
