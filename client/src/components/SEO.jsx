import { useEffect } from "react";

const SITE_URL = "https://mdalbakiakon.vercel.app";
const SITE_NAME = "Md. Al Baki Akon";
const AUTHOR_NAME = "Md. Al Baki Akon";

const DEFAULT_IMAGE = `${SITE_URL}/dp.webp`;
const DEFAULT_IMAGE_ALT = "Md. Al Baki Akon — Full Stack Software Engineer";

const SAME_AS = [
  "https://github.com/mdalbakiakon",
  "https://www.linkedin.com/in/md-al-baki-akon-352989362/",
  "https://x.com/baki_dev8131",
];

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

    // Helper for JSON-LD structured data script
    const setJsonLd = (id, data) => {
      let element = document.head.querySelector(`script[data-jsonld="${id}"]`);

      if (!element) {
        element = document.createElement("script");
        element.type = "application/ld+json";
        element.setAttribute("data-jsonld", id);
        document.head.appendChild(element);
      }

      element.textContent = JSON.stringify(data);
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

    // Person schema — only makes sense on the homepage/about page,
    // not on every sub-page (blog posts etc. would get their own type)
    if (cleanPath === "/") {
      setJsonLd("person", {
        "@context": "https://schema.org",
        "@type": "Person",
        name: AUTHOR_NAME,
        url: SITE_URL,
        image,
        jobTitle: "Full Stack Software Engineer",
        description,
        sameAs: SAME_AS,
      });
    }
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
    cleanPath,
  ]);

  return <>{children}</>;
};

export default SEO;