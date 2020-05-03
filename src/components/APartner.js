import React from 'react'
import AlignListItems from './shared/AlignListItems';


class APartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       step: 1 
    };
    this.forwardStep = this.forwardStep.bind(this);
  }
  forwardStep() {
    let newStep= this.state.step + 1;
    this.setState({step: newStep});
  }
  render () {
    //Data von den aPartner aus Db  Importieren
    
    ///
    switch(this.state.step) {
      case (1) : return(
        <div className="app">
          <header className="app__header">
          <div className="app__logo app__logo--small"></div>
          </header>
          <div className="app__content">
            <p>Bitte waehle dir einen<br /> Gespreachspartner aus</p>
            <AlignListItems text={this.props.aPartner} chooseAP={this.forwardStep}/>
          </div>
        </div>    
      );
      case (2) : return(
        <h1>go to table 1</h1>  
      );
    }




    
    /*return(
      
      <div className="app">
        <header className="app__header">
          <div className="app__logo app__logo--small"></div>
        </header>
        <div className="app__content">
          <p>Bitte waehle dir einen<br /> Gespreachspartner aus</p>
          

          <AlignListItems text={this.props.aPartner}/>
          
          
        </div>
      </div>    
    );*/

  }
}

export default APartner;


