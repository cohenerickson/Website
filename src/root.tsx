// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Suspense } from "solid-js";
import Nav from "./components/Nav";
import "./build.css";

export default function Root() {
  return (
    <html lang="en" class="h-screen">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#161616" />

        <title>Cohen Erickson</title>
        <meta property="og:title" content="Cohen Erickson" />

        <meta name="description" content="Full stack hobbyist developer." />
        <meta property="og:description" content="Full stack hobbyist developer." />

        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />

        <meta name="keywords" content="cohen, erickson, fohen erickson, developer, full stack, front end, back end, radon games, appeal, link bot, osana, programming" />

        <script src="/js/contact.js" defer></script>
        <Meta />
        <Links />
      </head>
      <body class="antialiased bg-gradient-to-r from-accent to-accent2 p-2 h-full overflow-hidden">
        <Nav/>
        <div class="bg-background rounded h-content overflow-y-auto overflow-x-hidden scroll-smooth">
          <ErrorBoundary>
            <Suspense>
              <Routes />
            </Suspense>
          </ErrorBoundary>
          <Scripts />
        </div>
      </body>
    </html>
  );
}
