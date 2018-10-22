import { LitElement, html } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { mansoryBase, mansoryBrick, coreGradients } from 'styles/lib';
import { updateDisplayName } from 'domain/store/reducers';
import { buttonBase } from 'styles/button';
class ViewTag extends LitElement {
  state: any
  displayName: string;
  constructor() {
    super();
    this.displayName = '';
  }

  static get properties() {
    return {
      state: { type: Object },
    };
  }
  photoUpload(url) {
    if(url.length > 0){
      return html`
        <img src="${url}" />
      `
    } else {
      return html`<div class="fake-img"><y-icon name="camera"></y-icon></div>`
    }
  }
  onChange(event: any, displayName) {
    this.displayName = event.target.innerText;
  }
  onSave(displayName) {
    console.log(displayName);
    updateDisplayName(displayName);
  }


  render() {
    const { user } = this.state;
    return html`
      <div class="page">
        <div class="card">
        <div class="inner">
        <h3>put your face <br>in the face hole</h3>
        ${this.photoUpload(user.photoURL)}
        <p contenteditable @input="${(e) => this.onChange(e, this.displayName)}">${user.displayName}</p>
        <y-button icon="save"  color="RO" @click="${() => this.onSave(this.displayName)}">Save</y-button>
        </div>
        </div>
        <style>
        img,
        .fake-img {
          background: ${coreGradients.BP};
          width: 150px;
          height: 150px;
          overflow:hidden;
          border-radius: 100%;
          padding: 10px;
          color: #fff;
          margin:0 auto;
        }
        button {
          ${buttonBase()}
          background: ${coreGradients.RY};
          clear:both;
          display:block;
          width: 100%;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 14px;
        }
        y-icon {
          display:inline-block;
          width: 24px;
          height: 24px;
        }
        .fake-img y-icon {
          margin-left: auto;
          margin-right: auto;
          display:block;
          width: 80px;
          height: 100%;
        }
        h3 {
          font-weight: bold;
          color: #383873;
          font-size: 30px;
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
            width: 80vw;
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
