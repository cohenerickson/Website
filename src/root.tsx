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
        <title>Cohen Erickson</title>
        <Meta />
        <Links />
      </head>
      <body class="antialiased bg-gradient-to-r from-accent to-accent2 p-2 h-full overflow-hidden">
        <Nav/>
        <div class="bg-background rounded h-content overflow-y-auto scroll-smooth">
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
