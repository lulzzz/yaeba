import { createAtom } from 'js-atom';

const defaultState = {
  currentPage: {
    name: 'HOME_PAGE'
  },
  homepage: {
    title: 'Home Page'
  },
  examplepage: {
    title: 'Example Page'
  }

}

export const store = createAtom(defaultState);