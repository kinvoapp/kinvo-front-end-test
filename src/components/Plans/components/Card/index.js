import React, { Component } from 'react';
import './styles.scss';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="plans__card bg-white overflow-hidden text-center text-md-left">
                <div className="row h-100">
                    <div className="col-12 col-md-3 flex-grow-1">
                        <div className="row h-100 m-0 justify-content-center py-md-4">
                            <div className="col-12 col-md-auto align-self-center">
                                <div className={"plans__card__title h4 p-4 m-0 text-pal-" + this.props.paletteSuffix}>
                                    <strong>Plano</strong> {this.props.title}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 flex-grow-1">
                        <div className="row h-100">
                            <div className="col-12 align-self-center">
                                <div className="plans__card__resources px-2 py-4 text-pal-5">
                                    <ul className="mb-0 p-0">
                                        { this.props.resources.map((resource, i) => (
                                            <li key={i}>{resource}</li>
                                        )) }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-12 col-md-3 flex-grow-1 bg-pal-" + this.props.paletteSuffix}>
                        <div className="row h-100">
                            <div className="col-12 align-self-center">
                                <div className="plans__card__price py-5 h4 p-md-4 text-white m-0 font-weight-bold">{this.props.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
