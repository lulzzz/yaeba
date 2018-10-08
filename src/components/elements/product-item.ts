import { LitElement, html } from '@polymer/lit-element';
import { addAddtion } from 'domain/middleware/user';
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
      :host {
        overflow:hidden;
        float:left;
        border-radius: 15px;
      }
      .product {
        overflow:hidden;
        float:left;
        border-radius: 15px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 100%;
      }
      .price {}
      .likes {}
    </style>`
  }

  render() {
    const { item } = this;
    return html`<div style="background-image:url(${item.img})" class="product" @click="${() => { addAddtion(item) }}">
      ${this.styles()}
      <span>$${item.price}</span>
      <span><y-icon name="heart"></y-icon> ${item.likes}</span>
    </div>`
  }
}

customElements.define('y-product-item', ProductItem);
