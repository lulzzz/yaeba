
import { LitElement, html } from '@polymer/lit-element';
import anime from 'animejs'
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick } from 'styles/lib';

class viewsTag extends LitElement {
  constructor() {
    super();
    var duration = anime({
      targets: '.page .logo',
      translateX: 250,
      duration: 3000
    });
  }

  // attributeChangedCallback() {
  //   this.render();
  // }

  static get properties() {
    return {};
  }


  render() {
    return html `
      <div class="page">
        <style>
          img {
            width: 40%;
          height: 100%;
          margin: 34vh 0 0 0;
          }
        </style>
        <img class="logo" src="/assets/logo.png" />
      </div>
    `
  }
}

customElements.define('y-splash', viewsTag);

