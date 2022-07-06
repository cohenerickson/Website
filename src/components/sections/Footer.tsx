import type { JSX } from 'solid-js';

export default function Footer (): JSX.Element {
  return (
    <div class="border-t border-primary sm:mt-10">
      <div class="p-10 sm:p-20">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div>
            <h1 class="font-black text-4xl text-primary py-2">&lt;/&gt;</h1>
            <ul>
              <li class="font-black text-2xl text-primary">SolidJS</li>
              <li class="font-black text-2xl text-primary">Tailwind CSS</li>
              <li class="font-black text-2xl text-primary">Vite</li>
              <li class="font-black text-2xl text-primary">undraw.co Illustrations</li>
            </ul>
          </div>
          <div>
            <h1 class="font-black text-4xl text-primary py-2">~</h1>
            <ul>
              <li class="font-black text-2xl text-primary">7 hours of code</li>
              <li class="font-black text-2xl text-primary">45 files</li>
              <li class="font-black text-2xl text-primary">000KB</li>
              <li class="font-black text-2xl text-primary">2 redesigns</li>
            </ul>
          </div>
        </div>
        <div class="mt-16 flex justify-center font-black text-xl text-primary">
          &copy; 2022 Cohen Erickson
        </div>
      </div>
    </div>
  );
}
