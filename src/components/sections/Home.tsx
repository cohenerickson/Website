import type { JSX } from 'solid-js';

export default function (): JSX.Element {
  return (
    <div id="home">
      <div class="grid grid-cols-1 sm:grid-cols-2 m-10 sm:m-20 gap-6">
        <div class="flex items-center">
          <div class="block">
            <h1 class="font-black text-6xl text-primary">Cohen Erickson</h1>
            <p class="p-1 font-black text-transparent text-2xl bg-clip-text bg-gradient-to-r from-accent to-accent2">Full stack hobbyist developer.</p>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img class="h-64" src="/images/undraw_code_typing_re_p8b9.svg" alt="Code Typing"></img>
        </div>
      </div>
    </div>
  );
}
