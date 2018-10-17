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
  tutorial: {
    step1:{
      title: "Lets build<br>some outfit<br>ya sexy beast!"
    },
    step2: {
      title: "press the top <br>for size & varients",
      img: "",
      subtitle: "Press to add<br>to your body      "
    }
  },
  entry: {
    title: 'yaeba',
    iLike: 'I like to wear...',
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
