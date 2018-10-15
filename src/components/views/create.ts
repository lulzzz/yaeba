import { LitElement, html, svg } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { onBoarding, onLocationChoice } from 'domain/middleware/user';
import { coreGradients, mansoryBrick } from 'styles/lib';
import { pageBase } from 'styles/page';
import { female } from 'styles/img';

type outfit = {
  head: any,
  torso: any,
  hips: any,
  legs: any,
  feet: any
}

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
  hasOutfit(outfit){
    return Object.keys(outfit).filter(part => outfit[part].id > 0).length > 0;
  }
  outfit(outfit) {
    if(this.hasOutfit(outfit)) {
      return html`<div class="outfit">
        <y-product-item class="product head" .item="${outfit.head}"></y-product-item>
        <y-product-item class="product torso" .item="${outfit.torso}"></y-product-item>
        <y-product-item class="product hips" .item="${outfit.hips}"></y-product-item>
        <y-product-item class="product legs" .item="${outfit.legs}"></y-product-item>
        <y-product-item class="product feet" .item="${outfit.feet}"></y-product-item>
      </div>`
    }
  }
  model(gender){
    return html`
     <div class="create ${gender}">
          <div class="part head" @click="${() => onLocationChoice('head')}"></div>
          <div class="part torso" @click="${() => onLocationChoice('torso')}"></div>
          <div class="part hips" @click="${() => onLocationChoice('hips')}"></div>
          <div class="part legs" @click="${() => onLocationChoice('legs')}"></div>
          <div class="part feet" @click="${() => onLocationChoice('feet')}"></div>
        </div>
    `
  }

  render() {
    const { user: {
      creation,
      gender
    } } = this.state;

    return html`
      <div class="page">
        ${this.styles()}
        <p>Choose a body part</p>
        ${this.outfit(creation)}
        ${this.model(gender)}
      </div>
    `
  }
  styles() {
    return html`<style>
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
        width: 100%;
      }
      .create {
         height: 90vh;
         max-width: 410px;
         width:100%;
         background-size:contain;
         overflow: hidden;
         background-repeat: no-repeat;
         position:relative;
         margin: 0 auto;
      }
      .product {
        position: absolute;
        transform: scale(0.5);
        right: 0;
      }
      .product.head {
        top:0;
      }
      .product.torso {
        top:100px;
      }
       .product.hips {
        top:200px;
      }
      .product.legs {
        top: 300px;
      }
      .product.feet {
        top: 400px;
      }

      .female {
        background-image: url(${female});
      }
      .part.head {
        top: 0%;
        height: 110px;
        transform: rotate(-15deg);
      }
      .part.neck {
        display:none;
      }
      .part.torso {
        top: 17%;
        height: 110px;
        transform: rotate(-15deg);
      }
      .part.hips {
        top: 35%;
        height: 110px;
        transform: rotate(-15deg);
      }
      .part.legs {
        top: 54%;
        height: 110px;
        transform: rotate(-15deg);
      }
      .part.feet {
        top: 70%;
        height: 160px;
        transform: rotate(-15deg);
      }
    </style>`
  }
}


customElements.define('y-create', ViewTag);
