import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Rogue Vikings Servers Wiki",
  description:
    "Minecraft PVE Servers, Minecraft SMP Servers, Rust PVE Servers, 7 Days To Die PVE Servers, Tutorials and Server Guides for Rogue Vikings Gaming Servers",
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
        items: [{ text: "Introduction", link: "/welcome-to-rogue-vikings" }],
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
                text: "Server Commands",
                collapsed: true,
                items: [
                  {
                    text: "Advanced Enchantment",
                    link: "/Minecraft/Server Commands/advanced-enchantment-system",
                  },
                  {
                    text: "Advanced Kits",
                    link: "/Minecraft/Server Commands/advanced-kits-system",
                  },
                  {
                    text: "Player Withdrawal",
                    link: "/Minecraft/Server Commands/player-withdrawal-system",
                  },
                  {
                    text: "Online Store",
                    link: "/Minecraft/Server Commands/online-store-system",
                  },
                  {
                    text: "NPC Interaction",
                    link: "/Minecraft/Server Commands/npc-interaction-system",
                  },
                  {
                    text: "Server Protection",
                    link: "/Minecraft/Server Commands/server-protection-system",
                  },
                  {
                    text: "Reward Crate",
                    link: "/Minecraft/Server Commands/reward-crate-system",
                  },
                  {
                    text: "Advanced Reward Crate",
                    link: "/Minecraft/Server Commands/advanced-reward-crate-system",
                  },
                  {
                    text: "Unique Reward Crate",
                    link: "/Minecraft/Server Commands/unique-reward-crate-system",
                  },
                  {
                    text: "Custom Commands",
                    link: "/Minecraft/Server Commands/custom-commands-system",
                  },
                  {
                    text: "Interactive Hologram",
                    link: "/Minecraft/Server Commands/interactive-hologram-system",
                  },
                  {
                    text: "Advanced Menu",
                    link: "/Minecraft/Server Commands/advanced-menu-system",
                  },
                  {
                    text: "Discord Integration",
                    link: "/Minecraft/Server Commands/discord-integration-system",
                  },
                  {
                    text: "Player Visual Enhancement",
                    link: "/Minecraft/Server Commands/player-visual-enhancement-system",
                  },
                  {
                    text: "Basic Server Functionality",
                    link: "/Minecraft/Server Commands/basic-server-functionality",
                  },
                  {
                    text: "Chat Management",
                    link: "/Minecraft/Server Commands/chat-management-system",
                  },
                  {
                    text: "Spawn Management",
                    link: "/Minecraft/Server Commands/spawn-management-system",
                  },
                  {
                    text: "Enhanced Fishing",
                    link: "/Minecraft/Server Commands/enhanced-fishing-system",
                  },
                  {
                    text: "Interactive Item",
                    link: "/Minecraft/Server Commands/interactive-item-system",
                  },
                  {
                    text: "Flight Management",
                    link: "/Minecraft/Server Commands/flight-management-system",
                  },
                  {
                    text: "Server Protection",
                    link: "/Minecraft/Server Commands/server-protection-system",
                  },
                  {
                    text: "Player Sitting",
                    link: "/Minecraft/Server Commands/player-sitting-system",
                  },
                  {
                    text: "Custom Join Items",
                    link: "/Minecraft/Server Commands/custom-join-items-system",
                  },
                  {
                    text: "Customizable Item Tag",
                    link: "/Minecraft/Server Commands/customizable-item-tag-system",
                  },
                  {
                    text: "Dynamic Job",
                    link: "/Minecraft/Server Commands/dynamic-job-system",
                  },
                  {
                    text: "Advanced Mob Leveling",
                    link: "/Minecraft/Server Commands/advanced-mob-leveling-system",
                  },
                  {
                    text: "Lightweight Ban",
                    link: "/Minecraft/Server Commands/lightweight-ban-system",
                  },
                  {
                    text: "Permission Management",
                    link: "/Minecraft/Server Commands/permission-management-system",
                  },
                  {
                    text: "RPG Skill",
                    link: "/Minecraft/Server Commands/rpg-skill-system",
                  },
                  {
                    text: "Custom Mob",
                    link: "/Minecraft/Server Commands/custom-mob-system",
                  },
                  {
                    text: "Player Point",
                    link: "/Minecraft/Server Commands/player-point-system",
                  },
                  {
                    text: "Gameplay Time Tracking",
                    link: "/Minecraft/Server Commands/gameplay-time-tracking-system",
                  },
                  {
                    text: "Player Location Privacy",
                    link: "/Minecraft/Server Commands/player-location-privacy-system",
                  },
                  {
                    text: "Resource World Management",
                    link: "/Minecraft/Server Commands/resource-world-management-system",
                  },
                  {
                    text: "Stackable Item",
                    link: "/Minecraft/Server Commands/stackable-item-system",
                  },
                  {
                    text: "Enhanced Shop Interface",
                    link: "/Minecraft/Server Commands/enhanced-shop-interface-system",
                  },
                  {
                    text: "Player-Owned Shop",
                    link: "/Minecraft/Server Commands/player-owned-shop-system",
                  },
                  {
                    text: "Auction",
                    link: "/Minecraft/Server Commands/auction-system",
                  },
                  {
                    text: "Server Optimization",
                    link: "/Minecraft/Server Commands/server-optimization-system",
                  },
                  {
                    text: "Enhanced Combat",
                    link: "/Minecraft/Server Commands/enhanced-combat-system",
                  },
                  {
                    text: "Personal Storage",
                    link: "/Minecraft/Server Commands/personal-storage-system",
                  },
                  {
                    text: "Coin Flip",
                    link: "/Minecraft/Server Commands/coin-flip-system",
                  },
                  {
                    text: "Social Interaction Game",
                    link: "/Minecraft/Server Commands/social-interaction-game-system",
                  },
                  {
                    text: "Quest",
                    link: "/Minecraft/Server Commands/quest-system",
                  },
                  {
                    text: "Random Teleport",
                    link: "/Minecraft/Server Commands/random-teleport-system",
                  },
                  {
                    text: "Player Information Display",
                    link: "/Minecraft/Server Commands/player-information-display-system",
                  },
                  {
                    text: "Secure Trading",
                    link: "/Minecraft/Server Commands/secure-trading-system",
                  },
                  {
                    text: "Enhanced Home",
                    link: "/Minecraft/Server Commands/enhanced-home-system",
                  },
                  {
                    text: "Server Toolset",
                    link: "/Minecraft/Server Commands/server-toolset-system",
                  },
                ],
              },
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
