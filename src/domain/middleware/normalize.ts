
export function normalizeProduct(data){
  const product = {
    price: data.price,
    id: data.id,
    img: data.images[0].src,
    likes: data.average_rating,
    purchasable: data.purchasable,
    in_stock: data.in_stock
  }
  return product;
}
