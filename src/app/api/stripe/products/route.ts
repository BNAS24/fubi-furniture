// @desc Get list of all products on stripe account
// @route api/stripe/products
// @access Public
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Creating a new instace of the stripe object
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(request: NextRequest) {
  try {
    // Retrieve category from query params
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "";

    const productList = await stripe.products.search({
      query: `metadata["category"]:'${category}'`,
    });

    // Map through the products and create a new array
    const products = productList.data.map((product) => ({
      product_id: product.id,
      name: product.name,
      price: product.metadata.price,
      description: product.description,
      image: product.metadata.image_url,
      category: product.metadata.category,
      fallbackImages: product.images,
      stripe_price_link: product.default_price,
    }));

    console.log("products:", products);

    return NextResponse.json(products);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
