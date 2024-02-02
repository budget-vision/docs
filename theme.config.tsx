import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Link from "next/link";
import Image from "next/image";

const config: DocsThemeConfig = {
  head: (
    <>
      <script
        defer
        data-domain="docs.budget.vision"
        src="https://plausible.io/js/script.js"
      ></script>
    </>
  ),
  logo: (
    <p className="hidden items-center space-x-2 md:flex">
      <Image
        width={32}
        height={32}
        alt="logo"
        src="/img/logo.png"
        className={"mt-0 w-8 rounded-lg"}
      />
      <span className="hidden font-bold sm:inline-block">Budget Vision</span>
    </p>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Budget Vision Docs",
    };
  },
  project: {
    link: "https://www.budget.vision/landing",
  },
  chat: {
    link: "https://discord.gg/6E8Bu8GMAE",
  },
  docsRepositoryBase: "https://github.com/budget-vision/docs/tree/main",
  feedback: {
    useLink: () => "https://discord.gg/6E8Bu8GMAE",
  },
  footer: {
    text: "Budget Vision Docs",
  },
};

export default config;
