import { logger } from 'domain/logger';
// import soshi from 'domain/middleware/soshi'
import morhpdom from 'morphdom';
import { currentPage } from 'domain/store/selectors/main';

export default function render(){
  const app = document.getElementById('main');
  morhpdom(app, '<div></div>')
}

declare const module: {
  hot: {
    accept: (string, Function) => void
  }
};