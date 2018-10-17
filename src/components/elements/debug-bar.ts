import { LitElement, html } from '@polymer/lit-element';
import page from 'page';

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


  render() {
    return html `
      <div class="page">
        <style>
        button {
          float:left;
          display:inline-block;
        }
        #bar {
          position: fixed;
          bottom: 0;
          z-index: 100;
        }
        </style>
        <div id="bar">
        <button @click="${() => page('/')}">Login</button>
        <button  @click="${() => page('/add')}">Add</button>
        <button  @click="${() => page('/create')}">Create</button>
        <button  @click="${() => page('/onboarding/gender')}">onboadring/</button>
        <button  @click="${() => page('/onboarding/pay-info')}">onboadring/</button>
        <button  @click="${() => page('/onboarding/upload')}">upload/</button>
        <button  @click="${() => page('/outfits')}">list outfits</button>
        <button  @click="${() => page('/outfits/save')}">save</button>
        <button  @click="${() => page('/outfits/46')}">id</button>
        <button  @click="${() => page('/orders')}">list orders</button>
        <button  @click="${() => page('/orders/new')}">cart</button>
        </div>
      </div>
    `
  }
}

customElements.define('y-debug-bar', viewsTag);

