import React from "react";
import { SeoProps } from "./seo.props";
import { siteConfig } from "@/config/site.config";

const Seo = ({
  children,
  author=siteConfig.author,
  metaDescription=siteConfig.metaDescription,
  metaKeywords=siteConfig.metaKeywords,
  metaTitle=siteConfig.metaTitle,
}: SeoProps) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{metaTitle}</title>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content={metaDescription} />
      <meta name="keyword" content={metaKeywords} />
      <meta name="author" content={author} />
      <link rel="shortcut icon" href={`/blog.png`} type="image/x-icon"/>


      {children}
    </>
  );
};

export default Seo;
