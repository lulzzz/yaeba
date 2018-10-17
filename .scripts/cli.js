const fs = require('fs');
const shell = require('shelljs');
const path = require('path');
const inquirer = require('inquirer');
const _ = require('lodash');

const srcPath = 'src/components/'
function getDirectories(path) {
  return fs.readdirSync(path).filter(file => fs.statSync(path+'/'+file).isDirectory());
}

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is the tag name",
  },
  {
    type: 'list',
    name: 'type',
    message: 'What size do you need?',
    choices: ['Views', 'Elements'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
];

inquirer.prompt(questions).then(answers => {
  const name = _.kebabCase(answers.name);
  const type = answers.type;
  const template = `
  import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick } from 'styles/lib';

class ${type}Tag extends LitElement {
  constructor() {
    super();
  }

  // attributeChangedCallback() {
  //   this.render();
  // }

  static get properties() {
    return {};
  }


  render() {
    return html \`
      <div class="page">
        <style>
        </style>
      </div>
    \`
  }
}

customElements.define('y-${name}', ${type}Tag);

  `
  return fs.writeFile(`src/components/${type}/${name}.ts`, template, err => {
    if (err) return console.log(err);
  });
});
