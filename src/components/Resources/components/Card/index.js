import React, { Component } from 'react';
import './styles.scss';

class Card extends Component {
    render() {
        return (
            <div className="resources__card text-black-50 bg-white rounded overflow-hidden h-100">
                <div className="row m-0 h-100">
                    <div className="resources__card__icon col-4 p-3 border-right text-center">
                        <div className="row h-100">
                            <div className="col-12 align-self-center">
                                <img src={this.props.icon} className='mw-100' alt={this.props.iconAlt}></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 py-4">
                        <h5 className="font-weight-bold">{this.props.title}</h5>
                        <p className="mb-0 small">{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
