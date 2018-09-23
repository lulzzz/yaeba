import { LitElement, html, property } from '@polymer/lit-element';
import { getState } from 'domain/store/selectors/main';

class CustomTag extends LitElement {
  state: object
  constructor() {
    super();
    this.state = {
      message: 'hello world'
    }
  }

  static get properties() {
    return {
      state: { type: Object }
    };
  }

  render() {
    return html`
    <y-home .state='${this.state}'></y-home>
    `
  }
}

customElements.define('y-router', CustomTag);
