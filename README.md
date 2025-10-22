# Slidev Theme Ninja

[![NPM version](https://img.shields.io/npm/v/slidev-theme-ninja?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-ninja)

A modern, sleek theme for [Slidev](https://github.com/slidevjs/slidev) featuring ninja-inspired aesthetics with smooth animations and flexible layouts.

> This theme is designed for developers who want to create impactful presentations with minimal setup.

## Features

- 🎨 **Multiple Layout Options** - Six specialized layouts for different content types
- 🌓 **Dark/Light Mode** - Seamless color scheme switching
- 💻 **Code-First Design** - Optimized for technical presentations with Shiki highlighting
- 🎭 **Flexible Layouts** - Reverse options and customizable components
- ⚡ **Smooth Animations** - Polished transitions and effects
- 📱 **Responsive** - Perfect on any screen size

## Installation

Install the theme in your Slidev project:

```bash
npm install slidev-theme-ninja
```

Add the following frontmatter to your `slides.md`:

```yaml
---
theme: ninja
---
```

Learn more about [how to use a theme](https://sli.dev/themes/use).

## Layouts

This theme provides the following layouts:

### Intro `intro`

The perfect way to start your presentation with impact.

<table>
<tr>
<td width="50%">

**Light Mode**
![Intro Layout Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/01.png)

</td>
<td width="50%">

**Dark Mode**
![Intro Layout Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/01.png)

</td>
</tr>
</table>

**Usage:**

```yaml
---
layout: intro
---

# Slidev Theme Ninja
## Slidev Theme Ninja
### Speaker: Ninja

Your tagline or description
```

**Properties:**
- Displays title, subtitle, and speaker information
- Animated entrance effects
- Supports both light and dark modes

---

### About Me `aboutme`

Introduce yourself with style using an image and bio layout.

<table>
<tr>
<td width="50%">

**Light Mode**
![About Me Layout Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/03.png)

</td>
<td width="50%">

**Dark Mode**
![About Me Layout Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/03.png)

</td>
</tr>
</table>

**Usage:**

```yaml
---
layout: aboutme
media: './avatar.png'
reverse: false
---

# About Me
## Your Name

X @your_handle

- Your background
- Your expertise
- Your interests
```

**Properties:**
- `media` (string): Path to your profile image
- `reverse` (boolean): Set to `true` to flip image/text positioning

---

### Text-Image `text-image`

Present content alongside visuals with flexible positioning.

**Standard Layout:**

<table>
<tr>
<td width="50%">

**Light Mode**
![Text-Image Layout Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/04.png)

</td>
<td width="50%">

**Dark Mode**
![Text-Image Layout Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/04.png)

</td>
</tr>
</table>

**Reverse Layout:**

<table>
<tr>
<td width="50%">

**Light Mode**
![Text-Image Reverse Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/05.png)

</td>
<td width="50%">

**Dark Mode**
![Text-Image Reverse Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/05.png)

</td>
</tr>
</table>

**Usage:**

```yaml
---
layout: text-image
media: './image.png'
caption: 'Optional image caption'
reverse: false
---

# Your Title

Your detailed content here with markdown support.

- Bullet points
- **Bold text**
- And more...
```

**Properties:**
- `media` (string): Path to your image
- `caption` (string, optional): Caption displayed below image
- `reverse` (boolean): Flip layout - image on left when `true`

---

### New Section `new-section`

Create dramatic section breaks in your presentation.

<table>
<tr>
<td width="50%">

**Light Mode**
![New Section Layout Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/07.png)

</td>
<td width="50%">

**Dark Mode**
![New Section Layout Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/07.png)

</td>
</tr>
</table>

**Usage:**

```yaml
---
layout: new-section
---

# New Section Title

![Optional Background Image](./image.png)
```

**Properties:**
- Full-screen section divider with animated effects
- Supports background images
- Great for transitioning between topics

---

### Code `code`

Showcase code with beautiful syntax highlighting.

<table>
<tr>
<td width="50%">

**Light Mode**
![Code Layout Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/08.png)

</td>
<td width="50%">

**Dark Mode**
![Code Layout Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/08.png)

</td>
</tr>
</table>

**Usage:**

````yaml
---
layout: code
---

# Code Examples

```vue
<script setup>
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <TresCanvas clear-color="#82DBC5">
    <TresMesh>
      <TresBoxGeometry :args="[1, 1, 1]" />
    </TresMesh>
  </TresCanvas>
</template>
```
````

**Properties:**
- Syntax highlighting powered by Shiki
- Supports all major programming languages
- Line numbers and highlighting

---

### Default `default`

A clean, versatile layout for any content.

<table>
<tr>
<td width="50%">

**Light Mode**
![Default Layout Light](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-light/02.png)

</td>
<td width="50%">

**Dark Mode**
![Default Layout Dark](https://github.com/nogu66/slidev-theme-ninja/tree/main/example-export-dark/02.png)

</td>
</tr>
</table>

**Usage:**

```yaml
---
# No layout specified defaults to 'default'
---

# Your Slide Title

Your content here with full markdown support.
```

## Components

### FancyLink

A styled link component for external references.

**Usage:**

```vue
<FancyLink href="https://example.com">
  Visit Example
</FancyLink>
```

### LayoutFooter

Automatic footer component displayed on applicable layouts.

### TheConsole

Terminal-style console component for command demonstrations.

## Contributing

Contributions are welcome! Here's how to get started:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Make your changes
5. Test your changes: `npm run build`
6. Export screenshots: `npm run screenshot`
7. Format code: `npm run format`
8. Submit a pull request

### Development Scripts

```bash
# Start development server with example slides
npm run dev

# Build the example presentation
npm run build

# Export example slides as PNG images
npm run screenshot

# Format code with Prettier
npm run format

# Create a new release
npm run release
```

## Learn More

- [Slidev Documentation](https://sli.dev)
- [Theme Customization Guide](https://sli.dev/themes/write-a-theme)
- [View Example](./example.md)

## License

MIT License © 2024 [Yuta Noguchi](https://github.com/nogu66)

---

Made with ❤️ for the Slidev community
