import { LitElement, html, svg } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { onBoarding, onLocationChoice } from 'domain/middleware/user';
import { coreGradients, mansoryBrick } from 'styles/lib';
import { pageBase } from 'styles/page';

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

  render() {
    const { user } = this.state;
    const outfit = user.creation;
    console.log(outfit.head)
    return html`
      <div class="page">
        ${this.styles()}
        <p>Choose a body part</p>
        <div class="create ${user.gender}">
          <div class="product head"><y-product-item .item="${outfit.head}"></y-product-item></div>
          <div class="product torso"></div>
          <div class="product hips"></div>
          <div class="product legs"></div>
          <div class="product feet"></div>
          <div class="part head" @click="${() => onLocationChoice('head')}"></div>
          <div class="part torso" @click="${() => onLocationChoice('torso')}"></div>
          <div class="part hips" @click="${() => onLocationChoice('hips')}"></div>
          <div class="part legs" @click="${() => onLocationChoice('legs')}"></div>
          <div class="part feet" @click="${() => onLocationChoice('feet')}"></div>
        </div>
      </div>
    `
  }
  styles(){
    return html `<style>
      ${pageBase()}
      .page {
        overflow:hidden;
      }
      p {
        font-weight: 800;
        font-size: 26px;
        color: #383873;
        margin: 0 0 16px 0;
        padding: 0;
      }
      y-product-item {
            height: 58vw;
            padding: 0 4px;
            margin: 0 4px 16px 4px;
            ${mansoryBrick()}
          }
      .part {
        border-bottom: 2px dotted #EFDFFF;
        position: absolute;
        width: 54%;
        left: 20%;
        right: 0;
      }
      .create {
         height: 90vh;
         width: 100%;
         background-size:contain;
         overflow: hidden;
         background-repeat: no-repeat;
         position:relative;
      }
      .female {
        background-image: url('assets/female.png');
      }
      .head {
        top: 0vh;
        height: 85px;
        transform: rotate(-15deg);
      }
      .neck {
        display:none;
      }
      .torso {
        top: 14vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .hips {
        top: 32vh;
        height: 86px;
        transform: rotate(-15deg);
      }
      .legs {
        top: 45vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .feet {
        top: 62vh;
        height: 110px;
        transform: rotate(-15deg);
      }
    </style>`
  }
}


customElements.define('y-create', ViewTag);
