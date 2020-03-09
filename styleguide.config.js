const fs = require('fs');
const path = require('path')
const pkg = require('./package.json')
const webpackConfig = require('./config/webpack.js')
const { theme, styles } = require('./docs/styleguide/styles');
const schema = require('./components.json');
function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({ name, content, components }) => {
    return {
      name,
      content: content ? resolve('docs', content + '.md') : null,
      components() {
        return components.map((componentName) => {
          return resolve(
            'src/lib/components',
            componentName,
            componentName + '.js',
          );
        });
      },
    };
  });
}

module.exports = {
  title: `Justiva Widget v${pkg.version}`,
  // editorConfig: {
  //   theme: 'dracula',
  // },

  sections: getSections(),
  components: 'src/lib/components/**/[A-Z]*.js',
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src/lib'),
  },

  require: [
    resolve('docs/styleguide/global.css'),
    resolve('docs/styleguide/styles.css'),
  ],

  // styleguideComponents: {
  //   Wrapper: resolve('docs/styleguide/Wrapper/Wrapper.js'),
  // },

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
