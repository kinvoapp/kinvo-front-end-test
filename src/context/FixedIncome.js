import { createContext, useState, useEffect } from "react";
import { getAllInformationByProducts, getInformationByWallet } from "../api";

export const FixedIncomeContext = createContext();

export default function FixedIncomeProvider({ children }) {
  const [myFixedIncomeProducts, setMyFixedIncomeProducts] = useState(null);
  const [walletInformation, setWalletInformation] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [selectedDrop, setSelectedDrop] = useState("");

  useEffect(() => {
    (async () => {
      await getProductsFixedIncome();
      await getInfoAboutWallet();
    })();
  }, []);

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
