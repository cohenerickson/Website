import { Meta, Title } from "solid-start";
import { JSX } from "solid-js";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  color: string;
}

export default function SEO(props: SEOProps): JSX.Element {
  return (
    <>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="theme-color" content={props.color} />

      <Title>{props.title}</Title>
      <Meta property="og:title" content={props.title} />

      <link rel="icon" href="/favicon.ico" />
      <Meta property="og:image" content={props.image} />
      <link rel="apple-touch-icon" href={props.image} />

      <Meta name="twitter:card" content="summary" />

      <link href="/manifest.webmanifest" rel="manifest"></link>

      <Meta name="robots" content="index, follow" />
      <Meta name="revisit-after" content="7 days" />

      <Meta name="description" content={props.description} />
      <Meta property="og:description" content={props.description} />
      <Meta name="keywords" content={props.keywords} />
    </>
  );
}
