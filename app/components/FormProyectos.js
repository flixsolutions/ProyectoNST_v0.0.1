var React = require('react');
import Ades from './scorecards/rh/Ades'
import Adopta from './scorecards/rh/Adopta'
import Procapet from './scorecards/rh/Procapet'
import RevisionVertical from './scorecards/rh/RevisionVertical'
import Tops from './scorecards/rh/Tops'


var FormProyectos = React.createClass({

  getInitialState: function() {
      return {
          showAdes: false,
          showAdopta: false,
          showProcapet: false,
          showRV: false,
          showTops: false
      };
  },

  showAdes: function() {
      this.setState({
        showAdes: true,
        showAdopta: false,
        showProcapet: false,
        showRV: false,
        showTops: false,
      });
  },
  showAdopta: function() {
      this.setState({
        showAdes: false,
        showAdopta: true,
        showProcapet: false,
        showRV: false,
        showTops: false,
      });
  },
  showProcapet: function() {
      this.setState({
        showAdes: false,
        showAdopta: false,
        showProcapet: true,
        showRV: false,
        showTops: false,
      });
  },
  showRV: function() {
      this.setState({
        showAdes: false,
        showAdopta: false,
        showProcapet: false,
        showRV: true,
        showTops: false,
      });
  },
  showTops: function() {
      this.setState({
        showAdes: false,
        showAdopta: false,
        showProcapet: false,
        showRV: false,
        showTops: true,
      });
  },

  render(){

    return (
      <div>


        <nav className="w3-sidenav w3-gray w3-card-2" style={{width:"180px", height:"575px"}}>
          <div className="w3-container">
          </div>
          <a href="javascript:void(0)" className="tablink" onClick={this.showAdes}>Agenda de Desarrollo</a>
          <a href="javascript:void(0)" className="tablink" onClick={this.showAdopta}>Adopta una Tienda</a>
          <a href="javascript:void(0)" className="tablink" onClick={this.showProcapet}>Procapet</a>
          <a href="javascript:void(0)" className="tablink" onClick={this.showRV}>Revisión Vertical</a>
          <a href="javascript:void(0)" className="tablink" onClick={this.showTops}>Juntas TOPS</a>
        </nav>

        <div style={{marginLeft:"180px", height:"575px"}}>
        <div className="w3-padding">Información de Scorecards</div>

        <div id="Ades" className="w3-container w3-animate-opacity" style={{display: this.state.showAdes ? 'block' : 'none'}}>
          <Ades />
        </div>

        <div id="Adopta" className="w3-container w3-animate-opacity" style={{display: this.state.showAdopta ? 'block' : 'none'}}>
          <Adopta />
        </div>

        <div id="Procapet" className="w3-container w3-animate-zoom" style={{display: this.state.showProcapet ? 'block' : 'none'}}>
          <Procapet />
        </div>

        <div id="RevisionVertical" className="w3-container w3-animate-left" style={{display: this.state.showRV ? 'block' : 'none'}}>
          <RevisionVertical />
        </div>

        <div id="Tops" className="w3-container w3-animate-zoom" style={{display: this.state.showTops ? 'block' : 'none'}}>
          <Tops />
        </div>

        </div>


      </div>
    )
  }

});

module.exports = FormProyectos;
