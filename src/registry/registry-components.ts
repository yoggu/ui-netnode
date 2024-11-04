import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "section",
    type: "registry:ui",
    files: ["ui/Section.tsx"],
  },
  {
    name: "container",
    type: "registry:ui",
    files: ["ui/Container.tsx"],
  },
  {
    name: "grid",
    type: "registry:ui",
    files: ["ui/Grid.tsx"],
  },
  {
    name: "grid-item",
    type: "registry:ui",
    files: ["ui/GridItem.tsx"],
  },
  {
    name: "box",
    type: "registry:ui",
    files: ["ui/Box.tsx"],
  },
  {
    name: "cta-link",
    type: "registry:ui",
    files: ["ui/CTALink.tsx"],
  },
  {
    name: "display-title",
    type: "registry:ui",
    files: ["ui/DisplayTitle.tsx"],
  },
  {
    name: "body-copy",
    type: "registry:ui",
    files: ["ui/BodyCopy.tsx"],
  },
  {
    name: "section-hero-1",
    type: "registry:block",
    registryDependencies: [
      "https://ui-netnode.vercel.app/registry/section.json",
      "https://ui-netnode.vercel.app/registry/container.json",
      "https://ui-netnode.vercel.app/registry/grid.json",
      "https://ui-netnode.vercel.app/registry/grid-item.json",
      "https://ui-netnode.vercel.app/registry/box.json",
      "https://ui-netnode.vercel.app/registry/cta-link.json",
      "https://ui-netnode.vercel.app/registry/display-title.json",
      "https://ui-netnode.vercel.app/registry/body-copy.json",
    ],
    files: ["block/section-hero-1/SectionHero1.tsx"],
  },
  // {
  //   name: "sidebar-01",
  //   type: "registry:block",
  //   registryDependencies: [
  //     "button",
  //     "popover",
  //     "separator",
  //     "input",
  //     "command",
  //   ],
  //   files: [
  //     "block/sidebar-01/sidebar-01.tsx",
  //     "block/sidebar-01/account-switcher.tsx",
  //     "block/sidebar-01/search.tsx",
  //     "block/sidebar-01/navigation-menu.tsx",
  //   ],
  // },
  // {
  //   name: "hint",
  //   type: "registry:ui",
  //   registryDependencies: ["tooltip"],
  //   dependencies: ["framer-motion"],
  //   files: ["ui/hint.tsx"],
  // },
  // {
  //   name: "animated-button",
  //   type: "registry:ui",
  //   registryDependencies: ["button"],
  //   tailwind: {
  //     config: {
  //       theme: {
  //         extend: {
  //           animation: {
  //             ripple: "ripple 0.6s ease-out",
  //           },
  //           keyframes: {
  //             ripple: {
  //               "0%": {
  //                 transform: "scale(0)",
  //                 opacity: "1",
  //               },
  //               "100%": {
  //                 transform: "scale(4)",
  //                 opacity: "0",
  //               },
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  //   files: ["ui/animated-button.tsx"],
  // },
  // {
  //   name: "sidebar-02",
  //   type: "registry:block",
  //   registryDependencies: [
  //     "progress",
  //     "https://www.uicart.io/registry/hint.json",
  //   ],
  //   dependencies: ["framer-motion", "lucide-react"],
  //   files: ["block/sidebar-02/sidebar-02.tsx"],
  // },
  // {
  //   name: "sonic-bento",
  //   type: "registry:block",
  //   dependencies: ["framer-motion", "lucide-react"],
  //   files: ["block/bento-grid-components/sonic-bento.tsx"],
  // },
  // {
  //   name: "design-board",
  //   type: "registry:block",
  //   dependencies: [
  //     "framer-motion",
  //     "lucide-react",
  //     "@tailwindcss/container-queries",
  //   ],
  //   files: ["block/bento-grid-components/design-board.tsx"],
  //   tailwind: {
  //     config: {
  //       plugins: [`require("@tailwindcss/container-queries")`],
  //     },
  //   },
  // },
  // {
  //   name: "bento-grid-01",
  //   type: "registry:block",
  //   registryDependencies: [
  //     "https://www.uicart.io/registry/sonic-bento.json",
  //     "https://www.uicart.io/registry/design-board.json",
  //   ],
  //   files: ["block/bento-grid-01/bento-grid.tsx"],
  // },
];
