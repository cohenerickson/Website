import { JSX } from "solid-js";
import FadeIn from "~/components/FadeIn";

export default function About(): JSX.Element {
  return (
    <FadeIn
      id="contact"
      class="justify-center gap-5 flex flex-col px-8 md:px-32 min-h-[calc(100vh-96px)]"
    >
      <div>
        <span class="text-3xl text-accent">
          Looking to bring your idea alive?
        </span>
        <h1 class="text-5xl font-bold">Get in touch</h1>
      </div>
      <p class="text-lg mb-2">
        I'm currently looking for new opportunities. My inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <div>
        <a
          href="mailto:inquries@cohenerickson.com"
          target="_blank"
          class="py-3 px-4 bg-accent rounded-lg transition-all text-lg shadow-lg hover:shadow-2xl"
        >
          <i class="fa-regular fa-envelope mr-2"></i>
          Send me an email!
        </a>
      </div>
    </FadeIn>
  );
}
