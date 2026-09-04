"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/product";

interface CompareContextType {
  selectedProducts: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: string) => void;
  toggleCompare: (product: Product) => void;
  clearCompare: () => void;
  isInCompare: (productId: string) => boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCompare = (product: Product) => {
    if (selectedProducts.some((p) => p.id === product.id)) return;
    if (selectedProducts.length >= 3) {
      alert("You can compare up to 3 products at a time.");
      return;
    }
    setSelectedProducts((prev) => [...prev, product]);
  };

  const removeFromCompare = (productId: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const toggleCompare = (product: Product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  const clearCompare = () => {
    setSelectedProducts([]);
    setIsDrawerOpen(false);
  };

  const isInCompare = (productId: string) => {
    return selectedProducts.some((p) => p.id === productId);
  };

  return (
    <CompareContext.Provider
      value={{
        selectedProducts,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        clearCompare,
        isInCompare,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = (): CompareContextType => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};
