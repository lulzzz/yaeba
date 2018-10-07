import { createAtom } from 'js-atom';
export type product = {
  thumbnailUrl: '',
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
  thumbnailUrl: '',
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
  currentPage:  'ENTRY',
  addition: {
    location: 'head',
    id: '',
    product: defaultProduct
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
