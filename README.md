# Personal Web Page

[![deploy](https://github.com/csLiKevin/csLiKevin.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/csLiKevin/csLiKevin.github.io/actions/workflows/deploy.yml)

https://kevinli.us **·** https://csLiKevin.github.io

Project for generating an online resume.

Resume information is defined using the [JSON Resume Schema](https://jsonresume.org/schema/).

Resume information is defined in [`resume.ts`](src/resume.ts).

Deployed via [Github Actions](.github/workflows/deploy.yml).

## Prerequisites

[Podman v5.4.2](https://github.com/containers/podman/blob/main/docs/tutorials/podman-for-windows.md)

[Dev Containers Extension](vscode:extension/ms-vscode-remote.remote-containers)

Set [Docker Path](vscode://settings/dev.containers.dockerPath) to `podman`

## Commands

```bash
# Build production site.
npm run build

# Check for linting errors.
npm run check

# Format source files.
npm run format

# Preview the production build.
npm run preview

# Start the development server and watch for changes.
npm start
```
