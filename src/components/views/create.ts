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
        <div class="products">
          <y-product-item class="product head" .item="${outfit.head}"></y-product-item>
          <y-product-item class="product torso" .item="${outfit.torso}"></y-product-item>
          <y-product-item class="product hips" .item="${outfit.hips}"></y-product-item>
          <y-product-item class="product legs" .item="${outfit.legs}"></y-product-item>
          <y-product-item class="product feet" .item="${outfit.feet}"></y-product-item>
          </div>
        <div class="create ${user.gender}">
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
         margin: 0 auto;
         max-width: 405px;
      }
      .products {
        position: absolute;
        top:0;
        height: 100%;
        right: 0px;
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
      }
      .product {
        min-height:18.6vh;
      }
      .female {
        background-image: url('assets/female.png');
      }
      .part.head {
        top: 0vh;
        height: 85px;
        transform: rotate(-15deg);
      }
      .part.neck {
        display:none;
      }
      .part.torso {
        top: 14vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .part.hips {
        top: 32vh;
        height: 86px;
        transform: rotate(-15deg);
      }
      .part.legs {
        top: 45vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .part.feet {
        top: 62vh;
        height: 110px;
        transform: rotate(-15deg);
      }
    </style>`
  }
}


customElements.define('y-create', ViewTag);
