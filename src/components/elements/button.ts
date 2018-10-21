
  import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { coreGradients } from 'styles/lib';
import { buttonBase } from 'styles/button';

class elementsTag extends LitElement {
  icon: string;
  constructor() {
    super();
  }

  // attributeChangedCallback() {
  //   this.render();
  // }

  static get properties() {
    return {
      icon: { type: String}
    };
  }

  styles() {
    return html`
      <style>
          button {
          ${buttonBase()}
          background: ${coreGradients.RO};
          clear:both;
          padding-right: 30px;
          padding-left: 30px;
          display:inline-block;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 14px;
          line-height: 24px;
        }
        y-icon {
          width: 24px;
          height: 24px;
          display:inline-block;
          vertical-align:bottom
        }
        :host:hover button:after {
          content: '';
          background: ${coreGradients.BP};
        }
      </style>
    `
  }


  render() {
    return html `
      <button>
        ${this.styles()}
        <y-icon name="${this.icon}"></y-icon>
        <span><slot></slot></span>
      </button>
    `
  }
}

customElements.define('y-button', elementsTag);

