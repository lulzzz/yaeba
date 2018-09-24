
import { store, getState } from 'domain/store/main';
import 'tags'
import startRouters from 'domain/middleware/router';
import morphdom from 'morphdom';

function _render(){
  const state = getState();
  document.getElementById('main').firstElementChild.setAttribute('currentPage', state.currentPage);
}
morphdom(document.getElementById('main').firstElementChild, `<y-router></y-router>`);
store.addWatch('renderLoop', _render)
startRouters();
