var React = require('react');

var Tops = React.createClass({


    render(){
      return (
        <div>
            <table className="w3-table w3-striped w3-bordered w3-responsive w3-small w3-card">
              <thead>
                  <tr>
                  <th>Mes</th>
                  <th>Fecha Programada</th>
                  <th>Estatus</th>
                  <th>Evidencia</th>
                  </tr>
               </thead>
              <tbody>
                <tr>
                  <td>
                      <label className="w3-validate"> Enero</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-green"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Febrero</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-green"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Marzo</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-green"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Abril</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-green"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Mayo</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Junio</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-red"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Julio</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Agosto</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Septiembre</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Octubre</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Noviembre</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <label className="w3-validate"> Diciembre</label>
                  </td>
                  <td><input className="w3-input" type="date"/></td>
                  <td><i className="fa fa-signal w3-large w3-text-yellow"></i></td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
              </tbody>
            </table>
        </div>

      )
    }

});


module.exports = Tops;
