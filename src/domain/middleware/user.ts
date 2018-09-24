import page from 'page';
import { updateText } from '../store/reducers';

export function iLikeToWear(){
  page('/add');
  updateText('other stuff')
}
