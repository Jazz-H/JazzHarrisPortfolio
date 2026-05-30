import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
  // Next's recommended + core-web-vitals + React + a11y + import rules
  ...nextCoreWebVitals,

  // Ignore patterns must be in their own flat-config object
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "public/**",
      "next-env.d.ts",
    ],
  },

  // Project-specific overrides
  {
    rules: {
      // We use straight quotes (', ") in our content, which trips
      // this rule. Acceptable trade-off.
      "react/no-unescaped-entities": "off",
      // We load Inter via next/font, not <link>, so this isn't
      // applicable.
      "@next/next/no-page-custom-font": "off",
    },
  },
];
