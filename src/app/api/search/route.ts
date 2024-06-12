import algoliasearch from "algoliasearch";
import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

// Creating a new instace of the stripe object
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID!,
  process.env.ALGOLIA_WRITE_API_KEY!
);
const index = client.initIndex("stripe_products");

// Search the index and print the results
export async function get(request: NextRequest) {
  try {
    const products = await stripe.products.list({
      limit: 100,
    });

    const objects = products.data.map((product) => ({
      objectID: product.id,
      name: product.name,
      description: product.description,
      category: product.metadata.category,
      image: product.images[0],
    }));

    await index.saveObjects(objects);

    console.log("Products indexed to Algolia" + objects.length);

    return NextResponse.json(objects);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const search = searchParams.get("query");

  // const results = await client.search(search!);

  try {
    const products = await stripe.products.list({
      limit: 100,
    });

    const objects = products.data.map((product) => ({
      objectID: product.id,
      name: product.name,
      description: product.description,
      category: product.metadata.category,
      image: product.images[0],
    }));

    await index.saveObjects(objects);

    console.log("Products indexed to Algolia" + objects.length);

    return NextResponse.json(objects);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
