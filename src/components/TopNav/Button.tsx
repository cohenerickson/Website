import { JSX } from "solid-js";

let count = 0;

interface ButtonProps {
  link: string;
  text: string;
}

export default function Button(props: ButtonProps): JSX.Element {
  count++;

  const countToString = count.toString();

  window.addEventListener("keypress", ({ key }) => {
    if (key === countToString) {
      window.location.href = props.link;
    }
  });

  return (
    <a href={props.link} class="flex gap-2 border-expand" title={props.text}>
      <span class="text-accent font-bold">0{count}.</span>
      <span>{props.text}</span>
    </a>
  );
}
