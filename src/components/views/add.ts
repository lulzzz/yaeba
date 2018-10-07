import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { updateProducts } from 'domain/store/reducers';
import { getProducts } from 'domain/middleware/network';

class ViewTag extends LitElement {
  state: any
  products: any;
  constructor() {
    super();
    getProducts();
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
        ${list}
      </div>
    `
  }
}

customElements.define('y-add', ViewTag);
