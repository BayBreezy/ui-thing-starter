# UI Thing Starter

Looking to start a new Nuxt project? Look no further! UI Thing Starter is the perfect template to kickstart your development.

![UI Thing Starter Image](/public/cover.jpeg)

## Demo

You can find a live demo of UI Thing Starter at [Counter Demo](https://ui-thing-starter.behonbaker.com/)

## What's included

**App**

| Tool                                             | What it does                                           |
| ------------------------------------------------ | ------------------------------------------------------ |
| [Nuxt 4](https://nuxt.com)                       | Vue framework                                          |
| [UI Thing](https://uithing.com)                  | Copy-paste component library (Reka UI + TW)            |
| [Tailwind CSS 4](https://tailwindcss.com)        | Styling, with `tailwind-variants` and `tw-animate-css` |
| [Pinia](https://pinia.vuejs.org)                 | State management                                       |
| [VueUse](https://vueuse.org)                     | Composable utilities                                   |
| [Nuxt Color Mode](https://color-mode.nuxtjs.org) | Light/dark mode                                        |
| [Nuxt Icon](https://nuxt.com/modules/icon)       | Icons (Lucide set installed)                           |
| [Nuxt Fonts](https://fonts.nuxt.com)             | Font loading                                           |
| [Nuxt OG Image](https://nuxtseo.com/og-image)    | Open Graph image generation                            |
| [Motion](https://motion.dev/docs/vue)            | Animations                                             |

**Tooling**

| Tool                                                                                                                                          | What it does                         |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [Bun](https://bun.sh)                                                                                                                         | Package manager and script runner    |
| [ESLint](https://eslint.org) via `@nuxt/eslint`                                                                                               | Linting                              |
| [oxfmt](https://oxc.rs/docs/guide/usage/formatter)                                                                                            | Formatting, import and class sorting |
| [Vitest](https://vitest.dev) + `@nuxt/test-utils` + Testing Library                                                                           | Testing                              |
| [Husky](https://typicode.github.io/husky), [lint-staged](https://github.com/lint-staged/lint-staged), [commitlint](https://commitlint.js.org) | Git hooks and conventional commits   |
| [Dependabot](.github/dependabot.yml)                                                                                                          | Weekly dependency update PRs         |

## Getting Started

1. Create a project from the template:

```bash
bunx giget@latest gh:BayBreezy/ui-thing-starter my-app --install
```

2. Start the development server:

```bash
cd my-app
bun run dev
```

The app runs at `http://localhost:3000`.

## Scripts

Run these with `bun run <script>`.

| Script         | Description                                            |
| -------------- | ------------------------------------------------------ |
| `dev`          | Start the dev server                                   |
| `build`        | Build for production                                   |
| `generate`     | Generate a static site                                 |
| `preview`      | Preview the production build                           |
| `lint`         | Lint with ESLint                                       |
| `lint:fix`     | Lint and auto-fix                                      |
| `format`       | Format the project with oxfmt                          |
| `format:check` | Check formatting without writing                       |
| `test`         | Run Vitest in watch mode (`bun run test --run` for CI) |
| `typecheck`    | Type-check the project with `vue-tsc`                  |
| `ui:add`       | Add UI Thing components (see below)                    |
| `clean`        | Remove `node_modules` and build output, then reinstall |

> Use `bun run test`, not `bun test`. The latter is Bun's built-in runner and won't load the Nuxt test environment.

## Adding components

Components are added with the [UI Thing CLI](https://uithing.com). Pass component names after the script:

```bash
bun run ui:add button dialog
```

Run it with no names to pick from an interactive list. Components are copied into [`app/components/Ui`](app/components/Ui) so you own and can edit them. Paths and the theme are configured in [`ui-thing.config.ts`](ui-thing.config.ts).

## Environment variables

Copy [`.env.example`](.env.example) to `.env` for local development. `.env` is gitignored.

```bash
cp .env.example .env
```

| Variable               | Description                                                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUBLIC_URL`           | Public URL of your site, used for canonical and OG image URLs. Falls back to the demo URL in `nuxt.config.ts`, so set it before deploying.                                                                                                                     |
| `NUXT_OG_IMAGE_SECRET` | Signs OG image URLs. If empty, a new secret is generated each build, which is fine for a single instance. Set a stable value for multi-instance or rolling deploys, and in dev to silence the warning. Generate one with `bunx nuxt-og-image generate-secret`. |

Set these as environment variables in your hosting provider rather than committing a `.env` file.

## Deploying

- **Node server**: run `bun run build`, then start the server with `node .output/server/index.mjs`. Preview locally with `bun run preview`.
- **Static hosting**: run `bun run generate` and deploy `.output/public`. OG images are prerendered into `_og/`.
- **Other platforms**: Nuxt picks a [deployment preset](https://nuxt.com/deploy) automatically on many hosts. Check the Nuxt deployment docs for yours.

Before deploying, set `PUBLIC_URL`, and `NUXT_OG_IMAGE_SECRET` if you run more than one instance.

## Project structure

```
app/
  assets/css/tailwind.css   Tailwind entry and theme tokens
  components/               Your components (Ui/ holds UI Thing components)
  layouts/                  Nuxt layouts
  pages/                    File-based routes
  stores/                   Pinia stores
  utils/                    Auto-imported helpers
tests/                      Vitest tests
```

`Counter.vue`, `stores/counter.ts` and `tests/components/Counter.test.ts` are a small demo of a component, a store and a test. Delete them once you've got the idea.

## Removing what you don't need

Everything here is optional. To drop a piece:

| To remove        | Do this                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The counter demo | Delete `app/components/Counter.vue`, `app/stores/counter.ts`, `tests/components/Counter.test.ts`, and replace `app/pages/index.vue`                                                                                                                        |
| OG images        | Remove `nuxt-og-image` and `@takumi-rs/core` from `package.json` and `nuxt.config.ts`, delete `app/components/OgImage/`, and remove the `defineOgImage` call in `app/pages/index.vue`                                                                      |
| Pinia            | Remove `@pinia/nuxt` and `pinia` from `package.json` and `nuxt.config.ts`, and delete `app/stores/`                                                                                                                                                        |
| Git hooks        | Remove `husky`, `lint-staged`, `@commitlint/*`, the `prepare` script and `lint-staged` block from `package.json`, then delete `.husky/` and `commitlint.config.js`                                                                                         |
| Tests            | Remove `vitest`, `@nuxt/test-utils`, `@testing-library/vue`, `@vue/test-utils`, `@pinia/testing`, `happy-dom`, `playwright-core`, the `test` script and `@nuxt/test-utils/module` from `nuxt.config.ts`; delete `tests/`, `vitest.config.ts` and `.nuxtrc` |
| Dependabot       | Delete `.github/dependabot.yml`                                                                                                                                                                                                                            |

## UI Thing

To learn more about the library, you can visit the docs at [UI Thing Documentation](https://uithing.com).
