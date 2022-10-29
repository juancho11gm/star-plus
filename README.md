# Star+

[![eslint](https://img.shields.io/badge/code_lint-eslint-463fd4.svg?style=flat-square)](https://eslint.org)
[![prettier](https://img.shields.io/badge/prettier-formatter-pink)](https://eslint.org)
[![stylelint](https://img.shields.io/badge/css_style-stylelint-263338.svg?style=flat-square)](https://stylelint.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project is based on the [Star+ website](https://www.starplus.com/es-co) just to practice and learn new concepts about web development layouts and styling. It is a Single Page Application created with VanillaJS and [Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

## Tech Stack

- Platform: Node.js v16+.
- NextJS 🌼.
- GSAP 🦸🏻.
- SCSS 💅🏻.
- Firebase 🛡.
- Code lint and style: eslint, stylelint, standardjs.
- [Commitlint](https://commitlint.js.org/#/) & [Commitizen](https://github.com/commitizen/cz-cli).

## Local Development

In your code editor or IDE, install their respective plugins/packages so you can see
in realtime the recommendations while writing code.

- VS Code
  - [vscode eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [vscode prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [vscode stylelint plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Deployment

The deployment is being managed through [Netlify](https://www.netlify.com/).
Once your changes are merged in `main` visit star-plus.netlify.app/ .

## Getting Started

```bash
nvm use
```

```bash
npm i
npm run dev
```

- Open the [http://localhost:3000/](http://localhost:3000/) in your favorite browser.

## How to contribute

Please follow the categories based on your changes for your branches/commits.

- feat: add a new feature with tests.
- update: improve a current feature with tests.
- fix: resolve a bugfix or issue with tests.
- docs: update documentation either in code comments or markdown files.
- chore: changes in building, testing, or any other workflow processes.
- release: release project breakpoint.

**Branch strategy**

`category/#n-description`

```bash
docs/#2-add-readme-structure
```

**Commits strategy**

`category: #n message description`

```bash
docs: #2 add readme structure
```

- Contributing

1. Create a branch from `main` following the branch strategy.
2. Attach your commits to the Issue. The Issue must be created in the [GitHub Project](https://github.com/juancho11gm/start-plus/issues).
3. Create a Pull Request, add Reviewers & Labels.

## Authors

- @Jaimeandres97
- @juancho11gm

Made with <3.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
