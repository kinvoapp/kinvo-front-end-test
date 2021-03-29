import axios from "axios";
import { Portfolio } from "../types/Portfolio";
import { Product } from "../types/Product";

interface FixedIncomeTypeData {
  success: boolean;
  data: {
    snapshotByPortfolio: Portfolio;
    snapshotByProduct: Product[];
  };
  error: any;
}

const api = axios.create({
  baseURL: "https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/",
});

export async function getPortfolio() {
  const { data } = await api.get<FixedIncomeTypeData>(
    "getFixedIncomeClassData"
  );

  if (data.success) return data.data.snapshotByPortfolio;

  return {} as Portfolio;
}

export async function getProducts() {
  const { data } = await api.get<FixedIncomeTypeData>(
    "getFixedIncomeClassData"
  );

  if (data.success) return data.data.snapshotByProduct;

  return [] as Product[];
}
