export default function Projects () {
  return (
    <div id="projects">
      <div class="m-10 sm:m-20">
        <h1 class="font-black text-6xl text-primary">Projects</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 my-10 gap-6">
          <a href="https://radon.games/" target="_blank">
            <div class="flex items-center border-2 border-primary hover:border-accent p-5 rounded">
              <div class="block">
                <h1 class="font-black text-4xl text-primary">Radon Games</h1>
                <p class="font-black text-transparent text-2xl bg-clip-text bg-gradient-to-r from-accent to-accent2">An open-source unblocked games website built with simplicity in mind.</p>
              </div>
            </div>
          </a>

          <a href="https://top.gg/bot/806597415225655346" target="_blank">
            <div class="flex items-center border-2 border-primary hover:border-accent p-5 rounded">
              <div class="block">
                <h1 class="font-black text-4xl text-primary">Appeal</h1>
                <p class="font-black text-transparent text-2xl bg-clip-text bg-gradient-to-r from-accent to-accent2">A minimalistic discord bot for moderation, utilities, and more.</p>
              </div>
            </div>
          </a>

          <a href="https://top.gg/bot/970138334858985512" target="_blank">
            <div class="flex items-center border-2 border-primary hover:border-accent p-5 rounded">
              <div class="block">
                <h1 class="font-black text-4xl text-primary">Link Bot</h1>
                <p class="font-black text-transparent text-2xl bg-clip-text bg-gradient-to-r from-accent to-accent2">A customizable discord bot for distributing links.</p>
              </div>
            </div>
          </a>

          <a href="https://osanaweb.xyz/" target="_blank">
            <div class="flex items-center border-2 border-primary hover:border-accent p-5 rounded">
              <div class="block">
                <h1 class="font-black text-4xl text-primary">Osana</h1>
                <p class="font-black text-transparent text-2xl bg-clip-text bg-gradient-to-r from-accent to-accent2">An interception based web proxy.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
