import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick } from 'styles/lib';

class ViewTag extends LitElement {
  state: any
  constructor() {
    super();
  }
  attributeChangedCallback() {
    //add diff here
    this.state = getState();
    this.render();
  }

  static get properties() {
    return {
      state: { type: Object },
    };
  }


  render() {
    return html`
      <div class="page">
        <button ><h1>Female</h1></button>
        <button ><h1>Male</h1></button>
        <button ><h1>Whatever<br>I want!<br>b#tch</h1></button>
        <style>
          .page {
            text-align:center;
            ${mansoryBase()}
            padding-top: 8px;
            padding-bottom: 8px;
          }
        </style>
      </div>
    `
  }
}

customElements.define('y-add', ViewTag);
