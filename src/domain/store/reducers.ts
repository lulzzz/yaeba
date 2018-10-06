import { store } from 'domain/store/main';

export function updateCurrentPage(currentPage){
  return store.swap(oldState => ({...oldState, currentPage}))
}
export function updateText(text){
  return store.swap(oldstate => ({
    ...oldstate,
    entry: {
      ...oldstate.entry,
      i_like: 'cheesecake'
    }
  }))
}

export function updateProducts(data){
   return store.swap(oldstate => ({
    ...oldstate,
    products: data
  }))
}
