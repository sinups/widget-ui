
## Widget UI kit 
![npm](https://img.shields.io/npm/v/wgt-ui?color=green&label=Current%20Version&logo=sinups)

### Browser Support

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| Latest ✔ | Latest ✔ | Latest ✔ | No ✕ | Latest ✔ | Latest ✔ |

*Внимание! Это очень ранний релиз. Рекомендуем импользовать его с осторожностью.*

UI-кит для внутренних продуктов Justiva.

### Установка

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

### Сборка

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

