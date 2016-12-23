var React = require('react');

var RegDAN = React.createClass({
	handleClick: function () {
		this.props.handleToggle();
  },
	getInitialState: function () {
		return {
			editableRow : "readwriteNO",
			dataDANs :
				[
					{
						check: "",
						attach: "",
						title: "Adecuaciones SIV-SIV",
						folio: "I12345",
						cpn: "Susana Gaytán",
						analista: "Sofir Villarreal",
						costo: "$1'234,567",
						duracion: "300"
					},
					{
						check: "",
						attach: "",
						title: "Carga Diatia Diferenciando Direcciones",
						folio: "I23456",
						cpn: "Susana Gaytán",
						analista: "Sofir Villarreal",
						costo: "$234,567",
						duracion: "100"
					},
					{
						check: "",
						attach: "",
						title: "Reactivaciones en Automático",
						folio: "I45678",
						cpn: "Susana Gaytán",
						analista: "Félix Gálvez",
						costo: "$834,567",
						duracion: "200"
					}
				] //data
		} //return
	}, //getInitialState

	render(){
		var filteredDANs = this.state.dataDANs;
		var displayComponent = {
			display: this.props.bodyVisible ? 'block' :  'none'
		};
		filteredDANs = filteredDANs.map(function (item, index) {
			return (
				<tr key={index}>
					<td><input type="checkbox"/></td>
					<td className={this.state.editableRow}></td>
					<td className={this.state.editableRow}>
						<a data-toggle="pill" href={"#registroDAN_"+this.state.dataDANs[index].folio}>
							{this.state.dataDANs[index].title}
						</a>
					</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].folio}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].cpn}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].analista}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].costo}</td>
					<td className={this.state.editableRow}>{this.state.dataDANs[index].duracion}</td>
					<td><a onClick={this.handleClick}><i className="material-icons">mode_edit</i></a></td>
				</tr>
			) //return
		}.bind(this)); //filteredDANs.map
		return (
			<div style={displayComponent}>
				<table className="w3-table-all w3-hoverable">
					<thead>
						<tr>
							<th><input type="checkbox"/></th>
							<th className="noBlank"></th>
							<th>Title</th>
							<th>Folio de iniciativa</th>
							<th>CPN</th>
							<th>Analista de Negocio</th>
							<th>Costo DAN</th>
							<th>Duración Total</th>
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

module.exports = RegDAN;
