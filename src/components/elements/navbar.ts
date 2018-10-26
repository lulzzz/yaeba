import { LitElement, query, html } from '@polymer/lit-element';
import { coreGradients } from 'styles/lib';
import { onClickNewOutfit } from 'domain/middleware/user'
import colors from 'styles/varibles';
import page from 'page';
import { ROUTES } from 'domain/middleware/router';
import anime from 'animejs'
class NavBar extends LitElement {
  items: Array<any>;
  addClick: () => void;
  closeClick: () => void;
  active: string;
  actors: any;
  view: string;

  @query('.card')
  card?: HTMLDivElement;

  constructor() {
    super();
    this.items = [
      { icon: 'zap', page: ROUTES.FEED },
      { icon: 'heart', page: ROUTES.LIKES },
      { icon: 'briefcase', page: ROUTES.OUTFITS},
      { icon: 'user', page: ROUTES.USER }
    ]
  }

  static get properties() {
    return {
      fabFunction: { type: Function },
      active: { type: String },
      view: { type: String },
      actors: {type: Object }
    }
  }

  animationRunner(view, root){
    switch (view) {
      case 'CREATE':
        this.transitionToClose(this.getAnimationActors(root));
        break;
      default:
        console.log(view, this.getAnimationActors(root));
        break;
    }
  }
  attributeChangedCallback() {
    this.render();
    this.animationRunner(this.view, this.shadowRoot)
  }

  getAnimationActors(root){
    console.log(this, this.card)
    return {
      menuItems: root.querySelectorAll('.menu button'),
      fab: root.querySelector('.fab'),
      addIcon: root.querySelector('.fab y-icon'),
      card: this.card,
    }
  }

  transitionToClose(actors){
    const iconHide = anime({
      targets: [actors.menuItems, actors.addIcon],
      scale: 0,
      easing: 'easeOutExpo'
    })
    const fabShrink = anime({
        targets: actors.fab,
        width: 50,
        height: 50,
        easing: 'easeOutExpo',
      });
    const addRotate = anime({
        targets: actors.addIcon,
        rotate: 45,
        scale: 0.5,
      })
    Promise.all([iconHide.finished, fabShrink.finished, addRotate.finished]).then(() => {
        anime({
          targets: actors.card,
          height: '90vh',
        })
        anime({
          targets: actors.fab,
          bottom: '90vh',
        })
      })
  }

  fragementItems(item:{page: string, icon:string}) {
    const active = item.page === ROUTES[this.active] ? 'active' : '';
    return html`
    <button class="${active}" @click="${() => page(item.page)}">
      <y-icon name="${item.icon}"></y-icon>
    </button>
    `
  }

  render() {
    return html`
      <div class="navbar">
        ${this.styles()}
        <div class="card">
          <div class="menu">
            ${this.items.map(i => this.fragementItems(i))}
          </div>
        </div>
        <!-- MOVE TO FAB COMP -->
        <button class="fab" @click=${onClickNewOutfit}>
          <y-icon name="plus"></y-icon>
        </button>
      </div>
    `
  }
  styles() {
    return html`<style>
      :host {
        display:block;
        padding-top: 35px;
        position:fixed;
        bottom: 0;
        width: 100vw;
      }
      .active {
        color: ${colors.pink}
      }
      .menu {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-right: 90px;
        margin-left: 20px;
      }
      button {
        border: none;
        background: none;
      }
      .fab y-icon {
        width: 35px;
        height: 35px;
        line-height: 1;
        vertical-align: text-bottom;
        color: #fff;
      }
      .fab {
        position:absolute;
        border-radius: 100%;
        overflow:hidden;
        background: ${coreGradients.BP};
        height: 70px;
        border:0;
        width: 70px;
        text-align:center;
        line-height: 1;
        bottom: 40px;
        right: 8px;
        box-shadow: 8px 16px 20px rgba(0,0,0,0.2);
      }
      .card {
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        background: #fff;
        padding: 20px 0;
        height: auto;
        text-align:right;

      }
      y-icon {
        height: 26px;
        width: 26px;
        display:inline-block;
      }
      *, input, button {outline:none !important;}
      *:focus {
        outline: none !important;
      }
    </style>`
  }
}

customElements.define('y-navbar', NavBar);
