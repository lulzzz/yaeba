import { LitElement, html } from '@polymer/lit-element';
import { onClickNewOutfit } from 'domain/middleware/user'
import { coreGradients } from 'styles/lib';

class viewsTag extends LitElement {
  constructor() {
    super();
  }

  // attributeChangedCallback() {
  //   this.render();
  // }

  static get properties() {
    return {};
  }
  styles() {
    return html`
      <style>

      </style>
    `
  }

  render() {
    return html `
      <div class="page">
        ${this.styles()}
        <y-button icon="cart" color="GC" @click="${onClickNewOutfit}">New Outfit</y-button>
        <div id="outfits">
          <h3>your outfits</h3>
          ...get outfits from firebase here
        </div>
      </div>
    `
  }
}

customElements.define('y-outfits', viewsTag);

