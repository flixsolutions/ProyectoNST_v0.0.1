var React = require('react');

var Ades = React.createClass({


    render(){
      return (
        <div>
          <div className="panel panel-primary">
            <div className="panel-heading apt-addheading">
            <span className="glyphicon glyphicon-plus"></span> Agenda de Desarrollo</div>
            <div className="panel-body">

              <table className="w3-table w3-striped w3-bordered w3-responsive w3-small w3-card">
                <thead>
                    <tr>
                    <th>Mes</th>
                    <th>% Planeado</th>
                    <th>% Completo</th>
                    <th>Estatus</th>
                    <th>Evidencia</th>
                    </tr>
                 </thead>
                <tbody>
                  <tr>
                    <td>
                        <label className="w3-validate"> Enero</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Febrero</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Marzo</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Abril</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Mayo</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Junio</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Julio</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Agosto</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Septiembre</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Octubre</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Noviembre</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                  <tr>
                    <td>
                        <label className="w3-validate"> Diciembre</label>
                    </td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><input className="w3-input" type="text"/></td>
                    <td><i className="fa fa-signal fa-fw w3-margin-right w3-large w3-text-green"></i></td>
                    <td><input className="w3-input" type="file"/></td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

      )
    }

});

module.exports = Ades;
