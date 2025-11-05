import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imgSrc?: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  count: number;
  total: number;
  updateQuantity: (id: string, quantity: number) => void;
};

const STORAGE_KEY = "levelup_cart_v1";

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  count: 0,
  total: 0,
  updateQuantity: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw) as CartItem[];
    } catch (e) {
      console.error("Error leyendo carrito desde localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Error guardando carrito en localStorage", e);
    }
  }, [items]);

  const addItem = useCallback((item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: Math.min(next[idx].quantity + quantity, 99) };
        return next;
      }
      return [...prev, { ...item, quantity }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: Math.max(1, Math.min(quantity, 99)) } : p))
    );
  }, []);

  const count = useMemo(() => items.reduce((s, i) => s + i.quantity, 0), [items]);
  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.quantity, 0), [items]);

  const value = useMemo(
    () => ({ items, addItem, removeItem, clearCart, count, total, updateQuantity }),
    [items, addItem, removeItem, clearCart, count, total, updateQuantity]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
