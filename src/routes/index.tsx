import { JSX } from "solid-js";
import TopNav from "~/components/TopNav";
import SideNav from "~/components/SideNav";

import About from "~/components/About";
import Work from "~/components/Work";

export default function Home(): JSX.Element {
  return (
    <>
      <TopNav />
      <SideNav />
      <main class="h-[calc(100vh-96px)] overflow-y-scroll scroll-smooth">
        <About />
        <Work />
      </main>
    </>
  );
}
