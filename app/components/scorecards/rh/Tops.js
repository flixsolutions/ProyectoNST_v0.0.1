var React = require('react');

var Tops = React.createClass({
    getInitialState: function() {
      return {
        semestre1TopSelected: true,
        semestre2TopSelected: false
      };
    },

    handleChange: function(e) {
      var selected = false;

      if (e.currentTarget.id === "semestre1"){
        selected = true;
      }else{
        selected = false;
      }
      this.setState({
        semestre1TopSelected: selected,
        semestre2TopSelected: !selected

      }, function() {
        console.log(this.state);
      }.bind(this));
    },

    render(){
      return (
        <div>
          <div className="w3-container">
            <div className="w3-row">
              <div className="w3-half">
                <h4>Juntas TOPS</h4>
              </div>
              <div className="w3-half w3-right-0">
                <input id="semestre1" className="w3-radio" type="radio" name="tops_rdo" onChange={this.handleChange} defaultChecked/>
                <label className="w3-validate"> 1er. Semestre</label>
                <input id="semestre2" className="w3-radio" type="radio" name="tops_rdo" onChange={this.handleChange}/>
                <label className="w3-validate"> 2do. Semestre</label>
              </div>
            </div>
            <br/>
            <table id="semestre1_tbl"  className="w3-table w3-striped w3-bordered w3-responsive w3-small w3-card"
                    style={{display: this.state.semestre1TopSelected ? 'block' : 'none'}}>
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
              </tbody>
            </table>

            <table id="semestre2_tbl" className="w3-table w3-striped w3-bordered w3-responsive w3-small w3-card"
                    style={{display: this.state.semestre1TopSelected ? 'none' : 'block'}}>
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

        </div>

      )
    }

});


module.exports = Tops;
