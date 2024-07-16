::: warning
Explore the comprehensive list of server commands below, encompassing a variety of functionalities. Please note that certain commands are reserved for administrators, ensuring the smooth operation and security of our servers.
:::

# Commands & Permissions

- To utilize any `/ae` command, ensure that you have been granted the `ae.help` permission. This permission is essential for accessing and using the commands effectively.

| Command                                                                   | Explanation                                                                                                       | Permission                            |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `/aegive (player) (material) (amount) [additional args]`                  | Gives a specified amount of a material to a player. Additional arguments may be used for specific configurations. | `aegive.permission`                   |
| `/alchemist`                                                              | Opens the alchemist interface where players can interact with potions and brewing mechanics.                      | `ae.alchemist`                        |
| `/asets`                                                                  | Allows players to access and manage armor sets and custom weapons through an interactive GUI.                     | `advancedenchants.sets`               |
| `/enchanter`                                                              | Opens the enchanter GUI, allowing players to apply custom enchantments to their items.                            | `ae.enchanter`                        |
| `/gkits`                                                                  | Opens the GKits menu, where players can access predefined kits containing various items and tools.                | N/A                                   |
| `/tinkerer`                                                               | Provides access to the tinkerer interface, allowing players to modify and upgrade their items.                    | `ae.tinkerer`                         |
| `/withdrawsouls (amount)`                                                 | Deducts a specified amount of souls from an item.                                                                 | N/A                                   |
| `/ae`                                                                     | Main command for accessing Advanced Enchantments plugin functionalities.                                          | N/A                                   |
| `/ae about`                                                               | Displays information about the current build of the Advanced Enchantments plugin.                                 | N/A                                   |
| `/ae admin [page]/[search string]`                                        | Opens a comprehensive menu displaying all available enchantments with a 100% success rate.                        | `ae.admin`                            |
| `/ae enchant (enchantment) (level)`                                       | Applies a specified enchantment at a defined level to the item currently held by the player.                      | `ae.enchant`                          |
| `/ae give (player) (enchantment) (level)`                                 | Gives a custom enchanted book to another player.                                                                  | `ae.givercbook`                       |
| `/ae givebook (player) (enchantment) (level) (count) (success) (destroy)` | Gives a book with specific success rates and destruction conditions to another player.                            | `ae.givebook`                         |
| `/ae givegkit (player) (gkit)`                                            | Grants a player items from a predefined GKit.                                                                     | `ae.givegkit`                         |
| `/ae giveitem (player) (item) [amount]`                                   | Provides various plugin-specific items to another player.                                                         | `ae.giveitem`                         |
| `/ae giverandombook (player) (group) [amount]`                            | Gives one or more random books from a specified group to another player.                                          | `ae.giverandombook`                   |
| `/ae givercbook (type) (player) (amount)`                                 | Gives a right-clickable book of a specified type and amount to another player.                                    | `ae.givercbook`                       |
| `/ae greset (player) (gkit)`                                              | Resets a predefined GKit for a specific player, allowing them to claim it again.                                  | `ae.gkits`                            |
| `/ae info (enchantment)`                                                  | Provides detailed information about a specific custom enchantment, including its effects and mechanics.           | `ae.info`                             |
| `/ae lastchanged`                                                         | Displays all enchantments that were added or removed during the last plugin reload.                               | `ae.lastchanged`                      |
| `/ae list`                                                                | Lists all custom enchantments available in the server.                                                            | `ae.list`                             |
| `/ae magicdust (group) (rate) (player)`                                   | Gives magic dust with a specific success rate to a designated player.                                             | `ae.givedust`                         |
| `/ae market`                                                              | Opens a menu where players can browse and download community-made enchantments.                                   | `ae.market`                           |
| `/ae open (player) (enchanter/tinkerer/alchemist)`                        | Forces the opening of a GUI (Enchanter, Tinkerer, or Alchemist) for another player.                               | `ae.open`                             |
| `/ae pasteenchants`                                                       | Generates a pastebin containing a list of all custom enchantments available in the server.                        | `ae.pasteenchants`                    |
| `/ae plinfo`                                                              | Generates a document containing information about the Advanced Enchantments plugin and server configuration.      | `ae.plinfo`                           |
| `/ae premade`                                                             | Allows viewing of premade configurations for the Advanced Enchantments plugin.                                    | `ae.premade`                          |
| `/ae reload`                                                              | Reloads all configurations and settings of the Advanced Enchantments plugin.                                      | `ae.reload`                           |
| `/ae setSouls (amount)`                                                   | Sets the number of souls associated with the currently held item.                                                 | `ae.setsouls`                         |
| `/ae tinkererItem (player) (amount)`                                      | Gives a tinkerer reward item of a specified amount to another player.                                             | `ae.givetinkerer`                     |
| `/ae unenchant (enchant)`                                                 | Removes a specified enchantment from the currently held item.                                                     | `ae.unenchant`                        |
| `/ae view (enchant)`                                                      | Opens a menu displaying detailed information about a specific enchantment, including its effects and usage.       | Same as `enchantment-info` permission |
| `/ae zip`                                                                 | Creates a zip file containing all contents of the Advanced Enchantments plugin folder.                            | `ae.zip`                              |

::: danger Heads up!
If you encounter any issues with player commands not functioning as expected, please click the "[Discord](https://discord.gg/6Zy29qbkKD)" button above. You can report the problem directly on our Discord server by submitting a support ticket. Our dedicated support team is ready to assist you promptly.
:::
