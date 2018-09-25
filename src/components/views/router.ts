import { LitElement, html, property } from '@polymer/lit-element';
import { getState } from 'domain/store/main';

class CustomTag extends LitElement {
  state: {
    currentPage: string
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
    this.render();
    console.log('Updated', this.state.currentPage)
  }
  _html(currentPage){
    switch (currentPage) {
      case 'ADD':
      return html`<y-add .state='${this.state}'></y-add>`;
      case 'ENTRY':
       return html`<y-entry .state='${this.state}'></y-entry>`
      case 'SEARCH':
        return html`<y-search .state='${this.state}'></y-search>`
    }
  }

  render() {
    return html`${this._html(this.state.currentPage)}`
  }
}
customElements.define('y-router', CustomTag);
