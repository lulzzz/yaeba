import page from 'page';
import {
  updateGender,
  updateCreationHead,
  updateCreationTorso,
  updateCreationHips,
  updateCreationLegs,
  updateCreationFeet,
  updateAdditionLocation,
  updateProducts,
  updateDisplayName,
  updateAccessToken,
  updateEmail,
  updatePhotoUrl,
  updateCurrentPage
 } from 'domain/store/reducers';
import { getState } from '../store/main';
import { getProducts } from './network';
import { normalizeProduct } from './normalize';

export function onBoarding(step: string){
  page(step);
}
export function onClickSetGender(gender: string){
  updateGender(gender);
  //TODO check this, shouldn't it be updateCurrentPage
  page('/create');
}
export function onLocationChoice(location:string) {
  updateAdditionLocation(location);
  page('/add');
}
export async function onloadGetProducts(){
  await getProducts().then(products => {
    console.log(products)
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
        page('/create')
      break;
       case 'torso':
        updateCreationTorso(val);
        page('/create')
      break;
      case 'hips':
        updateCreationHips(val);
        page('/create')
      break;
     case 'legs':
        updateCreationLegs(val);
        page('/create')
      break;
     case 'feet':
        updateCreationFeet(val);
        page('/create')
      break;
    default:
      break;
  }
}

export function onAuthChangeSetUser(user){
  const { displayName, photoURL, email } = user;
  updateDisplayName(displayName)
  updatePhotoUrl(`${photoURL}?type=large`)
  updateEmail(email)
}

export function onClickNewOutfit() {
  page('/create')
}
