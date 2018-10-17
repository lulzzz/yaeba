import { LitElement, html, property } from '@polymer/lit-element';
import { getState } from 'domain/store/main';
import { updateProducts } from 'domain/store/reducers';




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
    console.log(currentPage)
    switch (currentPage) {
      case 'GENDER':
        return html`<y-gender .state='${this.state}'></y-gender>`;
      case 'PAYINFO':
        return html`<y-pay-info .state='${this.state}'><y-pay-info>`
      case 'UPLOAD':
        return html`<y-upload .state='${this.state}'></y-upload>`
      case 'LOGIN':
        return html`<y-login .state='${this.state}'></y-login>`
      case 'ADD':
      return html`<y-add .state='${this.state}'></y-add>`;
      case 'SEARCH':
        return html`<y-search .state='${this.state}'></y-search>`
      case 'CREATE':
        return html`<y-create .state='${this.state}'></y-create>`
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
