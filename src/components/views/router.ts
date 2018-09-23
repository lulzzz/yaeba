import { LitElement, html, property } from '@polymer/lit-element';
import { getState } from 'domain/store/selectors/main';

class CustomTag extends LitElement {
  state: object
  constructor() {
    super();
    this.state = getState();
  }


  static get propertis() {
    return {
      state: { type: Object }
    };
  }
  _html(){
    return html`<y-home state=${this.state}></y-home>`;
  }
  render() {
    console.log(this.state)
    return html`
    ${this._html()}
    `
  }
}

customElements.define('y-router', CustomTag);
