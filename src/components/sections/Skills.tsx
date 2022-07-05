import Card from "../Card";

export default function Projects () {
  return (
    <div id="skills">
      <div class="m-10 sm:m-20">
        <h1 class="font-black text-6xl text-primary">Skills</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">

          <Card href="" icon="html.svg" heading="HTML">Since 2018</Card>
          <Card href="" icon="css.svg" heading="CSS">Since 2018</Card>
          <Card href="" icon="javascript.svg" heading="JavaScript">Since 2018</Card>
          <Card href="" icon="vscode.svg" heading="Vs Code">Since 2019</Card>
          <Card href="" icon="nodejs.svg" heading="Node JS">Since 2019</Card>
          <Card href="" icon="java.svg" heading="Java">Since 2021</Card>
          <Card href="" icon="git.svg" heading="Git">Since 2021</Card>
          <Card href="" icon="tailwindcss.svg" heading="Tailwind CSS">Since 2021</Card>
          <Card href="" icon="typescript.svg" heading="TypeScript">Since 2021</Card>
          <Card href="" icon="python.svg" heading="Python">Since 2022</Card>
          <Card href="" icon="storybook.svg" heading="Storybook">Since 2022</Card>

        </div>
      </div>
    </div>
  );
}
