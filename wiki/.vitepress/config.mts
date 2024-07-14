import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rogue Vikings Servers Wiki & Knowledgebase",
  description:
    "Minecraft PVE Servers, Minecraft SMP Servers, Rust PVE Servers, 7 Days To Die PVE Servers, Tutorials and Server Guides for Rogue Vikings Gaming Servers",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guides", link: "/guides" },
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
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Minecraft Servers",
        collapsed: true,
        items: [
          {
            text: "Minecraft Servers Information",
            link: "/Minecraft/game-servers-information",
          },
          {
            text: "Player vs Player",
            collapsed: true,
            items: [
              {
                text: "SMP Server Guides",
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
                text: "Skyblock Server Guides",
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
                text: "SMP Server Guides",
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
                text: "Skyblock Server Guides",
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
