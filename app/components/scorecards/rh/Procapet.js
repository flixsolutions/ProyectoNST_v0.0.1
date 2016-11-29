var React = require('react');

var Procapet = React.createClass({

    render(){
      return (
        <div>
          <h4>Procapet</h4>
          <div style={{marginRight:"25%"}}>
            <form className="w3-container">

              <label className="w3-label w3-text-blue"><b>Usuario</b></label>
              <input className="w3-input w3-border" type="text" />

              <label className="w3-label w3-text-blue"><b>Contraseña</b></label>
              <input className="w3-input w3-border" type="text" />

              <button className="w3-btn w3-blue">Entrar</button>

            </form>
            <br/>
          </div>
        </div>

      )
    }

});

module.exports = Procapet;
