import { createContext, useState, useEffect, useCallback } from "react";
import { getAllInformationByProducts, getInformationByWallet } from "../api";

export const FixedIncomeContext = createContext();

export function FixedIncomeProvider({ children }) {
  const [myFixedIncomeProducts, setMyFixedIncomeProducts] = useState(null);
  const [walletInformation, setWalletInformation] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [selectedDrop, setSelectedDrop] = useState("");

  const getProductsFixedIncomeUpdate = useCallback(async () => {
    const response = await getAllInformationByProducts();

    const result = response
      .sort((x, y) => {
        return x.position[selectedDrop] - y.position[selectedDrop];
      })
      .reverse();
    setMyFixedIncomeProducts(result);
  }, [selectedDrop]);

  useEffect(() => {
    (async () => {
      await getProductsFixedIncome();
      await getInfoAboutWallet();
    })();
  }, []);

  useEffect(() => {
    if (selectedDrop !== "") {
      (async () => {
        await getProductsFixedIncomeUpdate();
      })();
    }
  }, [selectedDrop, getProductsFixedIncomeUpdate]);

  async function getProductsFixedIncome() {
    const response = await getAllInformationByProducts();
    setMyFixedIncomeProducts(response);
  }

  async function getInfoAboutWallet() {
    const response = await getInformationByWallet();
    setWalletInformation(response);
  }

  return (
    <FixedIncomeContext.Provider
      value={{
        myFixedIncomeProducts,
        walletInformation,
        selectedText,
        selectedDrop,
        setSelectedText,
        setSelectedDrop,
        setMyFixedIncomeProducts,
      }}
    >
      {children}
    </FixedIncomeContext.Provider>
  );
}
