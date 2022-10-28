import { JSX } from "solid-js";
import Button from "./Button";

export default function SideNav(): JSX.Element {
  function showNav (elm: HTMLElement) {
    setTimeout(() => {
      elm.classList.remove("translate-x-[-100%]");
    }, 1000);
  }
  return (
    <nav ref={showNav} class="hidden z-10 fixed md:flex md:flex-col items-center justify-center h-[calc(100%-96px)] w-16 left-0 ml-3 bottom-0 p-5 translate-x-[-100%] cubic-bezier transition-all duration-500">
      <div class="w-[1px] bg-textPrimary h-full"></div>
      <Button link="//github.com/cohenerickson" text="GitHub" icon="github" />
      <Button
        link="//discord.com/users/533081943638671377"
        text="Discord"
        icon="discord"
      />
      <Button
        link="//stackoverflow.com/users/14635947"
        text="Stack Overflow"
        icon="stack-overflow"
      />
      <div class="w-[1px] bg-textPrimary h-full"></div>
    </nav>
  );
}
