import { LitElement, html } from '@polymer/lit-element';
import { addAddtion } from 'domain/middleware/user';
import { coreGradients } from 'styles/lib';
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

  styles(bg) {
    return html`<style>
    :host {
    }
      :host {
       background-image: url(${bg});
        overflow:hidden;
        border-radius: 15px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-size: 16px;
        font-weight:bold;
        color: #fff;
        position:relative;
        min-width: 100px;
        min-height: 200px;
      }
      .product {
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
      }
      .fade {
        opacity: 0.5;
        height: 60%;
        bottom: 0;
        position: absolute;
        width: 100%;
        background : ${coreGradients.DF}
      }
      .info {
       position: absolute;
      bottom: 4px;
      margin: 0 auto;
      left: auto;
      right: auto;
      width: 100%;
      }
      .price {}
      .likes {}
    </style>`
  }

  render() {
    const { item } = this;
    if(!item.img) { return null }
    return html`<div class="product" @click="${() => { addAddtion(item) }}">
      ${this.styles(item.img)}
      <div class="fade"></div>
      <div class="info">
      <span>¥${item.price}</span>
      </div>
    </div>`
      // <!-- <span><y-icon name="heart"></y-icon> ${item.likes}</span> -->
  }
}

customElements.define('y-product-item', ProductItem);
