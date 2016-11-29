var React = require('react');

var RevisionVertical = React.createClass({
    getInitialState: function() {
      return {
        isChecked: true
      };
    },
    toggleChange: function() {
      this.setState({
        isChecked: !this.state.isChecked // flip boolean value
      }, function() {
        console.log(this.state);
      }.bind(this));
    },
    render(){
      return (
        <div>
          <div className="w3-container">
            <h4>Revisión Vertical</h4>

            <table className="w3-table w3-striped w3-bordered w3-responsive w3-small w3-card">
              <tbody>
                <tr>
                  <th>Estatus</th>
                  <th>Evidencia</th>
                </tr>
                <tr>
                  <td>
                      <input className="w3-check" type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange}/>
                      <label className="w3-validate"> 1er. Trimestre</label>
                  </td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <input className="w3-check" type="checkbox" />
                      <label className="w3-validate"> 2do. Trimestre</label>
                  </td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <input className="w3-check" type="checkbox"  />
                      <label className="w3-validate"> 3er. Trimestre</label>
                  </td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
                <tr>
                  <td>
                      <input className="w3-check" type="checkbox" />
                      <label className="w3-validate"> 4to. Trimestre</label>
                  </td>
                  <td><input className="w3-input" type="file"/></td>
                </tr>
              </tbody>
            </table>
            </div>
          <br/>
        </div>
      )
    }

});

module.exports = RevisionVertical;
