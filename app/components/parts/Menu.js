var React = require('react');
import { Link} from 'react-router'

var Menu = React.createClass({

    render(){
      return (
        <div id="menu">
          <div className="w3-white w3-text-grey w3-card-4 ">
            <div className="w3-display-container w3-center">
              <div className="w3-container">
                <img src="/images/person.png" style={{width:"80%", height:"100%"}} alt="Avatar"/>
                <h5 className="w3-center">Susana Gaytán</h5>
              </div>
            </div>
            <div className="w3-container">
              <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>CPN</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Edificio Impulso</p>
              <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>susana.gaytan@oxxo.com</p>
              <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>81832121 Ext.0000</p>
              <hr/>
            </div>


            <div className="w3-container">
              <p><i className="fa fa-lightbulb-o fa-fw w3-margin-right w3-large w3-text-teal"></i><a data-toggle="collapse" data-target="#estrategico" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo Estratégico</a></p>
              <div id="estrategico" className="collapse in">
                <div style={{marginLeft:50}}>
                  <Link to="/" style={{color: "#009688"}}>Nuevas Soluciones Tienda</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Backoffice</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Centro de Competencias</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Soporte</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Infraestructura</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Sistema de Trabajo</Link><br/>
                  <br/>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <p><i className="fa fa-group fa-fw w3-margin-right w3-large w3-text-teal"></i><a data-toggle="collapse" data-target="#tactico" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo Táctico</a></p>
              <div id="tactico" className="collapse">
                <div style={{marginLeft:50}}>
                  <Link to="/" style={{color: "#009688"}}>Comercial</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Comercial Servicios</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Operaciones</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Operaciones Procesos</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Responsable de Desarrollo xPos</Link><br/>
                  <br/>
                </div>
              </div>
            </div>

            <div className="w3-container">
              <p><i className="fa fa-gears fa-fw w3-margin-right w3-large w3-text-teal"></i><a data-toggle="collapse" data-target="#operativo" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo Operativo</a></p>
              <div id="operativo" className="collapse">
                <div style={{marginLeft:50}}>
                  <Link to="/" style={{color: "#009688"}}>Francisco Torres</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Elma Ayala</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Arturo Viveros</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Felix Gálvez</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Blanca Rueda</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Sofir Villarreal</Link><br/>
                  <Link to="/" style={{color: "#009688"}}>Saúl Wade</Link><br/>
                  <br/>
                </div>
              </div>
            </div>

          </div>



        </div>
      )
    }

});

module.exports = Menu;
