---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'MrOwlSky',
    title: 'Founder',
    links: [
      { icon: "discord", link: "https://discord.gg/6Zy29qbkKD" },
      { icon: "facebook", link: "#" },
      { icon: "instagram", link: "#" },
      { icon: "youtube", link: "https://www.youtube.com/@nakedzombo" },
      { icon: "x", link: "#" },
      { icon: "github", link: "https://github.com/GameServersHub" },
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'NakedZombo',
    title: 'Minecraft Founder - Content Creator',
    links: [
      { icon: "discord", link: "https://discord.gg/bm23HubvNZ" },
      { icon: "youtube", link: "https://www.youtube.com/@nakedzombo" },
      { icon: "x", link: "https://twitter.com/nakedzombo" },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet The Rogue Vikings Staff Team
    </template>
    <template #lead>
      Team bio is coming soon!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
