import { LitElement, html, svg } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { onBoarding, onLocationChoice } from 'domain/middleware/user';
import { coreGradients } from 'styles/lib';
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
    return html`
      <div class="page">
        ${this.styles()}
        <div class="create ${user.gender}">
          <div class="part head" @click="${() => onLocationChoice('head')}"></div>
          <div class="part torso" @click="${() => onLocationChoice('torso')}"></div>
          <div class="part hips" @click="${() => onLocationChoice('hips')}"></div>
          <div class="part legs" @click="${() => onLocationChoice('legs')}"></div>
          <div class="part feet" @click="${() => onLocationChoice('feet')}"></div>
        </div>
        <p>I pick location</p>
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
        font-weight: bold;
        font-size: 26px;
        color: #383873;
        margin: 0 0 16px 0;
        padding: 0;
      }
      .part {
        border-bottom: 2px dotted #FBF8FF;
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
      }
      .female {
        background-image: url('assets/female.png');
      }
      .head {
        top: 4vh;
        height: 85px;
        transform: rotate(-15deg);
      }
      .neck {
        display:none;
      }
      .torso {
        top: 18vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .hips {
        top: 34vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .legs {
        top: 50vh;
        height: 110px;
        transform: rotate(-15deg);
      }
      .feet {
        top: 67vh;
        height: 110px;
        transform: rotate(-15deg);
      }
    </style>`
  }
}


customElements.define('y-create', ViewTag);
