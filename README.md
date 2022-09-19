# Personal Web Page

[![deploy](https://github.com/csLiKevin/csLiKevin.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/csLiKevin/csLiKevin.github.io/actions/workflows/deploy.yml)

https://kevinli.us **·** https://csLiKevin.github.io

Project for generating an online resume.

Resume information is defined using the [JSON Resume Schema](https://jsonresume.org/schema/).

Add resume data you want to share on a public web page in [`resume.ts`](src/resume.ts).

Deployed via [Github Actions](.github/workflows/deploy.yml).

Developed on [NodeJS v16.17.0](https://nodejs.org/en/download/).

## Commands

```bash
# Build production site.
`npm run build`

# Check for linting errors.
`npm run check`

# Format source files.
`npm run format`

# Preview the production build.
`npm run preview`

# Start the development server and watch for changes.
`npm start`
```
