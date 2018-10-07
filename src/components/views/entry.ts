import { LitElement, html, svg } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { onBoarding } from 'domain/middleware/user';
import { coreGradients } from 'styles/lib';
import { buttonBase } from 'styles/button';
import { pageBase } from 'styles/page';

class ViewTag extends LitElement {
  state: any
  pageRouter: any;

  constructor() {
    super();
    this.state = getState();
  }
  static get properties() {
    return {
      state: { type: Object },
    };
  }
  styles(){
    return html `<style>
      ${pageBase()}
      p {
        font-weight: bold;
        font-size: 26px;
        color: #383873;
        margin: 0 0 16px 0;
        padding: 0;
      }
      .logo {
        width: auto;
        height: 35vh;
        margin: 64px auto;
      }
        button {
          ${buttonBase()}
          background: ${coreGradients.BC};
          clear:both;
          display:block;
          width: 100%;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 14px;
        }
        .male { background: ${coreGradients.RY}; }
        .female { background: ${coreGradients.BP}; }
        .whatever { background: ${coreGradients.PC}; }
    </style>`
  }
  render() {
    const { entry } = this.state;
    return html`
      <div class="page">
        <img class="logo" src="logo.png" />
        <p>${entry.i_like}</p>
        ${this.styles()}
        <button class="male" @click=${() => { onBoarding('male') }}>${entry.buttons.male}</button>
        <button class="female" @click=${() => { onBoarding('female') }}>${entry.buttons.female}</button>
        <button class="whatever" @click=${() => { onBoarding('lilbitch') }} >${entry.buttons.whatever}</button>
      </div>
    `
  }
}


customElements.define('y-entry', ViewTag);
