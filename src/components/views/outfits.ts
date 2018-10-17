
  import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick } from 'styles/lib';

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
        </style>
      </div>
    `
  }
}

customElements.define('y-outfits', viewsTag);

  