import type { JSX } from 'solid-js';

export default function NavbarButton (props): JSX.Element {
  return (
    <a href={props.href} class="mx-2 bg-clip-padding NavbarButton">
      <div class="bg-background mb-0.5">
        <span class="text-primary font-black">{props.children}</span>
      </div>
    </a>
  );
}
