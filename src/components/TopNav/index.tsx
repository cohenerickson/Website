import { createSignal, JSX, onMount } from "solid-js";
import Button from "./Button";

export default function Nav(): JSX.Element {
  const [isAtTop, setIsAtTop] = createSignal(true);
  const [showNav, setShowNav] = createSignal(false);
  function fadeIn(elm: HTMLElement) {
    setTimeout(() => {
      setShowNav(true);
    }, 500);
  }

  onMount(() => {
    const scrollElm = document.getElementById("scroll-container");
    function updateScroll() {
      if (scrollElm.scrollTop === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      requestAnimationFrame(updateScroll);
    }
    updateScroll();
  });

  return (
    <nav
      ref={fadeIn}
      class={`flex items-center p-8 w-full justify-between ${
        showNav() ? "" : "translate-y-[-100%]"
      } cubic-bezier transition-all duration-500 ${
        isAtTop() ? "" : "shadow-2xl"
      }`}
    >
      <a href="/" class="text-accent font-bold text-lg" title="Cohen Erickson">
        Cohen Erickson
      </a>
      <div class="hidden md:flex items-center justify-center gap-5">
        <Button link="/#about" text="About" />
        <Button link="/#experience" text="Experience" />
        <Button link="/#work" text="Work" />
        <Button link="/#contact" text="Contact" />
      </div>
    </nav>
  );
}
