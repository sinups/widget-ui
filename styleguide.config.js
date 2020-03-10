const fs = require('fs')
const path = require('path')
const pkg = require('./package.json')
const webpackConfig = require('./config/webpack.js')
const { theme, styles } = require('./docs/styleguide/styles')
const schema = require('./components.json')

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({ name, content, components }) => ({
    name,
    content: content ? resolve('docs', `${content}.md`) : null,
    components() {
      return components.map(componentName => resolve(
        'src/components',
        componentName,
        `${componentName}.js`,
      ))
    },
  }))
}
module.exports = {
  title: `Justiva Widget v${pkg.version}`,
  components: 'src/components/**/[A-Z]*.js',
  sections: getSections(),
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src/lib'),
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  styleguideComponents: {
    TableRenderer: path.resolve(__dirname, './docs/styleguide/Table'),
    PathlineRenderer: path.resolve(__dirname, './docs/styleguide/Pathline'),
  },
  theme,
  styles,
  webpackConfig,
  getExampleFilename(componentPath) {
    return componentPath.replace(/[\w\d]+\.js$/i, 'README.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')

    return `import { ${name} } from '${pkg.name}';`
  },

}
