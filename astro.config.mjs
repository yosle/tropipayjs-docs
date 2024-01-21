import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://yosle.github.io",
  base: "/tropipayjs-docs",

  integrations: [
    starlight({
      title: "TropipayJS",
      social: {
        github: "https://github.com/yosle/tropipayjs",
      },
      sidebar: [
        {
          label: "Getting started",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", link: "/tropipayjs-docs/guides/intro/" },
            {
              label: "Setup Credentials",
              link: "/tropipayjs-docs/guides/api-credentials/",
            },
            {
              label: "Installation",
              link: "/tropipayjs-docs/guides/installation",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Tropipay Class",
              link: "/tropipayjs-docs/reference/tropipay-class",
            },
            {
              label: "PaymentCard Class",
              link: "/tropipayjs-docs/reference/paymentcards",
            },
          ],
          // autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
