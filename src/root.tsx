// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title
} from "solid-start";
import { JSX } from "solid-js";
import SEO from "~/components/SEO";
import "./root.css";

export default function Root(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <SEO
          title="Cohen Erickson"
          description="I'm a young full stack developer working @A1Algo, a trading indicator startup. I'm also working on a few personal projects including Solid Timer, a Rubik's cube timer application."
          color="#0a0f14"
          keywords="Cohen Erickson, Cohen, Erickson, cohen erickson, cohen, erickson, cohen erickson github, cohen erickson twitter, cohen erickson linkedin, cohen erickson instagram, cohen erickson youtube, cohen erickson twitch, cohen erickson reddit, cohen erickson facebook, cohen erickson tiktok, cohen erickson snapchat, cohen erickson tik tok, cohen erickson snap chat, cohen erickson github, cohen erickson twitter, cohen erickson linkedin, cohen erickson instagram, cohen erickson youtube, cohen erickson twitch, cohen erickson reddit, cohen erickson facebook, cohen erickson tiktok, cohen erickson snapchat, cohen erickson tik tok, cohen erickson snap chat, cohen erickson github, cohen erickson twitter, cohen erickson linkedin, cohen erickson instagram, cohen erickson youtube, cohen erickson twitch, cohen erickson reddit, cohen erickson facebook, cohen erickson tiktok, cohen erickson snapchat, cohen erickson tik tok, cohen erickson snap chat, cohen erickson github, cohen erickson twitter, cohen erickson linkedin, cohen erickson instagram, cohen erickson youtube, cohen erickson twitch, cohen erickson reddit, cohen erickson facebook, cohen erickson tiktok, cohen erickson snapchat, cohen erickson tik tok, cohen erickson snap chat, cohen erickson github, cohen erickson twitter, cohen erickson linkedin, cohen erickson instagram, cohen erickson youtube, cohen erickson twitch, cohen erickson reddit, cohen erickson facebook, cohen erickson tiktok, cohen erickson snapchat, cohen erickson tik tok, cohen erickson snap chat, cohen erickson github, cohen erickson twitter, cohen erickson linkedin, cohen erickson instagram, cohen erick"
          image="/logo.png"
        />

        <script src="/pro.fontawesome.js" defer></script>
      </Head>
      <Body class="bg-bgPrimary text-textPrimary font-serif overflow-hidden">
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
