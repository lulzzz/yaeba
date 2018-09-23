import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/selectors/main';

class Homepage extends LitElement {
  state: any

  constructor() {
    super();
  }

  static get properties() {
    return {
      state: { type: Object }
    };
  }

  render() {
    return html`
    Web Components are ${this.state.message}
    `
  }
}

customElements.define('y-home', Homepage);
