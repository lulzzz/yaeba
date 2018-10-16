
import { updateCurrentPage } from 'domain/store/reducers';
import page from 'page';
import { onloadGetProducts } from 'domain/middleware/user';

const LOGIN = (res, req) => {
  updateCurrentPage('LOGIN');
}
const ADD = (res, req) => {
  onloadGetProducts();
  updateCurrentPage('ADD');
 }
const CREATE = (res, req) => { updateCurrentPage('CREATE'); }
const UNBOARDING = (res,req) => {
}

page('/', LOGIN)
page('/add', ADD)
page('/create', CREATE)
page('/unboarding/*', UNBOARDING)

export default function startRouters() {
 page.start();
}
