import { JSX } from "solid-js";

interface ItemProps {
  name: string;
  link: string;
}

export default function Item(props: ItemProps): JSX.Element {
  return (
    <div class="flex gap-5">
      <span class="text-accent">-</span>
      <a href={props.link} target="_blank" class="text-textPrimary border-expand">{props.name}</a>
    </div>
  );
}
