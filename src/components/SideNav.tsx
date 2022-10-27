import { JSX } from "solid-js";

export default function SideNav(): JSX.Element {
  return (
    <nav class="hidden fixed md:flex items-center justify-center h-[calc(100%-96px)] w-16 left-3 bottom-0 p-5 pt-0">
      <div class="w-[1px] bg-textPrimary h-full"></div>
    </nav>
  );
}
