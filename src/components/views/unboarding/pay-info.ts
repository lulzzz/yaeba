import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick } from 'styles/lib';

class ViewTag extends LitElement {
  state: any
  constructor() {
    super();
  }
  attributeChangedCallback() {
    //add diff here
    this.state = getState();
    this.render();
  }

  static get properties() {
    return {
      state: { type: Object },
    };
  }


  render() {
    return html`
      <div class="page">
        <button ><h1>To the Clothes! </h1>
        <h3>start making outfits</h3>
        </>
        <button>
        <h1>Easier Checkout</h1>
        <h3>Fill in payment info now </h3>
        </button>
        <style>
          .page {
            text-align:center;
            ${mansoryBase()}
            padding-top: 8px;
            padding-bottom: 8px;
          }
        </style>
      </div>
    `
  }
}

customElements.define('y-add', ViewTag);
