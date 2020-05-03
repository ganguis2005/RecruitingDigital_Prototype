import React, { Component } from 'react';
import Form from './Form';
import Datenschutz from './Datenschutz';
import Occupation from './Occupation';
import APartner from './APartner';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step : 1, 
            vorname : '',
            nachname: '',
            occupation:'',
            fachbereich:'',
            //von der DB zu importieren
            aPartner: [
                {name:'Gerd Müller', tisch:'Tisch 1',position: 'cto', bio:''}, 
                {name:'Aert', tisch:'Tisch 2', position: 'Milchwirtschaftlicher Laborant',  bio: '' },  
                {name:'Batman', tisch:'Tisch 3', position: 'Milchtechnologe', bio: '' },
            ]
            

        };
        this.forwardStep = this.forwardStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.setVorname = this.setVorname.bind(this);
        this.setNachname = this.setNachname.bind(this);
        this.setOccupation = this.setOccupation.bind(this); 
        this.setFach = this.setFach.bind(this);
    }    
    forwardStep() {
        let newStep= this.state.step + 1;
        this.setState({step: newStep});
    }
    prevStep() {
        let newStep= this.state.step - 1;
        this.setState({step: newStep});
    } 
    setVorname(value) {
        this.setState({vorname: value});
    }
    setNachname(value) {
        this.setState({nachname: value});
    }
    setOccupation(event) {
        this.setState({occupation: event.target.value});
      };
    setFach(value) {
        this.setState({fachbereich: value});
    }
    render() { 
        
        const name = (
            <Form fowardStep={this.forwardStep} />
        );
        const occupation = (
            <div>
                <h1>he he he</h1>
                <button onClick={this.prevStep}>prev</button>
            </div>  
        ); 
        switch(this.state.step) {
            case (1) : return <Datenschutz forwardStep={this.forwardStep} />;

            case (2) : return <Form forwardStep={this.forwardStep} prevStep={this.prevStep} setVorname={this.setVorname} setNachname={this.setNachname} />;

            case (3) : return <Occupation forwardStep={this.forwardStep} prevStep={this.prevStep} vorname={this.state.vorname} setOccupation={this.setOccupation} setFach={this.setFach} />
            
            
            case (4) : return < APartner aPartner={this.state.aPartner} />
        }
    }
}
