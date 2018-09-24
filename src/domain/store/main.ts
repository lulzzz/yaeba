import { createAtom } from 'js-atom';

const defaultState = {
  currentPage:  'ENTRY',
  entry: {
    title: 'yaeba',
    i_like: 'I like to wear...',
    buttons: {
      male: 'Male Clothes',
      female: 'Female Clothes',
      whatever: 'Whatever I want! B#%CH'
    }
  },
  add: {
    title: 'Example Page'
  }

}

export const store = createAtom(defaultState);

export function getState() {
  return store.deref();
}
