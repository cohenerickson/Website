import type { JSX } from 'solid-js';
import Card from "../Card";

export default function Projects (): JSX.Element {
  return (
    <div id="skills">
      <div class="m-10 sm:m-20">
        <h1 class="font-black text-6xl text-primary">Skills</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">

          <Card icon="html.svg" heading="HTML">Since 2018</Card>
          <Card icon="css.svg" heading="CSS">Since 2018</Card>
          <Card icon="javascript.svg" heading="JavaScript">Since 2018</Card>
          <Card icon="vscode.svg" heading="Vs Code">Since 2019</Card>
          <Card icon="nodejs.svg" heading="Node JS">Since 2019</Card>
          <Card icon="java.svg" heading="Java">Since 2021</Card>
          <Card icon="android-studio.svg" heading="Android Studio">Since 2021</Card>
          <Card icon="git.svg" heading="Git">Since 2021</Card>
          <Card icon="tailwindcss.svg" heading="Tailwind CSS">Since 2021</Card>
          <Card icon="typescript.svg" heading="TypeScript">Since 2021</Card>
          <Card icon="python.svg" heading="Python">Since 2022</Card>
          <Card icon="storybook.svg" heading="Storybook">Since 2022</Card>

        </div>
      </div>
    </div>
  );
}
