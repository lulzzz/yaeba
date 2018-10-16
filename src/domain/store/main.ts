import { createAtom } from 'js-atom';
export type product = {
  img: '',
  title: ''
}
export type outfit = {
  head: product,
  torso: product,
  hips: product,
  legs: product,
  feet: product,
}
const defaultProduct: product = {
  img: '',
  title: ''
}
const defaultOutfit: outfit = {
  head: defaultProduct,
  torso: defaultProduct,
  hips: defaultProduct,
  legs: defaultProduct,
  feet: defaultProduct,
}

const defaultState = {
  currentPage:  'LOGIN',
  addition: {
    location: 'head',
    id: '',
  },
  entry: {
    title: 'yaeba',
    i_like: 'I like to wear...',
    buttons: {
      male: 'Male Clothes',
      female: 'Female Clothes',
      whatever: 'Whatever I want! B#%CH'
    }
  },
  user: {
    gender: 'female',
    email: "",
    displayName: "",
    photoURL: "",
    refreshToken: "",
    creation: {...defaultOutfit},
    outfits: {...defaultOutfit},
    closets: {...defaultOutfit},
  },
  products: []
}

export const store = createAtom(defaultState);

export function getState() {
  return store.deref();
}
