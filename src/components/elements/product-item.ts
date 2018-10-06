import { LitElement, html } from '@polymer/lit-element';

class ProductItem extends LitElement {
  item: any;

  constructor() {
    super();
  }

  static get properties() {
    return {
      item: { type: Object }
    }
  }

  attributeChangedCallback() {
    //add diff here
    this.render();
  }

  styles() {
    return html`<style>

    </style>`
  }

  render() {
    const { item } = this;
    return html`<div class="">
      ${this.styles()}
      <img src="${item.thumbnailUrl}" alt="">
    </div>`
  }
}

customElements.define('y-product-item', ProductItem);
