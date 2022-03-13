import { FC } from "react";
import styled from "styled-components";

interface HeaderWrapperProps {
	xPadding: string;
}
const HeaderWrapper = styled.header.attrs<HeaderWrapperProps>((props) => ({
	xPadding: props.xPadding || "30px",
}))<Partial<HeaderWrapperProps>>`
	width: calc(100% - 2 * ${(props) => props.xPadding});

	position: sticky;
	top: 0;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 27px ${(props) => props.xPadding};

	background-color: #ffffff;
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 35px;
`;

const InfoWrapper = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 35px;
`;

const Header: FC = function () {
	return (
		<HeaderWrapper>
			<h1>KinvoPremium</h1>
			<InnerWrapper>
				<InfoWrapper>
					<h2 hidden>Resumo</h2>
					<article>
						<h3>Saldo bruto</h3>
						<p>130.521.230,02</p>
					</article>
					<article>
						<h3>Valor Aplicado</h3>
						<p>521.230,02</p>
					</article>
					<article>
						<h3>Rentabilidade</h3>
						<p>2,34%</p>
					</article>
				</InfoWrapper>
				<div>
					<button>Minha carteira</button>
					<ul>
						<li>Opção</li>
					</ul>
				</div>
				<div>
					<button>Icone do whopper</button>
					<ul>
						<li>Opção</li>
					</ul>
				</div>
			</InnerWrapper>
		</HeaderWrapper>
	);
};

export default Header;
