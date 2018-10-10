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

  styles() {
    return html`<style>
      :host {
        overflow:hidden;
        float:left;
        border-radius: 15px;
        /* box-shadow: 0 5px 5px rgba(0,0,0,0.4) */
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
        font-size: 24px;
        font-weight:bold;
        color: #383873;
        position:relative;
      }
      .fade {
        opacity: 1;
        height: 60%;
        bottom: 0;
        position: absolute;
        width: 100%;
        background : ${coreGradients.PF}
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
    return html`<div style="background-image:url(${item.img})" class="product" @click="${() => { addAddtion(item) }}">
      ${this.styles()}
      <div class="fade"></div>
      <div class="info">
      <span>¥${item.price}</span>
      <span><y-icon name="heart"></y-icon> ${item.likes}</span>
      </div>
    </div>`
  }
}

customElements.define('y-product-item', ProductItem);
