import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';


class ViewTag extends LitElement {
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
    const { entry } = this.state;
    console.log(entry)
    return html`
      <div class="page">
       list of clothes
      </div>
    `
  }
}

customElements.define('y-search', ViewTag);
