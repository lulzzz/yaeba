import { LitElement, html, svg } from '@polymer/lit-element';

import { iLikeToWear } from 'domain/middleware/user';
import { getState } from 'domain/store/main';

class ViewTag extends LitElement {
  state: any

  constructor() {
    super();
    this.onclick = iLikeToWear;
    this.state = getState();
  }
  static get properties() {
    return {
      state: { type: Object }
    };
  }
  render() {
    const { entry } = this.state;
    return html`
      <div class="page">
        <p><y-test text=${entry.i_like}></y-test></p>
        <button onClick=${this.onclick}>${entry.buttons.male}</button>
        <button onClick=${this.onclick} >${entry.buttons.female}</button>
        <button onClick=${this.onclick} >${entry.buttons.whatever}</button>
      </div>
    `
  }
}


customElements.define('y-entry', ViewTag);
