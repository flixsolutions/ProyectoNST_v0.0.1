var React = require('react');
import { Link} from 'react-router'

var Menu = React.createClass({

    render(){
      return (
        <div className="w3-row">
          <br/>
          <br/>
          <div>
        		<i className="material-icons">lightbulb_outline</i>
        		<a data-toggle="collapse" data-target="#estrategico" style={{color:"gray", cursor:"pointer"}} aria-expanded="true">Equipo estratégico</a>
        		<div id="estrategico" className="collapse in">
        			<div style={{marginLeft:50}}>
        				<Link to="/">Nuevas Soluciones Tienda</Link><br/>
        				<Link to="/">Backoffice</Link><br/>
        				<Link to="/">Centro de Competencias</Link><br/>
        				<Link to="/">Soporte</Link><br/>
        				<Link to="/">Infraestructura</Link><br/>
        				<Link to="/">Sistema de Trabajo</Link><br/>
        			</div>
        		</div>
      		</div>

          <div style={{clear:"both"}}>
        		<i className="material-icons">people</i>
        		<a data-toggle="collapse" data-target="#tactico" style={{color:"gray", cursor:"pointer"}}>Equipo táctico</a>
        		<div id="tactico" className="collapse">
        			<div style={{marginLeft:50}}>
                <Link to="/">Comercial</Link><br/>
                <Link to="/">Comercial Servicios</Link><br/>
                <Link to="/">Operaciones</Link><br/>
                <Link to="/">Operaciones Procesos</Link><br/>
                <Link to="/">Responsable de Desarrollo xPos</Link><br/>
        			</div>
        		</div>
      		</div>


          <div style={{clear:"both"}}>
        		<i className="material-icons">settings</i>
        		<a data-toggle="collapse" data-target="#colab" style={{color:"gray", cursor:"pointer"}}>Equipo Operativo</a>
        		<div id="colab" className="collapse">
        			<div style={{marginLeft:50}}>
        			  <Link to="/">Francisco Torres</Link><br/>
        			  <Link to="/">Elma Ayala</Link><br/>
        			  <Link to="/">Arturo Viveros</Link><br/>
        			  <Link to="/">Felix Gálvez</Link><br/>
        			  <Link to="/">Blanca Rueda</Link><br/>
        			  <Link to="/">Sofir Villarreal</Link><br/>
        			  <Link to="/">Saúl Wade</Link><br/>
        			</div>
        		</div>
      		</div>

        </div>
      )
    }

});

module.exports = Menu;
