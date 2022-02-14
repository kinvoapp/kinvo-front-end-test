/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import * as S from "./index.style";

interface BondData {
	due: {
		date: string;
		daysUntilExpiration: number;
	};
	fixedIncome: {
		bondType: string;
		name: string;
		portfolioProductId: number;
	};
	hasBalance: number;
	position: {
		equity: number;
		indexerLabel: string;
		indexerValue: number;
		percentageOverIndexer: number;
		portfolioPercentage: number;
		profitability: number;
		valueApplied: number;
	};
	sortProperty: string;
}

export const MyBonds = () => {
	const [bondData, setBondData] = useState<BondData[]>([]);
	const [searchBond, setSearchBond] = useState<string>("");
	const [bonds, setBonds] = useState<BondData[]>(bondData);
	const [sortType, setSortType] = useState<string>();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await api.get("/");
			setBondData(data?.data?.snapshotByProduct);
			setBonds(data?.data?.snapshotByProduct);
		};

		fetchData();
	}, []);

	useEffect(() => {
		const handleClickSort = () => {
			setBonds(bondData);
			const sortedDate = [...bondData].sort((a, b) =>
				a.due.daysUntilExpiration > b.due.daysUntilExpiration
					? 1
					: a.due.daysUntilExpiration < b.due.daysUntilExpiration
					? -1
					: 0
			);
			const sortedValue = [...bondData].sort((a, b) =>
				a.position.valueApplied < b.position.valueApplied
					? 1
					: a.position.valueApplied > b.position.valueApplied
					? -1
					: 0
			);

			setBonds(() =>
				sortType === "1" ? sortedDate : sortType === "2" ? sortedValue : bondData
			);
		};

		handleClickSort();
	}, [sortType]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBond(event.target.value);
	};

	useEffect(() => {
		const results: BondData[] = bonds.filter((bond) =>
			bond.fixedIncome.name.toLowerCase().includes(searchBond)
		);
		if (searchBond === "") {
			return setBonds(bondData);
		} else return setBonds(results);
	}, [searchBond]);

	return (
		<S.MyBondsContainer>
			<div>
				<S.MyBondsSurface>
					<h1>Minhas Rendas Fixas</h1>
					<div>
						<select id="Sort" name="Sort" onChange={(e) => setSortType(e.target.value)}>
							<option value="0">Ordenar por</option>
							<option value="1">Data de Vencimento | Menor - Maior</option>
							<option value="2">Valor Aplicado | Maior - Menor</option>
						</select>
						<input
							type="text"
							placeholder="Search"
							value={searchBond}
							onChange={handleChange}
						/>
					</div>
				</S.MyBondsSurface>

				{bonds?.map((bond, i) => {
					return (
						<S.BondContainer key={i}>
							<S.BondBox>
								<S.BondTitle>
									<small>TÍTULO</small>
									<span>
										<img src="/info.svg" alt="Informação" />
									</span>
								</S.BondTitle>
								<S.BondDetail>
									<p>{bond.fixedIncome.name}</p>
									<div>
										<small>CLASSE</small>
										<h4>{bond.fixedIncome.bondType}</h4>
									</div>
								</S.BondDetail>
							</S.BondBox>
							<S.BondBox>
								<S.BondTitle>
									<small>RESULTADO</small>
									<span>
										<img src="/info.svg" alt="Informação" />
									</span>
								</S.BondTitle>
								<S.BondDetail h3Color="#38bfa0">
									<div>
										<small>VALOR INVEST.</small>
										<h3>
											{bond.position.valueApplied.toLocaleString("pt-BR")}
										</h3>
									</div>
									<div>
										<small>SALDO BRUTO</small>
										<h3>{bond.position.equity.toLocaleString("pt-BR")}</h3>
									</div>
									<div>
										<small>RENT.</small>
										<h3>
											{`${bond.position.profitability.toLocaleString(
												"pt-BR"
											)}%`}
										</h3>
									</div>
									<div>
										<small>% DA CART.</small>
										<h3>{`${bond.position.portfolioPercentage.toLocaleString(
											"pt-BR"
										)}%`}</h3>
									</div>
									<div>
										<small>{bond.position.indexerLabel}</small>
										<h3>
											{`${bond.position.indexerValue.toLocaleString(
												"pt-BR"
											)}%`}
										</h3>
									</div>
									<div>
										<small>SOBRE {bond.position.indexerLabel}</small>
										<h3>
											{`${bond.position.percentageOverIndexer.toLocaleString(
												"pt-BR"
											)}%`}
										</h3>
									</div>
								</S.BondDetail>
							</S.BondBox>
							<S.BondBox>
								<S.BondTitle>
									<small>VENCIMENTO</small>
									<span>
										<img src="/info.svg" alt="Informação" />
									</span>
								</S.BondTitle>
								<S.BondDetail h3Color="#008dcb">
									<div>
										<small>DATA VENC.</small>
										<h3>{bond.due.date}</h3>
									</div>
									<div>
										<small>DIAS ATÉ VENC.</small>
										<h3>{bond.due.daysUntilExpiration}</h3>
									</div>
								</S.BondDetail>
							</S.BondBox>
						</S.BondContainer>
					);
				})}
			</div>
		</S.MyBondsContainer>
	);
};
