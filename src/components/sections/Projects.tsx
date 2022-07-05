import Card from "../Card";

export default function Projects () {
  return (
    <div id="projects">
      <div class="m-10 sm:m-20">
        <h1 class="font-black text-6xl text-primary">Projects</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 my-10 gap-6">

          <Card icon="radon.png" heading="Radon Games">An open-source unblocked games website built with simplicity in mind.</Card>

          <Card icon="appeal.png" heading="Appeal">A minimalistic discord bot for moderation, utilities, and more.</Card>

          <Card icon="linkbot.png" heading="Link Bot">A customizable discord bot for distributing links.</Card>

          <Card icon="osana.png" heading="Osana">An interception based web proxy.</Card>

        </div>
      </div>
    </div>
  );
}
