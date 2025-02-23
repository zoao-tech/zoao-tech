import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <span className="font-modista text-xl">ZoAO.tech</span>,
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "zNFT Token Standard",
      url: "/docs/znft/overview",
    },
    {
      text: "Zoo Keepers Genesis",
      url: "/docs/zoo-keepers/overview",
    },
    {
      text: "ZoAO.market",
      url: "https://zoao.market",
    },
    {
      text: "GitHub",
      url: "",
    },
  ],
};
