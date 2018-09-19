import { logger } from 'domain/logger';
// import soshi from 'domain/middleware/soshi'
import morhpdom from 'morphdom';
import { getState } from 'domain/store/selectors/main';

export default function render(){
  const app = document.getElementById('main');
  const state = getState();
  switch (state.currentPage) {
    case 'HOME_PAGE':
      const tag = document.createElement('y-home');
      tag.setAttribute('state', state);
      morhpdom(app, tag)
    break;

    default:
    // 404
    break;
  }
}

declare const module: {
  hot: {
    accept: (string, Function) => void
  }
};
