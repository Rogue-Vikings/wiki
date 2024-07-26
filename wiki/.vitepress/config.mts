import { defineConfig } from "vitepress";

const ogUrl = "https://vite-pwa-org.netlify.app/";
const ogImage = `${ogUrl}og-image.png`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rogue Vikings Servers Wiki",
  description:
    "Minecraft PVE Servers, Minecraft SMP Servers, Rust PVE Servers, 7 Days To Die PVE Servers, Tutorials and Server Guides for Rogue Vikings Gaming Servers",
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ffffff" },
    ],
    ["meta", { name: "author", content: "Rogue Vikings" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "PWA, React, Vue, VitePress, Preact, Svelte, SvelteKit, workbox, SolidJS, Vite, vite-plugin, îles, Astro, Nuxt 3, Nuxt module",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Vite Plugin PWA" }],
    ["meta", { property: "og:image", content: ogImage }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Zero-config PWA Framework-agnostic Plugin for Vite and Integrations",
      },
    ],
    ["meta", { property: "og:url", content: ogUrl }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Zero-config PWA Framework-agnostic Plugin for Vite and Integrations",
      },
    ],
    ["meta", { name: "twitter:title", content: "Vite PWA" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:site", content: "@antfu7" }],
    ["meta", { name: "twitter:url", content: ogUrl }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/welcome-to-rogue-vikings" },
      { text: "Meet The Team", link: "/meet-rogue-vikings-staff-team" },
      { text: "Join Our Discord", link: "https://discord.gg/6Zy29qbkKD" },
      {
        text: "Extra",
        items: [
          {
            text: "Help Support Us",
            link: "https://roguevikings.com/how-to-support-us",
          },
          {
            text: "Gaming Articles",
            link: "https://roguevikings.com/gaming-news",
          },
          {
            text: "Rent Your Own Server",
            link: "https://gameservershub.com/hosting/",
          },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Welcome To Rogue Vikings",
        items: [
          { text: "Introduction", link: "/welcome-to-rogue-vikings" },
          {
            text: "Learn Our Rankings",
            link: "/meet-rogue-vikings-staff-team",
          },
        ],
      },
      {
        text: "Minecraft Servers",
        collapsed: true,
        items: [
          {
            text: "Server Lore",
            link: "/Minecraft/game-servers-information",
          },
          {
            text: "Minecraft SMP",
            collapsed: true,
            items: [
              {
                text: "Server Commands",
                collapsed: true,
                items: [
                  {
                    text: "Introduction to commands",
                    link: "/Minecraft/Server Commands/advanced-enchantment-system",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "Rust Servers",
        collapsed: true,
        items: [
          {
            text: "Rust Servers Information",
            link: "/Rust/game-servers-information",
          },
          {
            text: "Player vs Player",
            collapsed: true,
            items: [
              {
                text: "Server Guides",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
              {
                text: "Server Commands",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
            ],
          },
          {
            text: "Player vs Enviroment",
            collapsed: true,
            items: [
              {
                text: "Server Guides",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
              {
                text: "Server Commands",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "7 Days To Die Servers",
        collapsed: true,
        items: [
          {
            text: "7 Days To Die Servers Information",
            link: "/7 Days To Die/game-servers-information",
          },
          {
            text: "Player vs Player",
            collapsed: true,
            items: [
              {
                text: "Server Modlets",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
              {
                text: "Server Commands",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
            ],
          },
          {
            text: "Player vs Enviroment",
            collapsed: true,
            items: [
              {
                text: "Server Modlets",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
              {
                text: "Server Commands",
                collapsed: true,
                items: [
                  {
                    text: "Example 1",
                    collapsed: true,
                    items: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/6Zy29qbkKD" },
      { icon: "facebook", link: "#" },
      { icon: "instagram", link: "#" },
      { icon: "youtube", link: "https://www.youtube.com/@nakedzombo" },
      { icon: "x", link: "#" },
      { icon: "github", link: "https://github.com/GameServersHub" },
    ],
  },
});
