import { LitElement, html } from '@polymer/lit-element';

class CustomTag extends LitElement {
  mood: string
  state: any
  constructor() {
    super();
  }

  static get properties() {
    return {
      mood: { type: String },
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
      Web Components are <span class="mood">${this.state}</span>!
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

customElements.define('y-router', CustomTag);
