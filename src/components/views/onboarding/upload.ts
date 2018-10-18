import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick, coreGradients } from 'styles/lib';

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
  photoUpload(url) {
    if(url.length > 0){
      return html`
        <img width="100px" height="100px" src="${url}" />
      `
    } else {
      return html`<div class="fake-img"><y-icon name="camera"></y-icon></div>`
    }
  }


  render() {
    const { user } = this.state;
    return html`
      <div class="page">
        <div class="card">
        <div class="inner">
        <p>put your face <br>in the face hole</p>
        ${this.photoUpload(user.photoURL)}
        <input value="${user.displayName}" type="text" />
        </div>
        </div>
        <style>
        .fake-img {
          background: ${coreGradients.BP};
          width: 250px;
          height: 250px;
          overflow:hidden;
          border-radius: 100%;
          color: #fff;
          display: table-cell;
          vertical-align: middle;
        }
        .fake-img y-icon {
          margin-left: auto;
          margin-right: auto;
          width: 50px;
          height: 50px;
        }
        input,
         p {
            font-weight: bold;
            font-size: 26px;
            color: #383873;
          }
          p {
            padding: 0;
            margin: 0 0 16px 0;
          }
          .page {
            text-align:center;
            padding-top: 8px;
            padding-bottom: 8px;
            display: table;
            position: absolute;
            height: 100%;
            width: 100%;
          }
          .inner {
            margin-left: auto;
            margin-right: auto;
            width: 400px;
            /*whatever width you want*/
          }
          .card {
            display: table-cell;
            vertical-align: middle;
          }
        </style>
      </div>
    `
  }
}

customElements.define('y-upload', ViewTag);
