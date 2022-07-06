import type { JSX } from 'solid-js';
import NavbarButton from "./NavbarButton";

export default function Nav (props): JSX.Element {
  return (
    <nav class="bg-background rounded-t w-full h-16 border-b border-primary">
      <div class="w-full h-full flex justify-center items-center">
        <NavbarButton href="/#home">Home</NavbarButton>
        <NavbarButton href="/#projects">Projects</NavbarButton>
        <NavbarButton href="/#about">About</NavbarButton>
        <NavbarButton href="/#skills">Skills</NavbarButton>
        <NavbarButton href="/#contact">Contact</NavbarButton>
      </div>
    </nav>
  );
}
