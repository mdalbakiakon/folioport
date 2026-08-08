import { useEffect } from "react";

const SITE_URL = "https://mdalbakiakon.vercel.app";
const SITE_NAME = "Md. Al Baki Akon";
const AUTHOR_NAME = "Md. Al Baki Akon";

const DEFAULT_IMAGE = `${SITE_URL}/dp.webp`;
const DEFAULT_IMAGE_ALT = "Md. Al Baki Akon — Full Stack Software Engineer";

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = "website",
  theme = "dark",
  noindex = false,
  keywords = [],
  children,
}) => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const url =
    cleanPath === "/" ? SITE_URL : `${SITE_URL}${cleanPath.replace(/\/$/, "")}`;

  useEffect(() => {
    // Title
    document.title = title;

    // Helper for meta tags
    const setMeta = (attribute, value, content) => {
      if (!content) return;

      let element = document.head.querySelector(
        `meta[${attribute}="${value}"]`,
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Helper for link tags
    const setLink = (rel, href) => {
      let element = document.head.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }

      element.setAttribute("href", href);
    };

    // Basic SEO
    setMeta("name", "description", description);
    setMeta("name", "author", AUTHOR_NAME);
    setMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    if (keywords.length > 0) {
      setMeta("name", "keywords", keywords.join(", "));
    }

    // Theme
    setMeta("name", "theme-color", theme === "dark" ? "#000000" : "#ffffff");

    // Canonical
    setLink("canonical", url);

    // Open Graph
    setMeta("property", "og:type", type);
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", imageAlt);
    setMeta("property", "og:image:type", "image/webp");
    setMeta("property", "og:image:width", "503");
    setMeta("property", "og:image:height", "503");

    // X / Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", imageAlt);

  }, [
    title,
    description,
    url,
    image,
    imageAlt,
    type,
    theme,
    noindex,
    keywords,
  ]);

  return <>{children}</>;
};

export default SEO;
