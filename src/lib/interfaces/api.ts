import { useCallback, useEffect, useState } from "react";
import { FilterParams, FixedIncomeService } from "../useCases/service";
import {
	adaptFixedIncomeResponse,
	FixedIncomeResponse,
} from "./response/fixedIncome";

export type ConsultParams = FilterParams;

export function useFixedIncomeAsset(params: ConsultParams) {
	const [data, setData] = useState<FixedIncomeService>();
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState(false);

	const [nOfPages, setNOfPages] = useState(0);

	const filterProductSnapshot = useCallback(
		(products: FixedIncomeService["snapshotByProduct"]) => {
			// ordenação não copia array
			const productsToFilter = [...products];

			const filtered = productsToFilter.filter(
				({ fixedIncome: { name, bondType } }) =>
					typeof params.searchBy === "undefined" ||
					new RegExp(params.searchBy, "i").test(name) ||
					new RegExp(params.searchBy, "i").test(bondType)
			);
			filtered.sort((a, b) => {
				switch (params.orderBy) {
					case "due":
						return b.due.daysUntilExpiration - a.due.daysUntilExpiration;
					case "valueApplied":
						return b.position.valueApplied - a.position.valueApplied;
					default:
						return 0;
				}
			});

			const pageOffset = params.offset || 0;
			const itensPerPage = params?.nItens || products.length;
			setNOfPages(Math.ceil(products.length / itensPerPage));
			const paginated = filtered.slice(
				pageOffset * itensPerPage,
				(pageOffset + 1) * itensPerPage
			);
			return paginated;
		},
		[params.nItens, params.offset, params.orderBy, params.searchBy]
	);

	useEffect(() => {
		const url = new URL(
			"/mock/getFixedIncomeClassData",
			"https://60b6ad6f17d1dc0017b882fd.mockapi.io"
		);
		fetch(url.href)
			.then((res) => res.json())
			.then(
				({ data, error, success }: FixedIncomeResponse) => {
					// TODO: usar erro para feedback ao usuário
					if (success) {
						const { snapshotByProduct, ...adaptedData } =
							adaptFixedIncomeResponse(data);
						const filteredSnapshot = filterProductSnapshot(snapshotByProduct);
						setData({ snapshotByProduct: filteredSnapshot, ...adaptedData });
					}
				},
				(err) => setError(err)
			)
			.finally(() => setLoading(false));
	}, [filterProductSnapshot]);

	const availableOptions: Record<Required<ConsultParams>["orderBy"], string> = {
		valueApplied: "Valor Investido",
		due: "Vencimento",
	};

	return { data, error, loading, availableOptions, nOfPages };
}
