import Head from 'next/head';

const meta = {
  title: 'Wordle Game',
  description: 'Wordle Game built with Next.js and tailwindcss',
  authorName: 'Muhammad A SI F',
  siteUrl: 'http://localhost:3000/',
  imageUrl: 'http://localhost:3000/',
  linkedIn: 'in/muhammadasif-wd/',
};

export function Seo({
  title = meta.title,
  description = meta.description,
  children,
}) {
  return (
    <Head>
      {/* Primary */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <meta name="author" content={meta.authorName} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={meta.imageUrl} />

      {/* linkedin */}
      <meta name="linkedIn:card" content="summary_large_image" />
      <meta name="linkedIn:title" content={title} />
      <meta name="linkedIn:description" content={description} />
      <meta name="linkedIn:image" content={meta.imageUrl} />
      <meta name="linkedIn:site" content={`@${meta.linkedIn}`} />
      <meta name="linkedIn:creator" content={`@${meta.linkedIn}`} />
      {children}
    </Head>
  );
}
