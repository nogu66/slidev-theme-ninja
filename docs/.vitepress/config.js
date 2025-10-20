module.exports = {
    title: "Slidev Theme Ninja",
    description: "The Vercel theme for Slidev",
    themeConfig: {
        repo: "nico-bachner/slidev-theme-ninja",
        editLinks: true,
        lastUpdated: "Last Updated",
        nav: [
            {
                text: "Demo",
                link: "https://slidev-theme-ninja-demo.vercel.app",
            },
            {
                text: "Contributing",
                link: "https://github.com/nico-bachner/slidev-theme-ninja/blob/main/CONTRIBUTING.md",
            },
            {
                text: "Changelog",
                link: "https://github.com/nico-bachner/slidev-theme-ninja/blob/main/CHANGELOG.md",
            },
        ],
        sidebar: [
            {
                text: "Introduction",
                children: [
                    { text: "Getting Started", link: "/getting-started" },
                ],
            },
            {
                text: "Built-ins",
                children: [
                    {
                        text: "Default Configuration",
                        link: "/built-ins/default-configuration",
                    },
                    { text: "Components", link: "/built-ins/components" },
                    { text: "Layouts", link: "/built-ins/layouts" },
                ],
            },
        ],
    },
};
