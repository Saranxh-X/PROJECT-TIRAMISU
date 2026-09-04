"use client";

import React, { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCompare = (product) => {
    setSelectedProducts((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      if (prev.length >= 3) return prev;
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const toggleCompare = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      removeFromCompare(product.id);
    } else {
      if (selectedProducts.length < 3) {
        addToCompare(product);
      }
    }
  };

  const isInCompare = (productId) => {
    return selectedProducts.some((p) => p.id === productId);
  };

  const clearCompare = () => {
    setSelectedProducts([]);
    setIsDrawerOpen(false);
  };

  return (
    <CompareContext.Provider
      value={{
        selectedProducts,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        isInCompare,
        clearCompare,
        isDrawerOpen,
        setIsDrawerOpen,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
