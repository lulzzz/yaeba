import { LitElement, svg, html } from '@polymer/lit-element';
const feather = require('feather-icons')

class Icon extends LitElement {
  name: string
  parser: any;

  constructor() {
    super();
    this.parser = document.createElement('div');
  }

  static get properties() {
    return {
      name: { type: String }
    }
  }

  _getIcon(){
    const f = feather.icons[this.name];
    this.parser.innerHTML = f ? f.toSvg() : null;
    return this.parser.firstChild
  }
  render() {
    return html`${this._getIcon()}`
  }
}

customElements.define('y-icon', Icon);
