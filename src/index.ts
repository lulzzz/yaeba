
import { store, getState } from 'domain/store/main';
import 'tags'
import startRouters from 'domain/middleware/router';
import morphdom from 'morphdom';


function _render(){
  const state = getState();
  document.getElementById('main').firstElementChild.setAttribute('currentPage', state.currentPage);
}
morphdom(document.getElementById('main').firstElementChild, `<y-router></y-router>`);
if ((module as any).hot) (module as any).hot.accept('index.ts', _render);
store.addWatch('renderLoop', _render)
startRouters();
