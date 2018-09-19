
import { updateCurrentPage } from 'domain/store/reducers/main';
import page from 'page';

const homePage = (res, req) => { updateCurrentPage('HOME_PAGE'); }
const examplePage = (res, req) => { updateCurrentPage('EXAMPLE_PAGE'); }

page('/', homePage)
page('/example', examplePage)

export default function startRouters() {
 page.start();
}
