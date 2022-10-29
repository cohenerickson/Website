import { JSX, createSignal } from "solid-js";
import TopNav from "~/components/TopNav";
import SideNav from "~/components/SideNav";

import NotFound from "~/components/NotFound";

export default function Home(): JSX.Element {
  const [showContent, setShowContent] = createSignal(false);
  const [content, setContent] = createSignal((<></>) as JSX.Element);

  setTimeout(() => {
    setShowContent(true);
    setContent(
      <>
        <NotFound />
      </>
    );
  }, 1500);

  return (
    <>
      <TopNav />
      <SideNav />
      <main
        id="scroll-container"
        class={`h-[calc(100vh-96px)] overflow-y-scroll overflow-x-hidden scroll-smooth cubic-bezier transition-opacity duration-1000 ${
          showContent() ? "opacity-1" : "opacity-0"
        }`}
      >
        {content()}
      </main>
    </>
  );
}
