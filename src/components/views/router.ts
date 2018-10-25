import { LitElement, html, property } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { updateCurrentPage } from 'domain/store/reducers';



class CustomTag extends LitElement {
  state: {
    currentPage: string
    products: any;
  }
  currentPage: string;
  constructor() {
    super();
    this.state = getState();

  }

  static get properties() {
    return {
      state: { type: Object },
      currentPage: {type: String }
    };
  }
  attributeChangedCallback() {
    //add diff here
    this.state = getState();
    console.log('[state update]', this.state);
    this.render();
  }
  _html(currentPage){
    switch (currentPage) {
      case 'SPLASH':
        import(/* webpackChunkName: "splash" */'components/views/splash');
        return html`<y-splash></y-splash>`
      case 'OUTFITS':
        import(/* webpackChunkName: "product-item" */'components/views/outfits');
        return html`
        <y-outfits .state='${this.state}'></y-outfits>
        <y-navbar></y-navbar>
        `;
      case 'GENDER':
        return html`<y-gender .state='${this.state}'></y-gender>`;
      case 'PAYINFO':
        return html`<y-pay-info .state='${this.state}'><y-pay-info>`
      case 'UPLOAD':
        import(/* webpackChunkName: "upload" */'components/views/onboarding/upload');
        return html`<y-upload .state='${this.state}'></y-upload>`
      case 'LOGIN':
        return html`<y-login .state='${this.state}'></y-login>`
      case 'ADD':
        import(/* webpackChunkName: "product-item" */'components/elements/product-item')
        import(/* webpackChunkName: "add" */'components/views/add');
      return html`
      <y-add .state='${this.state}'></y-add>
      <y-navbar></y-navbar>
      `;
      case 'SEARCH':
        return html`<y-search .state='${this.state}'></y-search>`
      case 'CREATE':
        import(/* webpackChunkName: "create" */'components/views/create');
        return html`
        <y-create .state='${this.state}'></y-create>
        <y-navbar></y-navbar>
        `
    }
  }

  render() {
    return html`
    <y-debug-bar></y-debug-bar>
    ${this._html(this.state.currentPage)}
    `
  }
}
customElements.define('y-router', CustomTag);
