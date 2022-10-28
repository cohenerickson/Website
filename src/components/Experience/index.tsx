import { JSX, onMount } from "solid-js";
import FadeIn from "../FadeIn";
import Item from "./Item";

export default function About(): JSX.Element {
  return (
    <FadeIn
      class="flex flex-col w-full justify-center gap-5 px-32 h-[calc(100vh-96px)]"
      id="experience"
    >
      <div class="flex items-center gap-5">
        <span class="text-3xl text-accent">Some things I've worked with</span>
        <div class="h-[1px] bg-textPrimary w-1/2"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 text-lg gap-2">
        <Item name="SolidJS" link="//www.solidjs.com"></Item>
        <Item name="TailwindCSS" link="//tailwindcss.com"></Item>
        <Item name="Typescript" link="//www.typescriptlang.org"></Item>
        <Item name="Javascript" link="//www.javascript.com"></Item>
        <Item name="CapacitorJS" link="//capacitorjs.com"></Item>
        <Item name="NodeJS" link="//nodejs.org"></Item>
        <Item name="Bun" link="//bun.sh"></Item>
        <Item name="Java" link="//java.com"></Item>
        <Item name="Python" link="//python.org"></Item>
      </div>
    </FadeIn>
  );
}
