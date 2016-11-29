var React = require('react');
import { Link, IndexLink } from 'react-router'

var Menu = React.createClass({
    getInitialState: function(){
      return {
        dataAreas: [],
        dataEstrategicos: [],
        dataTacticos: [],
        dataOperativos: []
      }//return
    },//getInitialState

    componentDidMount: function(){
        this.serverRequest = $.get('./js/data/areas.json', function(result){
          var tempDataAreas = result;
          this.setState({
            dataAreas: tempDataAreas
          });//setState
          // console.log(this.state);
        }.bind(this));//getAreas

        this.serverRequest = $.get('./js/data/equipoEstrategico.json', function(result){
          var tempDataEstrategicos = result;
          this.setState({
            dataEstrategicos: tempDataEstrategicos
          });//setState
          // console.log(this.state);
        }.bind(this));//getEquipoEstrategico

        this.serverRequest = $.get('./js/data/equipoTactico.json', function(result){
          var tempDataTactico = result;
          this.setState({
            dataTacticos: tempDataTactico
          });//setState
          // console.log(this.state);
        }.bind(this));//getEquipoTactico

        this.serverRequest = $.get('./js/data/equipoOperativo.json', function(result){
          var tempDataOperativos = result;
          this.setState({
            dataOperativos: tempDataOperativos
          });//setState
          // console.log(this.state);
        }.bind(this));//getEquipoOperativo

    },//componentDidMount

    componentWillUnmount: function(){
        this.serverRequest.abort();
    },//componentDidMount

    render(){
      var filteredAreas = this.state.dataAreas;
      filteredAreas = filteredAreas.map(function(item,index){
          return(
           <li key={index}><IndexLink  to="/" style={{color: "#009688"}} activeClassName='active' key={index}>{this.state.dataAreas[index].descripcion}</IndexLink></li>
          )//return
      }.bind(this));//filteredEstrategicos

      var filteredEstrategicos = this.state.dataEstrategicos;
      filteredEstrategicos = filteredEstrategicos.map(function(item,index){
          return(
            <li key={index}><IndexLink  to="/" style={{color: "#009688"}} activeClassName='active' key={index}>{this.state.dataEstrategicos[index].puesto}</IndexLink></li>
          )//return
      }.bind(this));//filteredEstrategicos

      var filteredTacticos = this.state.dataTacticos;
      filteredTacticos = filteredTacticos.map(function(item,index){
          return(
            <li key={index}><IndexLink  to="/" style={{color: "#009688"}} activeClassName='active' key={index}>{this.state.dataTacticos[index].puesto}</IndexLink></li>
          )//return
      }.bind(this));//filteredTacticos

      var filteredOperativos = this.state.dataOperativos;
      filteredOperativos = filteredOperativos.map(function(item,index){
          if(item.Id_tactico === 1){
            // console.log(item);
            return(
              <li key={index}><IndexLink  to="/" style={{color: "#009688"}} activeClassName='active' key={index}>{this.state.dataOperativos[index].nombre}</IndexLink></li>
            )//return
          }
      }.bind(this));//filteredEstrategicos

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
              <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>81832121 Ext.2335</p>
              <hr/>
            </div>


            <div className="w3-container">
              <p><i className="fa fa-lightbulb-o fa-fw w3-margin-right w3-large w3-text-teal"></i><a data-toggle="collapse" data-target="#estrategico" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo Estratégico</a></p>
              <div id="estrategico" className="collapse in">
                <div style={{marginLeft:50}}>
                  <ul>
                    {filteredAreas}
                  </ul>
                  <br/>
                </div>
              </div>
            </div>
            <div className="w3-container">
              <p><i className="fa fa-group fa-fw w3-margin-right w3-large w3-text-teal"></i><a data-toggle="collapse" data-target="#tactico" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo Táctico</a></p>
              <div id="tactico" className="collapse">
                <div style={{marginLeft:50}}>
                  <ul>
                    {filteredTacticos}
                  </ul>
                  <br/>
                </div>
              </div>
            </div>

            <div className="w3-container">
              <p><i className="fa fa-gears fa-fw w3-margin-right w3-large w3-text-teal"></i><a data-toggle="collapse" data-target="#operativo" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo Operativo</a></p>
              <div id="operativo" className="collapse">
                <div style={{marginLeft:50}}>
                  {filteredOperativos}
                </div>
              </div>
            </div>

          </div>


        </div>
      )
    }

});

module.exports = Menu;
