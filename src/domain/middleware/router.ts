
import { updateCurrentPage } from 'domain/store/reducers';
import page from 'page';
import { onloadGetProducts } from 'domain/middleware/user';


const ENTRY = (res, req) => {
  updateCurrentPage('ENTRY');
}
const ADD = (res, req) => {
  onloadGetProducts();
  updateCurrentPage('ADD');
 }
const CREATE = (res, req) => { updateCurrentPage('CREATE'); }

page('/', ENTRY)
page('/add', ADD)
page('/create', CREATE)

export default function startRouters() {
 page.start();
}
