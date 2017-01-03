var React = require('react');

var CumplimientoAnalisis = React.createClass({
	handleClick: function () {
		this.setState({editableRow: 'readwrite'});
  },
	getInitialState: function () {
		return {
			editableRow : "readwriteNO",
			dataDANs :
				[
					{
						check: "",
						title: "Adecuaciones SIV-SIV",
						folio: "I12345",
						cpn: "Susana Gaytán",
						analista: "Sofir Villarreal",
						cumplimiento: "100%"
					},
					{
						check: "",
						title: "Carga Diatia Diferenciando Direcciones",
						folio: "I23456",
						cpn: "Susana Gaytán",
						analista: "Sofir Villarreal",
						cumplimiento: "90%"
					},
					{
						check: "",
						title: "Reactivaciones en Automático",
						folio: "I45678",
						cpn: "Susana Gaytán",
						analista: "Félix Gálvez",
						cumplimiento: "100%"
					}
				] //data
		} //return
	}, //getInitialState

	render(){
		var filteredDANs = this.state.dataDANs;
		filteredDANs = filteredDANs.map(function (item, index) {
			return (
				<tr key={index}>
					<td><input type="checkbox"/></td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].title}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].folio}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].cpn}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].analista}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].cumplimiento}</td>
					<td><a onClick={this.handleClick}><i className="material-icons">mode_edit</i></a></td>
				</tr>
			) //return
		}.bind(this)); //filteredDANs.map
		return (
			<div>
				<table className="w3-table-all w3-hoverable">
					<thead>
						<tr>
							<th><input type="checkbox"/></th>
							<th>Title</th>
							<th>Folio de iniciativa</th>
							<th>CPN</th>
							<th>Analista de Negocio</th>
							<th>Cumpliiento</th>
							<th className="noBlank"> </th>
						</tr>
					</thead>
					<tbody>
						{filteredDANs}
					</tbody>
				</table>

			</div>
		)
	}

});

module.exports = CumplimientoAnalisis;
