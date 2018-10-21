(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{35:function(t,e,p){"use strict";p.r(e);var s=p(2),a=p(5),c=p(6);customElements.define("y-add",class extends s.a{constructor(){super()}attributeChangedCallback(){this.state=Object(a.a)(),this.render()}static get properties(){return{state:{type:Object},products:{type:Object}}}render(){const{products:t}=this.state,e=t.map(t=>s["b"]`<y-product-item .item="${t}" ></y-product-item>`);return s["b"]`
      <div class="page">
        <style>
          .page {
            text-align:center;
            ${Object(c.b)()}
            padding-top: 8px;
            padding-bottom: 8px;
          }
          y-product-item {
            height: 58vw;
            padding: 0 4px;
            margin: 0 4px 16px 4px;
            ${Object(c.c)()}
          }
        </style>
        ${e}
      </div>
    `}})}}]);
//# sourceMappingURL=add.bundle.js.map