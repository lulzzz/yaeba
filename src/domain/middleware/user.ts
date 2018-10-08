import page from 'page';
import {
  updateGender,
  updateCreationHead,
  updateCreationTorso,
  updateCreationHips,
  updateCreationLegs,
  updateCreationFeet,
  updateAdditionLocation,
  updateProducts
 } from 'domain/store/reducers';
import { getState } from '../store/main';
import { getProducts } from './network';
import { normalizeProduct } from './normalize';

export function onBoarding(gender: string){
  updateGender(gender);
  page('/create');
}
export function onLocationChoice(location:string) {
  updateAdditionLocation(location);
  page('/add');
}
export async function onloadGetProducts(){
  await getProducts().then(products => {
    const normalizedProducts = products.map(product => normalizeProduct(product));
    updateProducts(normalizedProducts);
  })
}
export function addAddtion(val) {
  const state = getState();
  switch (state.addition.location) {
    case 'gender':
      updateGender(val);
      break;
      case 'head':
        updateCreationHead(val);
      break;
       case 'torso':
        updateCreationTorso(val);
      break;
      case 'hips':
        updateCreationHips(val);
      break;
     case 'legs':
        updateCreationLegs(val);
      break;
     case 'hips':
        updateCreationFeet(val);
      break;
    default:
      break;
  }
}
