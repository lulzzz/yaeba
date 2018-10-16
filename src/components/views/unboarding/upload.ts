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
        <h1>put your face <br>in the face hole</h1>
        PHOTO-TAG
        INPUT-TAG
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

customElements.define('y-upload', ViewTag);
