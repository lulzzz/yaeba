import page from 'page';
import { updateText } from '../store/reducers';

export function iLikeToWear(){
  console.log('clicked')
  page('/search');
}
