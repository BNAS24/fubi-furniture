async function getData() {
  const res = await fetch(`http://localhost:3000/api/products`, {
    cache: "no-store", // Very important for fetching data from the database
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const products = await res.json();

  return products;
}

export default async function Dashboard() {
  const products = await getData();
  return (
    <div>
      <h1>Products</h1>
      {products?.map((product: any) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}
