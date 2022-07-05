import type { JSX } from 'solid-js';

export default function Contact (): JSX.Element {
  return (
    <div id="contact">
      <div class="m-10 sm:m-20">
        <h1 class="font-black text-6xl text-primary">Contact</h1>
        
        <div class="my-10">
          <div>
            <h2 class="font-black text-2xl text-primary pb-2">Subject</h2>
            <input type="text" id="subject" class="w-full md:w-2/3 p-2 text-primary font-black bg-background border-2 border-primary rounded focus:gradient-border"></input>
          </div>
          <div class="my-5">
            <h2 class="font-black text-2xl text-primary pb-2">Message</h2>
            <textarea id="message" class="w-full md:w-2/3 p-2 text-primary font-black bg-background border-2 border-primary rounded focus:gradient-border"></textarea>
          </div>
          <a target="_blank" href="mailto:contact@cohenerickson.com" id="send" class="p-2 text-primary font-black border-2 border-primary rounded hover:gradient-border">Send</a>
        </div>
      </div>
    </div>
  )
}
