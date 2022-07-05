import type { JSX } from 'solid-js';

export default function NotFound (): JSX.Element {
  return (
    <>
      <div class="flex flex-col justify-center p-16">
        <img src="/images/undraw_server_down_s-4-lk.svg" class="h-72"></img>
      </div>
      <h1 class="text-primary text-2xl text-center font-black ">404 - Page Not Found</h1>
    </>
  );
}
