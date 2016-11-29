var React = require('react');
import { Link} from 'react-router'
import Kpi from './Kpi'
import FormRH from './FormRH'
import FormSTTI from './FormSTTI'
import FormProyectos from './FormProyectos'


var Tabs = React.createClass({
  getInitialState(){
    return {
      menuHome:"Inicio",
      menu1:"STTI",
      menu2:"RH",
      menu3:"Salud de Proyectos",
      menuExit:"Salir"
    }
  },

    render(){
      return (
        <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
          <br/>
          <ul className="nav nav-pills">
            <li className="active"><a data-toggle="pill" href="#home"><i className="fa fa-home"></i> {this.state.menuHome}</a></li>
            <li><a data-toggle="pill" href="#menu1"><i className="fa fa-legal"></i> {this.state.menu1}</a></li>
            <li><a data-toggle="pill" href="#menu2"><i className="fa fa-star"></i> {this.state.menu2}</a></li>
            <li><a data-toggle="pill" href="#menu3"><i className="fa fa-star"></i> {this.state.menu3}</a></li>
          </ul>

          <div className="tab-content">
            <div id="home" className="tab-pane fade in active">
              <br/>
              <Kpi />
            </div>
            <div id="menu1" className="tab-pane fade">
              <br/>
              <FormSTTI />
            </div>
            <div id="menu2" className="tab-pane fade">
              <br/>
              <FormRH />
            </div>
            <div id="menu3" className="tab-pane fade">
              <br/>
              <FormProyectos />
            </div>
          </div>

        </div>
      )
    }

});

module.exports = Tabs;
