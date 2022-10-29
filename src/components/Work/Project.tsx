import { JSX } from "solid-js";
import VanillaTilt from "vanilla-tilt";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  image: string;
}

export default function Project(props: ProjectProps): JSX.Element {
  function initTilt(elm: HTMLElement) {
    VanillaTilt.init(elm);
  }

  return (
    <div
      class="bg-textSecondary shadow-2xl rounded-2xl p-2 px-2"
      ref={initTilt}
      data-tilt
    >
      <div class="shadow-2xl rounded-2xl overflow-hidden w-full h-full bg-bgPrimary relative">
        <img
          src={props.image}
          alt={props.name}
          class="w-full blur-[1px] brightness-50"
        />
        <div class="absolute bottom-0 p-5">
          <h1 class="text-2xl text-accent font-bold">{props.name}</h1>
          <p>{props.description}</p>
        </div>
        <a
          class="text-lg absolute top-3 right-3 hover:text-accent transition-all cubic-bezier"
          target="_blank"
          href={props.link}
        >
          <i class="fa-light fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}
