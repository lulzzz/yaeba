import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { updateProducts } from 'domain/store/reducers';
import { getProducts } from 'domain/middleware/network';
import { mansoryBase, mansoryBrick } from 'styles/lib';
import { onloadGetProducts } from 'domain/middleware/user';

class ViewTag extends LitElement {
  state: any
  products: any;
  constructor() {
    super();
    onloadGetProducts();
  }
  attributeChangedCallback() {
    //add diff here
    this.state = getState();
    this.render();
  }

  static get properties() {
    return {
      state: { type: Object },
      products: { type: Object }
    };
  }


  render() {
    const { products } = this.state;
    const list = products.map(p => html`<y-product-item .item="${p}" ></y-product-item>`);
    return html`
      <div class="page">
        <style>
          .page {
            background: #fff;
            text-align:center;
            ${mansoryBase()}
            padding-top: 8px;
            padding-bottom: 8px;
          }
          y-product-item {
            height: 58vw;
            padding: 0 4px;
            margin: 0 4px 16px 4px;
            ${mansoryBrick()}
          }
        </style>
        ${list}
      </div>
    `
  }
}

customElements.define('y-add', ViewTag);
