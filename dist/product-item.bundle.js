(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{33:function(t,e,s){"use strict";s.r(e);var i=s(2);customElements.define("y-outfits",class extends i.a{constructor(){super()}static get properties(){return{}}styles(){return i["b"]`
      <style></style>
    `}render(){return i["b"]`
      <div class="page">
        ${this.styles()}
        <h3>outfits</h3>
      </div>
    `}})},34:function(t,e,s){"use strict";s.r(e);var i=s(2),o=s(7),r=s(6);customElements.define("y-product-item",class extends i.a{constructor(){super()}static get properties(){return{item:{type:Object}}}attributeChangedCallback(){this.render()}styles(t){return i["b"]`<style>
      :host {
       background-image: url(${t});
        overflow:hidden;
        border-radius: 15px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        font-size: 16px;
        font-weight:bold;
        color: #fff;
        position:relative;
        min-width: 100px;
        min-height: 200px;
      }
      .product {
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
      }
      .fade {
        opacity: 0.5;
        height: 60%;
        bottom: 0;
        position: absolute;
        width: 100%;
        background : ${r.a.DF}
      }
      .info {
       position: absolute;
      bottom: 4px;
      margin: 0 auto;
      left: auto;
      right: auto;
      width: 100%;
      }
    </style>`}render(){const{item:t}=this;return t.img?i["b"]`<div class="product" @click="${()=>{Object(o.a)(t)}}">
      ${this.styles(t.img)}
      <div class="fade"></div>
      <div class="info">
      <span>¥${t.price}</span>
      </div>
    </div>`:null}})}}]);
//# sourceMappingURL=product-item.bundle.js.map