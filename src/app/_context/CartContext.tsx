"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from "@/app/products/[category]/page";

// Helper function to get the cart from localStorage
const getCart = (): Product[] => {
    try {
        const cartItems: string | null = localStorage.getItem("cart");
        return cartItems ? JSON.parse(cartItems) : [];
    } catch (error) {
        console.error('Failed to retrieve cart:', error);
        return [];
    };
};

// Helper function to save the cart to localStorage
const saveCart = (cart: Product[]) => {
    try {
        localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
        console.error('Failed to save cart:', error);
    }
};

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
      setCartItems(getCart());
  }, []);

  const addToCart = (product: Product) => {
      const isProductInCart = cartItems.some(item => item.product_id === product.product_id);

      if (isProductInCart) {
          console.warn(`Product with id ${product.product_id} is already in the cart.`);
          return;
      };

      const updatedCart = [...cartItems, product];
      setCartItems(updatedCart);
      saveCart(updatedCart);
  };

  const removeFromCart = (productId: string) => {
      if (cartItems.length === 0) {
          console.warn('The cart is empty.');
          return;
      }

      const updatedCart = cartItems.filter(product => product.product_id !== productId);

      if (updatedCart.length === cartItems.length) {
          console.warn(`Product with id ${productId} not found in cart.`);
      } else {
          setCartItems(updatedCart);
          saveCart(updatedCart);
      }
  };

  return (
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
          {children}
      </CartContext.Provider>
  );
};

export default CartProvider;
