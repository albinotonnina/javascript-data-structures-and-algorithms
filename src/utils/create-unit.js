const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const chalk = require('chalk')
const inquirer = require('inquirer')
const camelcase = require('lodash').camelCase

const info = message => console.error(chalk.cyan(message))
const warning = message => console.error(chalk.yellow(message))
const error = message => console.error(chalk.red(message))

const questions = [
  {
    name: 'name',
    message: 'How are you gonna call me?',
    default: 'My Unit',
    validate(value) {
      const valid = /^[a-zA-Z\s]*$/.test(value)
      return valid || 'Unit name should contains only letters and spaces'
    }
  },
  {
    name: 'kind',
    type: 'list',
    default: 'function',
    choices: ['function', 'class'],
    message: 'How do you want me to look like?'
  },
  {
    name: 'arguments',
    message: 'What argument you want to pass?',
    default: '',
    validate(value) {
      const valid = /[0-9a-zA-Z]+(,[0-9a-zA-Z]+)*/.test(value)
      return valid || value === '' || 'Component name should match /^[A-Z][a-zA-Z]+$/'
    }
  }
]

const src = path.resolve(__dirname, '../')
const templates = path.resolve(__dirname, 'templates')

const render = (options, template, out) => {
  const name = camelcase(options.name)

  const argumentsArr = options.arguments.length > 0 ? options.arguments.split(',') : []

  const args =
    argumentsArr.length > 0
      ? argumentsArr.length > 1 ? `(${options.arguments})` : options.arguments
      : '()'

  const extendedOptions = Object.assign({}, options, {
    name,
    arguments: args
  })
  chalk.blue(extendedOptions)
  const input = path.join(templates, template)
  const output = path.join(src, name, out)

  const code = ejs.render(fs.readFileSync(input, 'utf8'), extendedOptions)
  fs.writeFileSync(output, code)
}

inquirer
  .prompt(questions)
  .then(options => {
    const unitName = camelcase(options.name)
    const dirName = path.join(src, unitName)
    const dirNameTest = path.join(dirName, '__tests__')

    try {
      fs.mkdirSync(dirName)
      fs.mkdirSync(dirNameTest)
    } catch (e) {
      if (e.code === 'EEXIST') {
        warning(`Unit ${options.name} already exists!`)
      } else {
        throw e
      }
    }

    render(options, 'README.ejs', 'README.md')

    render(options, 'Unit.ejs', `index.js`)

    render(options, 'Test.ejs', `__tests__/${unitName}.test.js`)

    info(`Unit ${options.name} successfully created!`)
  }, error)
  .catch(error => {
    throw error
  })
