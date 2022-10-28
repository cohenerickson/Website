import { JSX, createSignal } from "solid-js";
import TopNav from "~/components/TopNav";
import SideNav from "~/components/SideNav";

import NotFound from "~/components/NotFound";

export default function Home(): JSX.Element {
  const [showNav, setShowNav] = createSignal(false);
  const [showContent, setShowContent] = createSignal(false);
  const [content, setContent] = createSignal((<></>) as JSX.Element);

  setTimeout(() => {
    setShowNav(true);
    setTimeout(() => {
      setShowContent(true);
      setContent(<NotFound />);
    }, 1000);
  }, 500);

  return (
    <>
      <div
        class={`transition-opacity cubic-bezier duration-500 ${
          showNav() ? "opacity-1" : "opacity-0"
        }`}
      >
        <TopNav />
        <SideNav />
      </div>
      <main
        class={`h-[calc(100vh-96px)] overflow-y-scroll scroll-smooth cubic-bezier transition-opacity duration-1000 ${
          showContent() ? "opacity-1" : "opacity-0"
        }`}
      >
        {content()}
      </main>
    </>
  );
}
