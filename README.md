# Yu-Rung Wang — Academic Portfolio

A responsive English academic portfolio for **Yu-Rung Wang, PhD, RN**, Assistant Professor in the Department of Nursing, College of Medicine at National Sun Yat-sen University.

The website presents research interests in healthy ageing, mindfulness, digital health, and nursing education, together with funded projects, peer-reviewed publications, conference presentations, education, leadership, and professional experience.

## Live website

- **Public website:** https://yurungwang-47ywiar4.manus.space
- **Public source repository:** https://github.com/yurungwang/yurung-wang-academic

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

The workflow in `.github/workflows/deploy-pages.yml` is ready to build and publish the site whenever the `main` branch changes. To activate GitHub Pages for the first time, open **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**, and rerun the workflow. The resulting URL will be `https://yurungwang.github.io/yurung-wang-academic/`.
