import type { RehypePlugin } from "@astrojs/markdown-remark";

import { CATEGORY_BY_CARD_TYPE, CardType } from "../wizard/models/CardType";
import { getCardThemeDefault } from "../wizard/models/cardThemeDefault";

/** The card each endpoint renders; `/api` itself is the stats card. */
const CARD_TYPE_BY_PATH: Record<string, CardType> = {
  "/api": CardType.STATS,
  "/api/top-langs": CardType.TOP_LANGS,
  "/api/pin": CardType.PIN,
  "/api/gist": CardType.GIST,
  "/api/wakatime": CardType.WAKATIME,
};

/** An `<img>` for a card that does not already say how it loads. */
const RAW_CARD_IMAGE = /<img(?![^>]*\bloading=)(?=[^>]*\bsrc="\/api)/g;

/* `styles/starlight-theme.css` styles them; keep the class names in sync with that file. */
const CARD_PREVIEW_LINK = "card-preview-link";
const CARD_PREVIEW_LIGHT = "card-preview-light";
const CARD_PREVIEW_DARK = "card-preview-dark";

/** Card URLs are root-relative, so `URL` needs a base it never reads. */
const RELATIVE_BASE = "https://cards.invalid";

/**
 * Builds a card preview out of one line of markdown.
 *
 * A `/api` image that names no theme is rendered twice, once per site theme,
 * and `styles/starlight-theme.css` shows whichever copy matches.
 * Every card image loads lazily, so the hidden copy is never fetched,
 * and links to its own URL unless the markdown already points it somewhere better.
 */
export const rehypeCardImages: RehypePlugin = () => (tree) => {
  // Typed off the tree so the plugin needs no hast types of its own.
  type ElementNode = Extract<
    (typeof tree.children)[number],
    { tagName: string }
  >;

  /** Opening a preview shows how the card is configured. */
  const linked = (
    image: ElementNode,
    classes: Array<string> = [],
  ): ElementNode => ({
    type: "element",
    tagName: "a",
    properties: {
      href: image.properties.src,
      className: [CARD_PREVIEW_LINK, ...classes],
    },
    children: [image],
  });

  function walk(children: typeof tree.children, link: ElementNode | null) {
    for (const [index, child] of children.entries()) {
      // `rehype-raw` runs after this plugin, so a card written as HTML is still text.
      if (child.type === "raw") {
        child.value = child.value.replaceAll(
          RAW_CARD_IMAGE,
          '<img loading="lazy"',
        );
        continue;
      }

      if (child.type !== "element") {
        continue;
      }

      if (child.tagName !== "img") {
        walk(child.children, child.tagName === "a" ? child : link);
        continue;
      }

      const { properties } = child;
      const src = properties.src;
      if (typeof src !== "string") {
        continue;
      }

      const { pathname, search, searchParams } = new URL(src, RELATIVE_BASE);
      const cardType = CARD_TYPE_BY_PATH[pathname];
      if (cardType === undefined) {
        continue;
      }

      // A hidden copy has no layout box, so only the shown theme is fetched.
      properties.loading ??= "lazy";

      // Markdown writes no class of its own; a link built below already has one.
      if (link !== null) {
        link.properties.className ??= [CARD_PREVIEW_LINK];
      }

      // A named theme is the point of the preview, so leave it as one image.
      if (
        searchParams.has("theme") ||
        searchParams.has("theme_light") ||
        searchParams.has("theme_dark")
      ) {
        if (link === null) {
          children.splice(index, 1, linked(child));
        }
        continue;
      }

      const category = CATEGORY_BY_CARD_TYPE[cardType];

      const themed = (variant: "light" | "dark") => {
        const className =
          variant === "dark" ? CARD_PREVIEW_DARK : CARD_PREVIEW_LIGHT;
        const image = {
          ...child,
          properties: {
            ...properties,
            // Appended, not re-serialized, so the rest of the query survives verbatim.
            src: `${src}${search === "" ? "?" : "&"}theme=${getCardThemeDefault(variant === "dark", category)}`,
            className: [className],
          },
        };
        return link === null ? linked(image, [className]) : image;
      };

      // Both copies name a theme, so the one the iterator lands on next is skipped.
      children.splice(index, 1, themed("light"), themed("dark"));
    }
  }

  walk(tree.children, null);
};
