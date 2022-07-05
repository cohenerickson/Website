import type { JSX } from 'solid-js';

export default function Card (props): JSX.Element {
  return (
    <a target="_blank" href={props.href} class="block rounded w-full h-full p-5 border-2 border-primary hover:gradient-border">
      <div class="flex">
        <img src={`/icons/${props.icon}`} class="h-10 m-1" alt={props.heading} />
        <h1 class="font-black text-4xl text-primary">{props.heading}</h1>
      </div>
      <div class="flex">
        <p class="font-black text-transparent text-2xl bg-clip-text bg-gradient-to-r from-accent to-accent2">{props.children}</p>
      </div>
    </a>
  );
}
