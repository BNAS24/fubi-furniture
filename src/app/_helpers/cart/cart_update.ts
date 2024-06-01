import { Product } from "@/app/products/[category]/page";

// Helper function to get the cart from localStorage
export const getCart = (): Product[] => {
    try {
        const cartItems: string | null = localStorage.getItem("cart");
        return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
        console.error('Failed to retrieve cart:', error);
        return [];
    }
};

// Helper function to save the cart to localStorage
const saveCart = (cart: Product[]) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error('Failed to save cart:', error);
    }
};

// Main function to add a product to the cart
export const addToCart = (product: Product) => {
    const cart: Product[] = getCart();
    const isProductInCart = cart.some(item => item.product_id === product.product_id);

    if (isProductInCart) {
        console.warn(`Product with id ${product.product_id} is already in the cart.`);
        return;
    }

    cart.push(product);
    saveCart(cart);
};

// Main function to remove a product from the cart
export const removeFromCart = (productId: string) => {
    const cart: Product[] = getCart();

    if (cart.length === 0) {
        console.warn('The cart is empty.');
        return;
    }

    const updatedCart: Product[] = cart.filter(product => product.product_id !== productId);

    if (updatedCart.length === cart.length) {
        console.warn(`Product with id ${productId} not found in cart.`);
    } else {
        saveCart(updatedCart);
    }
};
