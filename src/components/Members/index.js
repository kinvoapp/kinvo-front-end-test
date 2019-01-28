import React, { Component } from 'react';
import './styles.scss';
import Member from './components/Member';

class Members extends Component {
    constructor(props) {
        super(props);
        var aux = [];
        for(var i = 1; i <= 5; i++) {
            var member = {
                image: require("./images/member-" + i + ".png"),
                name: "Nome da Pessoa",
                jobPosition: "Função",
                desc: "“Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna.”"
            };
            aux.push(member);
        }
        this.state = {
            members: aux
        };
    }
    render() {
        return (
            <section id="members">
                <div className="container">
                    <header className="row pt-5 mb-2">
                        <div className="h2 text-pal-2 font-weight-bold">Quem faz o Kinvo</div>
                    </header>
                    <div className="row justify-content-center pb-5">
                        { this.state.members.map((member, i) => (
                            <div className="col-12 col-sm-6 col-md-4 col-xl-2 mb-4" key={i}>
                                <Member
                                    image={member.image}
                                    name={member.name}
                                    jobPosition={member.jobPosition}
                                    desc={member.desc}
                                ></Member>
                            </div>
                        )) }                      
                    </div>
                </div>
            </section>
        );
    }
}

export default Members;
