# Yu-Rung Wang — Academic Portfolio

A responsive English academic portfolio for **Yu-Rung Wang, PhD, RN**, Assistant Professor in the Department of Nursing, College of Medicine at National Sun Yat-sen University.

The website presents research interests in healthy ageing, mindfulness, digital health, and nursing education, together with funded projects, peer-reviewed publications, conference presentations, education, leadership, and professional experience.

## Live website

- **GitHub Pages:** https://yurungwang.github.io/yurung-wang-academic/
- **Manus deployment:** https://yurungwang-47ywiar4.manus.space

## Included content

The site currently includes seven recent funded research projects, twelve journal publications, ten conference presentations, a full academic and clinical career timeline, education history, and professional contact details.

## Technology

The website is built with React 19, TypeScript, Vite, and Tailwind CSS. GitHub Actions automatically builds and deploys the site to GitHub Pages whenever the `main` branch is updated.

## Local development

```bash
pnpm install
pnpm dev
```

Run validation and a production build with:

```bash
pnpm check
pnpm build
```

## Deployment

Push changes to the `main` branch. The workflow in `.github/workflows/deploy-pages.yml` builds the static website and publishes the output to GitHub Pages.
