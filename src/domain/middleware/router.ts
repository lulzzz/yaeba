
import { updateCurrentPage } from 'domain/store/reducers';
import page from 'page';

const ENTRY = (res, req) => { updateCurrentPage('ENTRY'); }
const ADD = (res, req) => { updateCurrentPage('ADD'); }
const SEARCH = (res, req) => { console.log('search'); updateCurrentPage('SEARCH'); }

page('/', ENTRY)
page('/add', ADD)
page('/search', SEARCH)

export default function startRouters() {
 page.start();
}
