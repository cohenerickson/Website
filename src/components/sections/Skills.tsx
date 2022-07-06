import type { JSX } from 'solid-js';
import Card from "../Card";

import HTML from "../../icons/html.svg";
import CSS from "../../icons/css.svg";
import JS from "../../icons/javascript.svg";
import VsCode from "../../icons/vscode.svg";
import NodeJS from "../../icons/nodejs.svg";
import Java from "../../icons/java.svg";
import AndroidStudio from "../../icons/androidstudio.svg";
import Git from "../../icons/git.svg";
import TailwindCSS from "../../icons/tailwindcss.svg";
import TS from "../../icons/typescript.svg";
import Python from "../../icons/python.svg";
import SolidJS from "../../icons/solidjs.svg";
import Storybook from "../../icons/storybook.svg";


export default function Projects (): JSX.Element {
  return (
    <div id="skills" class="bg-background rounded mt-2">
      <div class="p-10 sm:p-20">
        <h1 class="font-black text-6xl text-primary">Skills</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">

          <Card href="//developer.mozilla.org/" icon={HTML} heading="HTML">Since 2018</Card>
          <Card href="//developer.mozilla.org/" icon={CSS} heading="CSS">Since 2018</Card>
          <Card href="//developer.mozilla.org/" icon={JS} heading="JavaScript">Since 2018</Card>
          <Card href="//code.visualstudio.com/" icon={VsCode} heading="Vs Code">Since 2019</Card>
          <Card href="//nodejs.org/" icon={NodeJS} heading="Node JS">Since 2019</Card>
          <Card href="//docs.oracle.com/java/" icon={Java} heading="Java">Since 2021</Card>
          <Card href="//developer.android.com/studio" icon={AndroidStudio} heading="Android Studio">Since 2021</Card>
          <Card href="//git-scm.com/" icon={Git} heading="Git">Since 2021</Card>
          <Card href="//tailwindcss.com/" icon={TailwindCSS} heading="Tailwind CSS">Since 2021</Card>
          <Card href="//www.typescriptlang.org/" icon={TS} heading="TypeScript">Since 2021</Card>
          <Card href="//www.python.org/" icon={Python} heading="Python">Since 2022</Card>
          <Card href="//www.solidjs.com/" icon={SolidJS} heading="SolidJS">Since 2022</Card>
          <Card href="//storybook.js.org/" icon={Storybook} heading="Storybook">Since 2022</Card>

        </div>
      </div>
    </div>
  );
}
