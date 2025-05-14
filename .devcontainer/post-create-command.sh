# Dev Container mounts repository with a different user from the host machine.
# Trust repository contents.
git config --global --add safe.directory /workspaces/${localWorkspaceFolderBasename}

npm install

npm run astro telemetry disable
