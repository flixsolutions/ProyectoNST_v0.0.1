var React = require('react');

var Adopta = React.createClass({

    render(){
      return (
        <div>
          <form className="w3-container">

            <label className="w3-label w3-text-blue"><b>Usuario</b></label>
            <input className="w3-input w3-border" type="text" />

            <label className="w3-label w3-text-blue"><b>Contraseña</b></label>
            <input className="w3-input w3-border" type="text" />

            <br/>
            <button className="w3-btn w3-blue">Entrar</button>

          </form>
        </div>

      )
    }

});

module.exports = Adopta;
