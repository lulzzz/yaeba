import { store } from 'domain/store/main';

export function getState() {
  return store.deref();
}

