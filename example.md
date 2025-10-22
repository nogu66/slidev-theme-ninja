---
theme: ./
colorSchema: 'auto'
highlighter: shiki
title: Slidev Theme Ninja
layout: intro
avatar: './avatar.png'
---

# Slidev Theme Ninja

## Slidev Theme Ninja

### Speaker: Ninja

Slidev Theme Ninja

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers `devs`, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

<br>
<br>

Read more

---
layout: aboutme
media: './avatar.png'
reverse: false
---

# About Me

## nogu

X @_nogu66

- Description
- Database 
- Description


---
layout: text-image
media: './avatar.png'
caption: 'I am a Ninja'
---

# This is a Ninja

Ninjas were covert agents in feudal Japan, known for their skills in espionage, stealth, and unconventional warfare. Unlike the noble samurai, who fought openly under strict codes of honor, ninjas specialized in gathering intelligence, infiltration, and surprise attacks. They mastered disguise, silent movement, and survival techniques, often using tools like shuriken (throwing stars) and kusarigama (chain-sickle).

- Shadow Lotus Clan: silent as dusk, unseen until the strike.
- Crimson Moon Sect: swift as fire, vanishing beneath the red sky.

---
layout: text-image
reverse: true
media: './avatar.png'
---

# This is a reverse ninja

Ninjas were covert agents in feudal Japan, known for their skills in espionage, stealth, and unconventional warfare. Unlike the noble samurai, who fought openly under strict codes of honor, ninjas specialized in gathering intelligence, infiltration, and surprise attacks. They mastered disguise, silent movement, and survival techniques, often using tools like shuriken (throwing stars) and kusarigama (chain-sickle).


---

# Navigation

Hover on the bottom-left corner to see the navigation's controls panel

### Keyboard Shortcuts

|                                                      |                             |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>                                      | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

---
layout: new-section

---

# New wild section appeared

![image](image.png)

---


# Code

Use code snippets and get the highlighting directly!

```vue
<script setup>
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas
    clear-color="”#82DBC5”"
    window-size
  >
    <TresPerspectiveCamera />
    <TresMesh
      @click="onClick"
    >
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshNormalMaterial />
    </TresMesh>
  </TresCanvas>
</template>
```

---
class: 'grid text-center align-self-center justify-self-center'
---

# Learn more

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)