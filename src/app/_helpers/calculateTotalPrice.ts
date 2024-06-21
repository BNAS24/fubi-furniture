interface Product {
    product_id: string;
    name: string;
    price: string | number; // Allow price to be a string or number
    description?: string
    image?: string;
    fallbackImage?: [""];
    stripe_price_link?: string;
  }
  
  export const calculateTotalPrice = (products: Product[]): string => {
    // Use reduce to sum up the prices
    const totalPrice = products.reduce((acc, product) => {
      // Convert price to number if it's a string
      const price = typeof product.price === 'string' ? parseFloat(product.price) : product.price;
      return acc + price;
    }, 0);
  
    // Return the total price as a string
    return totalPrice.toFixed(2); // Ensures the total is formatted as a string with 2 decimal places
  };