
export function normalizeProduct(data){
  const product = {
    price: data.albumId,
    id: data.id,
    img: data.thumbnailUrl,
    likes: 5
  }
  return product;
}
