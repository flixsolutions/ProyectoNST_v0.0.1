var React = require('react');
import { Link} from 'react-router'

var Login = React.createClass({
    checkLogin: function(){

    },

    render(){
      return (
        <div>
          <div className="w3-row-padding" style={{borderWidth:"2px", borderStyle:"solid", borderColor:"green"}}>
            <div className="w3-half w3-container" style={{borderWidth:"2px", borderStyle:"solid", borderColor:"red"}}>
              <h2>w3-half</h2>
              <div id="topForm" className="w3-card-4 w3-margin col-xs-4" style={{margin: "0px auto", paddingLeft:"70px",  width: "90%", height: "470px"}}>
                <div  id="login_form" className="w3-half  parallelogram w3-card-2 w3-center" style={{ marginTop:"10px", width: "300px", borderWidth:"2px", borderStyle:"solid"}}>
                  <div className="row">
                    <div className="center">
                    <img src="../images/logo_femco.png" style={{padding: "30px"}} alt="FEMSA Comercio" className="w3-image" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">account_circle</i>
                      <input id="name" name="usuario" type="number" min="0" className="validate" required="" aria-required="true" />
                      <label htmlFor="name">No. Empleado</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <i className="material-icons prefix">lock_outline</i>
                      <input id="password2" name="password" type="password" className="validate" required="" aria-required="true" />
                      <label htmlFor="password2">Password</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <button href="/dashboard" className="w3-btn w3-round" style={{width: "100%", backgroundColor: "RGB(120,38,52)"}}>Entrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3-half w3-container" style={{borderWidth:"2px", borderStyle:"solid", borderColor:"red"}} >
              <h2>w3-half</h2>
              <div id="login_img" style={{margin: "0px auto", width:"100%", height: "470px", borderWidth:"2px", borderStyle:"solid"}} className="w3-half w3-container w3-hide-small w3-hide-medium w3-container w3-margin-top w3-padding-xxlarge">
                <img src="../images/front.png"  className="w3-round w3-hide-small w3-hide-medium w3-image" />
              </div>
            </div>
          </div>


        </div>
      )
    }

});

module.exports = Login;


//
// <div id="login_form" className="parallelogram col s12 w3-col w3-card-2 w3-container w3-padding-xxlarge" >
//
//
//   <div className="col s12 center">
//   <img src="../images/logo_femco.png" id="img_cf15_0" alt="FEMSA Comercio" className="w3-image" />
//   </div>
//   </div>
//
//   <div className="row">
//   <div className="input-field col s12">
//   <i className="material-icons prefix">account_circle</i>
//   <input id="name" name="usuario" type="number" min="0" className="validate" required="" aria-required="true" />
//   <label htmlFor="name">Número de Empleado</label>
//   </div>
//   </div>
//
//   <div className="row">
//   <div className="input-field col s12">
//   <i className="material-icons prefix">lock_outline</i>
//   <input id="password2" name="password" type="password" className="validate" required="" aria-required="true" />
//   <label htmlFor="password2">Password</label>
//   </div>
//   </div>
//
//   <div className="row">
//   <div className="input-field col s12">
//   <button href="#" className="w3-btn w3-round" id="button_cf15_0">Entrar</button>
//   </div>
//   </div>
//
//   <div id="login_img"  className="w3-rest w3-container w3-hide-small w3-hide-medium w3-container w3-margin-top w3-padding-xxlarge">
//   <img src="../images/front.png" className="w3-round w3-hide-small w3-hide-medium w3-image" />
//   </div>
//
//
// </div>
