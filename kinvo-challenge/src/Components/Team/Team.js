import React, { Component } from 'react'

// STYLE
import './Team.scss'

// COMPONENTS
import TeamMember from '../TeamMember/TeamMember';

// IMAGES - MUST BE IMPORTED WHEN USING CREATE-REACT-APP
import memberA from '../../Images/memberA.png'
import memberB from '../../Images/memberB.png'
import memberC from '../../Images/memberC.png'
import memberD from '../../Images/memberD.png'
import memberE from '../../Images/memberE.png'


class Team extends Component {

	state = {
		team: [
			{ id: 0, name: 'Nome A', function: 'Funcao A', photoLink: memberA, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper dapibus turpis sed pulvinar. Integer vestibulum mi ullamcorper risus viverra facilisis. Vivamus vel sapien sagittis, auctor velit quis, malesuada libero.' },
			{ id: 1, name: 'Nome B', function: 'Funcao B', photoLink: memberB, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper dapibus turpis sed pulvinar. Integer vestibulum mi ullamcorper risus viverra facilisis. Vivamus vel sapien sagittis, auctor velit quis, malesuada libero.' },
			{ id: 2, name: 'Nome C', function: 'Funcao C', photoLink: memberC, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper dapibus turpis sed pulvinar. Integer vestibulum mi ullamcorper risus viverra facilisis. Vivamus vel sapien sagittis, auctor velit quis, malesuada libero.' },
			{ id: 3, name: 'Nome D', function: 'Funcao D', photoLink: memberD, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper dapibus turpis sed pulvinar. Integer vestibulum mi ullamcorper risus viverra facilisis. Vivamus vel sapien sagittis, auctor velit quis, malesuada libero.' },
			{ id: 4, name: 'Nome E', function: 'Funcao E', photoLink: memberE, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper dapibus turpis sed pulvinar. Integer vestibulum mi ullamcorper risus viverra facilisis. Vivamus vel sapien sagittis, auctor velit quis, malesuada libero.' },
		]
	}

	render() {
		return (
			<section className="team">
				<h2>Quem faz o Kinvo</h2>
				<div className="team-area">
					<ul>
						{ this.state.team.map((member) => (
							<li key={member.id}>
								<TeamMember
									name={member.name}
									function={member.function}
									info={member.info}
									image={member.photoLink}
								></TeamMember>
							</li>
						))}
					</ul>
				</div>
			</section>
		)
	}
}

export default Team