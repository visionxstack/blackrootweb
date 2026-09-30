import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url, type = "website", jsonLd }) {
  const siteUrl = "https://blackroot.com.np";
  const currentUrl = `${siteUrl}${url || ''}`;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="BlackRoot Technologies" />
      {/* Fallback image if one is provided in the future */}
      <meta property="og:image" content={`${siteUrl}/logo/blackroot-logo.png`} />

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
