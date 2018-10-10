import { updateProducts } from 'domain/store/reducers';
import { consumer_key, consumer_secret } from 'vars';

const CATEGORIES = {
  'torso': 271,
  'head': 271,
  'legs': 271,
  'feet': 271,
  'hips': 271,
}

export async function getProducts() {
  const params = `category=271&consumer_key=${consumer_key}&consumer_secret=${consumer_secret}`;
  const resp = await fetch(`https://yaeba-backend.herokuapp.com/wp-json/wc/v2/products?${params}`, {
  });
  return resp.json();
}
