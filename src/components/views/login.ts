import { LitElement, html, svg } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { onBoarding } from 'domain/middleware/user';
import { coreGradients } from 'styles/lib';
import { buttonBase } from 'styles/button';
import { pageBase } from 'styles/page';
import { googleSignIn, facebookSignIn } from 'domain/middleware/login';

class ViewTag extends LitElement {
  state: any

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
        margin: 6vh auto;
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
        .google { background: ${coreGradients.RY}; }
        .facebook { background: ${coreGradients.BP}; }
        /* .whatever { background: ${coreGradients.PC}; } */
    </style>`
  }
  render() {
    return html`
      <div class="page">
        <img class="logo" src="/assets/logo.png" />

        ${this.styles()}
        <button class="google" @click=${googleSignIn}>Google</button>
        <button class="facebook" @click=${facebookSignIn}>Facebook</button>
        <button class="whatever" @click=${() => { onBoarding('/gender') }} >Sign up</button>
      </div>
    `
  }
}


customElements.define('y-login', ViewTag);
