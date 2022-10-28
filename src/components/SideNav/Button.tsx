import { JSX } from "solid-js";

interface ButtonProps {
  link: string;
  text: string;
  icon: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  return (
    <a
      target="_blank"
      href={props.link}
      class="p-2 hover:text-accent relative hover:translate-y-[-2px] transition-all cubic-bezier duration-500"
      title={props.text}
    >
      <i class={`fa-brands fa-${props.icon}`}></i>
    </a>
  );
}
