import { LitElement, html } from '@polymer/lit-element';
import { coreGradients } from 'styles/lib';

class viewsTag extends LitElement {
  state: any

  constructor() {
    super();
  }
  static get properties() {
    return {
      state: { type: Object },
    };
  }
  styles() {
    return html`
      <style>
        .page {
          height:100vh;
          width: 100vw;
        }
      </style>
    `
  }
  fragementOutfits(item) {
    return html`<div><span>${item.name}</span></div>`
  }
  render() {
    const { user } = this.state;
    return html `
      <div class="page">
        ${this.styles()}
        <div id="outfits">
          <h3>your outfits</h3>
            ${user.outfits.map((i) => this.fragementOutfits(i))}
        </div>
      </div>
    `
  }
}

customElements.define('y-outfits', viewsTag);

