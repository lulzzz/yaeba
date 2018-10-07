
import { updateCurrentPage } from 'domain/store/reducers';
import page from 'page';


const ENTRY = (res, req) => { updateCurrentPage('ENTRY'); }
const ADD = (res, req) => { updateCurrentPage('ADD'); }
const SEARCH = (res, req) => { updateCurrentPage('SEARCH'); }
const CREATE = (res, req) => { updateCurrentPage('CREATE'); }

page('/', ENTRY)
page('/add', ADD)
page('/search', SEARCH)
page('/create', CREATE)

export default function startRouters() {
 page.start();
}
