import { useState, useEffect } from "react";

import { db } from "../../services/api";
import * as S from "./index.style";

interface UserData {
	equity: number;
	valueApplied: number;
	percentageProfit: number;
}

export const Header = () => {
	const [userData, setUserData] = useState<UserData | undefined>();

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await db.get("resume");
			setUserData(data);
			console.log(data);
		};

		fetchData();
	}, []);

	return (
		<S.HeaderContainer>
			<img src="/logo.svg" alt="Logo Kinvo Premium" />

			<S.HeaderBox>
				<S.HeaderBox>
					<S.HeaderSurface>
						<img src="diamondRing.svg" alt="Ícone Saldo Bruto" />
						<div>
							<p>SALDO BRUTO</p>
							<h1>{userData?.equity.toLocaleString("pt-BR")}</h1>
						</div>
					</S.HeaderSurface>
					<S.HeaderSurface>
						<img src="arrowUp.svg" alt="Ícone Valor Aplicado" />
						<div>
							<p>VALOR APLICADO</p>
							<h1>{userData?.valueApplied.toLocaleString("pt-BR")}</h1>
						</div>
					</S.HeaderSurface>
					<S.HeaderSurface>
						<img src="arrowChart.svg" alt="Ícone Rentabilidade" />
						<div>
							<p>RENTABILIDADE</p>
							<h1>{`${userData?.percentageProfit.toLocaleString("pt-BR")}%`}</h1>
						</div>
					</S.HeaderSurface>
				</S.HeaderBox>

				<S.HeaderSurface boldLabel>
					<img src="arrowDown.svg" alt="Arrow Down" />
					<div>
						<p>CARTEIRA</p>
						<h1>Minha Carteira</h1>
					</div>
				</S.HeaderSurface>

				<S.Hamburger src="/hamburger.svg" alt="Menu" />
			</S.HeaderBox>
		</S.HeaderContainer>
	);
};
