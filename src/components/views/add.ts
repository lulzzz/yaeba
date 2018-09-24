import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';


class ViewTag extends LitElement {
  state: any

  constructor() {
    super();
    this.state = getState();
  }

  static get properties() {
    return {
      state: { type: Object }
    };
  }


  render() {
    const { currentPage } = this.state;
    return html`
      <div class="page">
        Add new outfits ${currentPage}
      </div>
    `
  }
}

customElements.define('y-add', ViewTag);
