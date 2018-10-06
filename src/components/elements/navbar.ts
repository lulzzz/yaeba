import { LitElement, html } from '@polymer/lit-element';

class NavBar extends LitElement {
  currentPage: any

  constructor() {
    super();
  }

  static get properties() {
    return {
      currentPage: {type: String }
    }
  }


  render() {

    return html`
      <div class="navbar">
            <y-icon name="new"></y-icon>
            <y-icon name="list"></y-icon>
            <y-icon name=""></y-icon>
      </div>
    `
  }
}

customElements.define('y-navbar', NavBar);
