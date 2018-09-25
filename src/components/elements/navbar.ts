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
            <y-icon name="circle"></y-icon>
            <i data-feather="circle"></i>
            <i data-feather="circle"></i>
      </div>
    `
  }
}

customElements.define('y-navbar', NavBar);
