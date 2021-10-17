import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description?: string;
};

export const Head = ({ title, description }: Props) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description ?? "Made for fun"} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description ?? `Made for fun`} />
    <meta name="robots" content="noindex" />
  </Helmet>
);
