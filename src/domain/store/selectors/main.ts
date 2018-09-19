import { store } from 'domain/store/main';

export function state() {
  return store.deref();
}

export function currentPage() {
  return state().currentPage;
}

export function homepageContent(){
  return state().homepage;
}
export function exampleContent(){
  return state().examplepage;
}