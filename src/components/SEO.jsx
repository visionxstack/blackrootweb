import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, type = "website", jsonLd }) {
  const siteUrl = "https://www.blackroot.com.np";
  const currentUrl = `${siteUrl}${url || ''}`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BlackRoot Technologies" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${siteUrl}/logo/blackroot-logo.png`} />
      <meta property="og:image:alt" content="BlackRoot Technologies logo" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/logo/blackroot-logo.png`} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
