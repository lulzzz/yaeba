import page from 'page';
import {
  updateGender,
  updateCreationHead,
  updateCreationTorso,
  updateCreationHips,
  updateCreationLegs,
  updateCreationFeet,
  updateAdditionLocation
 } from 'domain/store/reducers';
import { getState } from '../store/main';

export function onBoarding(gender: string){
  updateGender(gender);
  page('/create');
}
export function onLocationChoice(location:string) {
  updateAdditionLocation(location);
  page('/add');
}
export function updateUser(location, val) {
  const state = getState()
  switch (state.addition.location) {
    case 'head':
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
