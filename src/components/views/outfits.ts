
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
  styles() {
    return html`
      <style></style>
    `
  }

  render() {
    return html `
      <div class="page">
        ${this.styles()}
        <h3>outfits</h3>
      </div>
    `
  }
}

customElements.define('y-outfits', viewsTag);

