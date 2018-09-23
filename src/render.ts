import { logger } from 'domain/logger';
// import soshi from 'domain/middleware/soshi'
import morhpdom from 'morphdom';
import { getState } from 'domain/store/selectors/main';

export default function render(){
}

declare const module: {
  hot: {
    accept: (string, Function) => void
  }
};
