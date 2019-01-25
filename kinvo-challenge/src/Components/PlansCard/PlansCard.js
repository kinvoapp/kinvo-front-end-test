import React, { Component } from 'react'

// STYLE
import './PlansCard.scss'

class PlansCard extends Component {

	render() {
		return (
			<div className="plans-card">
				<div className="type-area" style={{ color: `${this.props.color}` }}>
					<p>{this.props.plan}</p>
				</div>

				<div className="description-area">
					<ul>
						{ this.props.description.map((item) => (
							<li>{item}</li>
						))}
					</ul>
				</div>

				<div className="price-area" style={{ background: `${this.props.color}` }}>
					<p>{this.props.price}</p>
				</div>
			</div>
		)
	}
}

export default PlansCard