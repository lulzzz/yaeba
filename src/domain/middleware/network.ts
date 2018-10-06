import { updateProducts } from 'domain/store/reducers';

export async function getProducts() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
  return updateProducts(await resp.json());
}
