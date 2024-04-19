import { getProducts } from "app/services/shopify/products";


//metodo para ver que funcione bien 

export async function GET() {
  const products = await getProducts();

  return Response.json({ products });
}