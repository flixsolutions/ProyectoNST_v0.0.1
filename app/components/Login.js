var React = require('react');
import {createBrowserHistory} from 'history/lib/createBrowserHistory'
import { Link} from 'react-router'

var Login = React.createClass({
    onSubmit(){      
      var user = this.refs.userRef.value;
      var password = this.refs.passwordRef.value;
      this.props.checkLogin(user,password);
    },
    componentDidMount(){

    },//componentDidMount
    render(){
      return (
        <div className="Login">
              <div className="w3-card-2 w3-row w3-padding-large">
                <div  className="w3-card-2 w3-center w3-third">
                  <div className="row w3-padding-large">
                    <img src="../images/logo_femco.png" alt="FEMSA Comercio" className="w3-image" />
                  </div>
                  <div className="row w3-padding-large">
                    <div className="input-field">
                      <i className="material-icons prefix">account_circle</i>
                      <input id="user" name="user" type="text"  ref="userRef" className="validate" required="" aria-required="true" style={{textAlign:"center"}} value="susana.gaytan@oxxo.com" />
                      <label htmlFor="user">Empleado</label>
                    </div>
                  </div>
                  <div className="row w3-padding-large">
                    <div className="input-field">
                      <i className="material-icons prefix">lock_outline</i>
                      <input id="password" name="password" type="password" ref="passwordRef" className="validate" required="" aria-required="true" style={{textAlign:"center"}} />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row w3-padding-large">
                      <button onClick={this.onSubmit} className="w3-btn w3-round" style={{width:"100%", backgroundColor: "RGB(120,38,52)"}}>Entrar</button>
                  </div>
                </div>
                <div className="w3-rest w3-hide-small w3-padding-large">
                  <img src="../images/front.png"  className="w3-round w3-image" />
                </div>
              </div>
        </div>
    )// return
  }// render
});

module.exports = Login;