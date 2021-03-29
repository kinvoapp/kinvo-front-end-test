//--------------------------------------------------------------------< hooks >
import { useEffect, useState } from "react";
//-----------------------------------------------------------------< contexts >
import { createContext } from "react";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";
import { getProducts } from "../services/api";
import { Product } from "../types/Product";
interface IData {
  products: Product[];
  error: boolean;
  loaded: boolean;
}
interface IProps {
  children: ReactNode;
}
//-------------------------------------------------------------------< global >
export const ProductsContext = createContext({} as IData);
//====================================================[ < ProductsProvider > ]
export function ProductsProvider({ children }: IProps) {
  //-------------------------------------------------------------< properties >
  const [products, setProducts] = useState<Product[]>([]);

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  //----------------------------------------------------------------< methods >
  useEffect(() => {
    (async () => {
      getProducts()
        .then((_products) => setProducts(_products))
        .catch(() => setError(true))
        .finally(() => setLoaded(true));
    })();
  }, []);
  //-----------------------------------------------------------------< return >
  return (
    <ProductsContext.Provider value={{ products, error, loaded }}>
      {children}
    </ProductsContext.Provider>
  );
}
