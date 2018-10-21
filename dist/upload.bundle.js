(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{34:function(t,i,e){"use strict";e.r(i);var a=e(3),o=e(6),n=e(4),d=e(12);customElements.define("y-upload",class extends a.a{constructor(){super(),this.displayName=""}static get properties(){return{state:{type:Object}}}photoUpload(t){return t.length>0?a["b"]`
        <img src="${t}" />
      `:a["b"]`<div class="fake-img"><y-icon name="camera"></y-icon></div>`}onChange(t,i){this.displayName=t.target.innerText}onSave(t){console.log(t),Object(n.h)(t)}render(){const{user:t}=this.state;return a["b"]`
      <div class="page">
        <div class="card">
        <div class="inner">
        <h3>put your face <br>in the face hole</h3>
        ${this.photoUpload(t.photoURL)}
        <p contenteditable @input="${t=>this.onChange(t,this.displayName)}">${t.displayName}</p>
        <button @click="${()=>this.onSave(this.displayName)}"><y-icon name="save"></y-icon>Save</button>
        </div>
        </div>
        <style>
        img,
        .fake-img {
          background: ${o.a.BP};
          width: 240px;
          height: 240px;
          overflow:hidden;
          border-radius: 100%;
          padding: 10px;
          color: #fff;
          margin:0 auto;
        }
        button {
          ${Object(d.a)()}
          background: ${o.a.RY};
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
    `}})}}]);
//# sourceMappingURL=upload.bundle.js.map