var React = require('react');

var Adopta = React.createClass({
    handleClick: function(){
      alert(this.props.titulo);
    },

    render(){
      return (
        <div>
          <form className="w3-container">

            <label className="w3-label w3-text-blue"><b>Usuario</b></label>
            <input ref="user" className="w3-input w3-border" type="text" />

            <label className="w3-label w3-text-blue"><b>Contraseña</b></label>
            <input ref="pass" className="w3-input w3-border" type="text" />

            <br/>
            <button className="w3-btn w3-blue" onClick={this.handleClick}>Entrar</button>

          </form>
        </div>

      )
    }

});

module.exports = Adopta;
