import { JSX } from "solid-js";

export default function Nav(): JSX.Element {
  window.addEventListener("keypress", ({ key }) => {
    if (key === "1") {
      window.location.href = "/#about";
    } else if (key === "2") {
      window.location.href = "/#experience";
    } else if (key === "3") {
      window.location.href = "/#work";
    } else if (key === "4") {
      window.location.href = "/#contact";
    }
  });
  return (
    <nav class="flex items-center p-8 w-full justify-between">
      <a href="/" class="text-accent font-bold text-lg">
        Cohen Erickson
      </a>
      <div class="hidden md:flex items-center justify-center gap-5">
        <a href="/#about" class="flex gap-2 border-expand">
          <span class="text-accent font-bold">01.</span>
          <span>About</span>
        </a>
        <a href="/#experience" class="flex gap-2 border-expand">
          <span class="text-accent font-bold">02.</span>
          <span>Experience</span>
        </a>
        <a href="/#work" class="flex gap-2 border-expand">
          <span class="text-accent font-bold">03.</span>
          <span>Work</span>
        </a>
        <a href="/#contact" class="flex gap-2 border-expand">
          <span class="text-accent font-bold">04.</span>
          <span>Contact</span>
        </a>
      </div>
    </nav>
  );
}
