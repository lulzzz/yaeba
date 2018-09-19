import { store } from 'domain/store/main';

export function updateCurrentPage(currentPage){
  return store.swap(oldState => ({...oldState, currentPage}))
}