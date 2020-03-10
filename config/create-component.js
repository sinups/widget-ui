const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const kebabCase = require('lodash').kebabCase;

const info = (message) => console.error(chalk.cyan(message));
const warning = (message) => console.error(chalk.yellow(message));
const error = (message) => console.error(chalk.red(message));

const questions = [
  {
    name: 'name',
    message: 'Component name',
    default: 'Compoent',
    validate(value) {
      const valid = /^[A-Z][a-zA-Z]+$/.test(value);
      return valid || 'Component name should match /^[A-Z][a-zA-Z]+$/';
    },
  },
  {
    name: 'devname',
    message: 'Developer name',
    default: 'Your name',
    validate(value) {
      const valid = /^[A-Z][a-zA-Z]+$/.test(value);
      return valid || 'Developer  name should match /^[A-Z][a-zA-Z]+$/';
    },
  },
  {
    name: 'functional',
    type: 'confirm',
    message: 'Create functional component?',
    default: true,
  },
  {
    name: 'styles',
    type: 'confirm',
    message: 'With styles?',
    default: true,
  },
];

const src = path.resolve(__dirname, '../src/components');
const templates = path.resolve(__dirname, 'templates');

function render(options, template, out) {
  const extendedOptions = Object.assign({}, options, {
    dashedName: kebabCase(options.name),
  });
  chalk.blue(extendedOptions);
  const input = path.join(templates, template);
  const output = path.join(src, options.name, out);

  const code = ejs.render(fs.readFileSync(input, 'utf8'), extendedOptions);
  fs.writeFileSync(output, code);
}

inquirer.prompt(questions).then((options) => {
  const dirName = path.join(src, options.name);

  try {
    fs.mkdirSync(dirName);
  } catch (e) {
    if (e.code === 'EEXIST') {
      warning(`Component ${options.name} already exists!`);
    } else {
      throw e;
    }
  }

  render(options, 'README.md', 'README.md');
  render(options, 'Component.js', `${options.name}.js`);
  render(options, 'index.js', 'index.js');
  if (options.styles) {
    render(options, 'Component.scss', `${options.name}.scss`);
  }

  info(`Component ${options.name} successfully created!`);
}, error);
