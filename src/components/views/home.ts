import { LitElement, html } from '@polymer/lit-element';

class Homepage extends LitElement {
  state: object
  constructor() {
    super();
  }

  static get properties() {
    return {
      state: { type: Object }
    };
  }
  _style() {
    return html`<style>
      .mood { color: green; }
    </style>`;
  }
  _html(){
    return html`
      Web Components are ${this.state}
     `;
  }
  render() {
    console.log(this.state)
    return html`
    ${this._style()}
    ${this._html()}
    `
  }
}

customElements.define('y-home', Homepage);
