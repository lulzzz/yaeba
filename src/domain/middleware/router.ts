
import { updateCurrentPage } from 'domain/store/reducers';
import page from 'page';
import { onloadGetProducts, onAuthChangeSetUser } from 'domain/middleware/user';
import { checkUserLogin, setUserCookie } from './login';

const SPLASH = (ctx, next) => {
  console.log('Splash')
  checkUserLogin((user) => {
    updateCurrentPage('OUTFITS');
    onAuthChangeSetUser(user)
  },() => {
    updateCurrentPage('LOGIN')
  })
}
const LOGIN = (ctx, next) => {
  //Check if logged in
  checkUserLogin((user) => {
    updateCurrentPage('UPLOAD');
  },() => {})
}
const ADD = (ctx, next) => {
  onloadGetProducts();
  //Set default view
  updateCurrentPage('ADD');
 }
const ADD_VIEW = (ctx, next) => {
onloadGetProducts();
console.log(ctx.params.view);
//set view chane
updateCurrentPage('ADD');
}
const CREATE = (ctx, next) => {
  updateCurrentPage('CREATE');
}
const ONBOARDING = (ctx, next) => {
  updateCurrentPage(ctx.params.sub.toUpperCase());
}
const OUTFITS = (ctx, next) => {
  updateCurrentPage('OUTFITS')
}
const OUTFITS_SAVE = (ctx, next) => {
  updateCurrentPage('OUTFITS_SAVE')
}
const OUTFITS_SINGLE = (ctx, next) => {
  updateCurrentPage('OUTFITS_SINGLE')
}
const ORDERS = (ctx, next) => {
  updateCurrentPage('ORDERS')
}
const ORDERS_NEW = (ctx, next) => {
  updateCurrentPage('ORDERS_NEW')
}

page('/', SPLASH)
page('/login', LOGIN)
page('/add', ADD)
page('/add/:view', ADD_VIEW)
page('/create', CREATE) //<- dub of outfit single
page('/onboarding/:sub', ONBOARDING)
page('/outfits', OUTFITS)
page('/outfits/save', OUTFITS_SAVE)
page('/outfits/:id', OUTFITS_SINGLE)
page('/orders', ORDERS)
page('/orders/new', ORDERS_NEW)



export default function startRouters() {
 page.start();
 checkUserLogin((user) => {
  updateCurrentPage('OUTFITS');
  onAuthChangeSetUser(user);
},() => {
  updateCurrentPage('LOGIN')
});
}
