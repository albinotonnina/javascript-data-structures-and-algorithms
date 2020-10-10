const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const camelcase = require('lodash').camelCase;
const upperFirst = require('lodash').upperFirst;

const info = (message) => console.error(chalk.cyan(message));
const warning = (message) => console.error(chalk.yellow(message));
const error = (message) => console.error(chalk.red(message));

const questions = [
  {
    name: 'destination',
    type: 'list',
    message: 'What this is?',
    default: 'dataStructures',
    choices: ['Data Structure', 'Algorithm'],
  },
  {
    name: 'name',
    message: 'How are you gonna call me?',
    default: 'My Unit',
    validate(value) {
      const valid = /^[a-zA-Z\s]*$/.test(value);
      return valid || 'Unit name should contains only letters and spaces';
    },
  },
  {
    name: 'kind',
    type: 'list',
    default: 'function',
    choices: ['function', 'class'],
    message: 'How do you want me to look like?',
  },
  {
    name: 'arguments',
    message: 'What argument you want to pass?',
    default: '',
    validate(value) {
      const valid = /[0-9a-zA-Z]+(,[0-9a-zA-Z]+)*/.test(value);
      return (
        valid ||
        value === '' ||
        'Component name should match /^[A-Z][a-zA-Z]+$/'
      );
    },
  },
];

const src = path.resolve(__dirname, '../');
const templates = path.resolve(__dirname, 'templates');

const render = (options, template, out) => {
  const argumentsArr =
    options.arguments.length > 0 ? options.arguments.split(',') : [];

  const args =
    argumentsArr.length > 0
      ? argumentsArr.length > 1
        ? `(${options.arguments})`
        : options.arguments
      : '()';

  const extendedOptions = Object.assign({}, options, {
    arguments: args,
  });
  chalk.blue(extendedOptions);
  const input = path.join(templates, template);
  const output = path.join(src, options.destination, options.name, out);

  const code = ejs.render(fs.readFileSync(input, 'utf8'), extendedOptions);
  fs.writeFileSync(output, code);
};

inquirer
  .prompt(questions)
  .then((options) => {
    const unitName = upperFirst(camelcase(options.name));

    const destination =
      options.destination === 'Data Structure'
        ? 'dataStructures'
        : 'algorithms';

    const dirName = path.join(src, destination, unitName);
    const dirNameTest = path.join(dirName, '__tests__');

    try {
      fs.mkdirSync(dirName);
      fs.mkdirSync(dirNameTest);
    } catch (e) {
      if (e.code === 'EEXIST') {
        warning(`Unit ${options.name} already exists!`);
      } else {
        throw e;
      }
    }

    const extendedOptions = {
      ...options,
      ...{
        name: unitName,
        destination,
      },
    };

    render(extendedOptions, 'README.ejs', 'README.md');

    render(extendedOptions, 'Unit.ejs', `index.js`);

    render(extendedOptions, 'Test.ejs', `__tests__/index.test.js`);

    info(`Unit ${unitName} successfully created!`);
  }, error)
  .catch((error) => {
    throw error;
  });
