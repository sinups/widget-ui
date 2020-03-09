# Widget UI kit

*Внимание! Это очень ранний релиз. Рекомендуем импользовать его с осторожностью.*

UI-кит для внутренних продуктов Justiva.

## Установка

+ Ставь зависимость из npm

```shell
npm i wgt-ui
```

+ Используй компоненты

```ts
import { Button } from 'wgt-ui'

<Button className="MyButton">
  Click me
</Button>

```

## Scripts

- `yarn dev` : Executes the develop mode, running watcher and the Stylguide, rebuilding your library on every change.
- `yarn start` : Only serves the Styleguide.
- `yarn build` : Builds your library  (build can be faound in `dist` folder).
- `yarn styleguide:build` : Builds the static Styleguide in case you want to deploy it.
- `yarn test` : Runs the tests.
- `yarn test:coverage`: Runs the test and shows the coverage.
- `yarn lint` : Runs the linter.
- `yarn lint:fix` : Runs the linter and fixes automatic fixable issues.
- `yarn release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `yarn deploy`: Deploys the Styleguide to GitHub Pages.

