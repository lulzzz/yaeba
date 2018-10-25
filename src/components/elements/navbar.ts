import { LitElement, html } from '@polymer/lit-element';
import { updateCurrentPage } from 'domain/store/reducers';
import { coreGradients } from 'styles/lib';
import { onClickNewOutfit } from 'domain/middleware/user'

class NavBar extends LitElement {
  fabFunction: () => void;

  constructor() {
    super();
  }

  static get properties() {
    return {
      fabFunction: { type: Function }
    }
  }
  styles() {
    return html`<style>
      :host {
        display:block;
        padding-top: 35px;
        position:fixed;
        bottom: 0;
        width: 100vw;
      }
      .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-right: 116px;
        margin-left: 20px;
      }
      button y-icon {
        width: 35px;
        height: 35px;
        line-height: 1;
        vertical-align: text-bottom;
        color: #fff;
      }
      button {
        position:absolute;
        border-radius: 100%;
        overflow:hidden;
        background: ${coreGradients.BP};
        height: 100px;
        width: 100px;
        text-align:center;
        line-height: 1;
        bottom: 40px;
        right: 8px;
        box-shadow: 8px 16px 20px rgba(0,0,0,0.2);
      }
      .card {
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        /* padding: 20px; */
        background: #fff;
        padding: 20px 0;
        text-align:right;

      }
      y-icon {
        height: 26px;
        width: 26px;
        display:inline-block;
      }
      *, input, button {outline:none !important;}
      *:focus {
        outline: none !important;
      }
    </style>`
  }

  render() {
    console.log(this.fabFunction)
    return html`
      <div class="navbar">
        ${this.styles()}
        <div class="card">
          <div class="menu">
            <a @click="${() => updateCurrentPage('FEED')}">
              <y-icon name="zap"></y-icon>
            </a>
            <a @click="${() => updateCurrentPage('LIKES')}">
              <y-icon name="heart"></y-icon>
            </a>
            <a @click="${() => updateCurrentPage('OUTFITS')}">
              <y-icon name="briefcase"></y-icon>
            </a>
            <a @click="${() => updateCurrentPage('USER')}">
              <y-icon name="user"></y-icon>
            </a>
            </div>
          </div>
          <!-- MOVE TO FAB COMP -->
          <button @click=${onClickNewOutfit}>
            <y-icon name="plus"></y-icon>
          </button>
        </div>
    `
  }
}

customElements.define('y-navbar', NavBar);
