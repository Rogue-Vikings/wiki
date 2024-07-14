import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rogue Vikings Servers Wiki & Knowledgebase",
  description:
    "Minecraft PVE Servers, Minecraft SMP Servers, Rust PVE Servers, 7 Days To Die PVE Servers, Tutorials and Server Guides for Rogue Vikings Gaming Servers",
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

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
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
