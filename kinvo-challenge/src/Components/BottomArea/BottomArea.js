import React, { Component } from 'react'

// STYLES
import './BottomArea.scss'

class BottomArea extends Component {
	render() {
		return (
			<section className="bottom-area">
				<p className="bottom-area-text">
					<span>O controle </span>dos seus <span>investimentos</span> na palma da mão.
				</p>

				<div className="bottom-footer">
					<div className="stores-link"></div>
				</div>
			</section>
		)
	}
}

export default BottomArea