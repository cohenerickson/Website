import { JSX, createSignal } from "solid-js";

type FadeInProps = {
  children: any;
  class?: string;
  id?: string;
  delay?: number;
  ref?: Function;
};

export default function FadeIn(props: FadeInProps): JSX.Element {
  const [isVisible, setVisible] = createSignal(false);

  function ref(elm: HTMLElement) {
    if (props.ref) props.ref(elm);
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(elm);
        });
      });
      observer.observe(elm);
    }, props.delay || 0);
  }

  return (
    <div
      ref={ref}
      class={`fade-in cubic-bezier ${isVisible() ? "is-visible" : ""} ${
        props.class
      }`}
      id={props.id}
    >
      {props.children}
    </div>
  );
}
