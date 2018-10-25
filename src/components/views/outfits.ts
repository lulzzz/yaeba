import { LitElement, html } from '@polymer/lit-element';
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
        .page {
          height:100vh;
          width: 100vw;
        }
      </style>
    `
  }
// @click="${onClickNewOutfit}"
  render() {
    return html `
      <div class="page">
        ${this.styles()}
        <y-button icon="cart" color="GC" >New Outfit</y-button>
        <div id="outfits">
          <h3>your outfits</h3>
          ...get outfits from firebase here
        </div>
      </div>
    `
  }
}

customElements.define('y-outfits', viewsTag);

