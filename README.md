# Library All Search

Front end for the Library's all search bento-style application. Client of
https://github.com/pulibrary/allsearch_api.

## Dev environment

1. `asdf plugin-add nodejs`
1. `asdf plugin-add ruby`
1. `asdf plugin-add yarn`
1. `asdf install`
1. `yarn install`
1. `yarn dev`

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + [Vitest Plugin](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Running tests

### From the command line

- If you want to run the tests and have them immediate exit, run `yarn test --run`
- If you want to run the tests in ['watch' mode](https://vitest.dev/guide/features.html#watch-mode) (automatically runs tests again when related files are changed), run `yarn test` or `yarn test --watch`

## Integration/e2e tests

To run the rspec integration tests: `bundle exec rspec`

## Semgrep

This repository uses [semgrep](https://semgrep.dev/) to:

- Perform static security analysis

To run semgrep locally:

```
brew install semgrep
semgrep --config auto . # run rules from the semgrep community
```

## Safedep vet

This repository uses [safedep vet](https://github.com/safedep/vet)
to check for problems in the js dependencies.  To run it locally:

```
brew tap safedep/tap
brew install safedep/tap/vet
vet auth configure --community
vet scan -s --lockfiles yarn.lock --filter-suite vet-filter.yml --filter-fail
```

It will often report back on some things you can do to improve, whether or not
the check fails our quality gate.  But if it does fail, it will give the message
"scan failed due to error" as the last line of output.


### Using the Vitest VSCode Plugin

1. Click on the flask icon ('Testing') in the left panel
1. Click the 'play' button in the left panel to run the tests
1. Alternately, go to the file of the test you want to run and click the icon to the left of the test to re-run it. If you have not run the test previously, it will be an arrow, if you have run it, it will be a green check if it passed and a red x if it failed on the previous run.

## Format files

`yarn lint`

`yarn format`

To fix linting errors: `yarn lint --fix`

### Git Hook

If changes need to happen in 'simple-git-hooks'

1. Make the change in [package.json](https://github.com/pulibrary/allsearch_frontend/blob/main/package.json)
2. Then run `yarn simple-git-hooks` to reconfigure the settings.
