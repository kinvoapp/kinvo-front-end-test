import { FC } from "react";
import styled from "styled-components";

interface OverviewCardProps {
	label: string;
	value: string;
}

const OverviewCard: FC<OverviewCardProps> = function ({ label, value }) {
	return (
		<article>
			<h4>{label}</h4>
			<p>{value}</p>
		</article>
	);
};

const OverviewData = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	gap: 10px;
`;

const FixedIncomePage: FC = function () {
	return (
		<>
			<h2>Renda Fixa</h2>
			<OverviewData>
				<h3 hidden>Resumo</h3>
				<OverviewCard label="Saldo Bruto" value={"R$ 207.653,10"} />
				<OverviewCard label="Valor Aplicado" value={"R$ 170.025,64"} />
				<OverviewCard label="Resultado" value={"R$ 37.638,46"} />
				<OverviewCard label="Rentabilidade" value={"25,08%"} />
				<OverviewCard label="CDI" value={"23,68%"} />
				<OverviewCard label="% sobre CDI" value={"320%"} />
			</OverviewData>
			<article>
				<h3>Rentabilidade dos títulos</h3>
			</article>
			<article>
				<h3>Minhas rendas fixas</h3>
			</article>
			<article>
				<h3>Divisão de carteira por tipos</h3>
			</article>
			<article>
				<h3>Divisão de carteira por título</h3>
			</article>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
				congue massa mollis est ultricies, id bibendum ipsum pulvinar. Phasellus
				imperdiet erat nec diam efficitur, id ullamcorper ante semper. Praesent
				egestas felis eu accumsan finibus. Integer volutpat commodo tortor. Nunc
				pellentesque malesuada augue. Vestibulum a mi sed massa lacinia laoreet.
				Vestibulum iaculis pulvinar est, et consequat erat laoreet sed. Mauris
				dignissim feugiat leo, sed lobortis lectus rutrum et. Etiam et blandit
				quam. Nam lacinia semper lacus quis iaculis. Suspendisse pretium
				scelerisque commodo. Nullam auctor turpis eu mollis fermentum. Maecenas
				non blandit dolor. Duis diam lacus, commodo eu elit et, placerat auctor
				mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
				gravida lectus, ac mattis nibh. Quisque et pharetra erat. Aliquam nisi
				velit, aliquam in faucibus eget, facilisis quis velit. Nulla mollis ut
				est vel lacinia. Fusce ultricies eu justo eu pulvinar. Proin fermentum
				mi enim, sed congue augue porttitor a. Proin vel scelerisque nisi. Morbi
				sit amet erat placerat, commodo dui ut, tincidunt erat. Maecenas viverra
				non ante eget fermentum. Ut eu felis sed magna fermentum pretium ut
				blandit dolor. Suspendisse potenti. Morbi non condimentum felis, at
				bibendum nisi. Cras in aliquam urna, eget blandit est. Quisque eget ex
				eget lacus congue tempus non eu velit. Vivamus posuere, augue non
				sollicitudin finibus, mi ligula volutpat lacus, non pretium dolor metus
				vel elit. Nunc eget finibus leo, nec auctor ex. Ut pellentesque ipsum
				sit amet erat aliquam, molestie tincidunt est posuere. Nam iaculis,
				risus a pharetra pulvinar, mauris massa placerat velit, sit amet viverra
				nibh ante at orci. Nullam venenatis nibh posuere lorem aliquam, sed
				iaculis neque tincidunt. Morbi fringilla lectus eget purus luctus, non
				porta arcu rutrum. Ut rhoncus venenatis sapien in facilisis.
				Pellentesque suscipit risus id malesuada ultricies. Etiam congue eros ut
				mi faucibus viverra. Suspendisse blandit ex egestas vehicula tincidunt.
				Maecenas ultricies orci eget venenatis accumsan. Duis ornare magna
				lorem. Donec ut consequat est, nec placerat odio. Nulla et porttitor
				leo. Vestibulum imperdiet commodo nisl sit amet molestie. Praesent
				accumsan ligula turpis. Quisque eu posuere tortor, vitae interdum mi.
				Integer id orci ipsum. Vivamus quis dui dignissim, efficitur augue vel,
				laoreet nisi. Integer lobortis placerat bibendum. Ut auctor elementum
				feugiat. Vivamus ut vehicula dolor. Aliquam facilisis diam semper augue
				euismod, ac efficitur velit vulputate. Sed ultricies arcu ac urna
				sollicitudin, vel semper tellus varius. Phasellus venenatis eros lectus.
				Praesent tempor neque at augue tincidunt pretium. Duis aliquam turpis
				velit, lobortis molestie sapien imperdiet non.
			</p>
		</>
	);
};

export default FixedIncomePage;
