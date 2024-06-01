// Function that checks if the dates length is greater than a day (24 hours)
const dateLongevity = (date: any) => {
  const now: any = new Date();
  const pastDate: any = new Date(date);
  const diffInMilliseconds = now - pastDate;
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
  return diffInHours > 24;
};

// Checks cart state
export const getCart = async () => {
  const cart: any = localStorage.getItem("cart");

  if (!dateLongevity(cart.date)) {
    return cart;
  } else {
    localStorage.removeItem("cart");
    return null;
  }
};