import React, { Component } from 'react';

class Member extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="member text-center text-pal-5">
                <div className="member__img mb-3">
                    <img src={this.props.image} className="mw-100" alt={"Foto de " + this.props.name} width="143" height="143"></img>
                </div>
                <div className="member__info mb-4">
                    <h5 className="font-weight-bold mb-0">{this.props.name}</h5>
                    <h6 className="font-weight-normal">{this.props.jobPosition}</h6>
                </div>
                <div className="member__desc small">
                    <p>{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Member;
