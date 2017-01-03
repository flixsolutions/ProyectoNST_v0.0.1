var React = require('react');

var EditDAN = React.createClass({
	handleClick: function () {
		this.props.handleToggle();
  },
	getInitialState: function () {
		return {
			editableRow : "readwriteNO",
			dataDANs :
				[
					{
						titulo: "Adecuaciones SIV-SIV",
						folio: "I12345",
						lider: "Jéssica Barajas",
						cpn: "Susana Gaytán",
						analista: "Sofir Villarreal",
						ventanaAnio: "2015",
						ventanaMes: "2",
						etapa:"Entrega DAN",
						estatus: "Aprobado",
						fases: [
							{ nombre: "Análisis"}, {nombre: "Diseño"},{nombre: "Construcción"}, {nombre: "Pruebas"}, {nombre: "implementación"},
								{nombre: "Infra"}, {nombre: "Soporte"}, {nombre: "Administración"}
						],
						plataformas: [
							{ nombre: "Web",
								fases: [
									{ fase: "Análisis", horas: "10", costo: "$80,000.00" },
									{ fase: "Diseño", horas: "10", costo: "$80,000.00" },
									{ fase: "Construcción", horas: "10", costo: "$80,000.00" },
									{ fase: "Pruebas", horas: "10", costo: "$80,000.00" },
									{ fase: "Implementación", horas: "10", costo: "$80,000.00" },
									{ fase: "Infra", horas: "10", costo: "$80,000.00" },
									{ fase: "Soporte", horas: "10", costo: "$80,000.00" },
									{ fase: "Administración", horas: "10", costo: "$80,000.00" }
							]
						},
						{
							nombre: "Workflows",
							fases: [
								{ fase: "Análisis", horas: "10", costo: "$80,000.00" },
								{ fase: "Diseño", horas: "10", costo: "$80,000.00" },
								{ fase: "Construcción", horas: "10", costo: "$80,000.00" },
								{ fase: "Pruebas", horas: "10", costo: "$80,000.00" },
								{ fase: "Implementación", horas: "10", costo: "$80,000.00" },
								{ fase: "Infra", horas: "10", costo: "$80,000.00" },
								{ fase: "Soporte", horas: "10", costo: "$80,000.00" },
								{ fase: "Administración", horas: "10", costo: "$80,000.00" }
							]
						}
						],
						totFase: "",
						totHrs: "500",
						totCosto: "$567,347.00",
						totSemanas: "20",
						comentarios: "Comentarios y más comentarios",
						attachments: ""
					}
				] //data
		}//return
	}, //getInitialState

	render(){
		var displayComponent = {
			display: this.props.bodyVisible ? "block" :  "none"
		};
		var curDAN = this.state.dataDANs;
		var titulo = curDAN.map(function(item) {return(this.state.dataDANs[0].titulo)}.bind(this));
		var folio = curDAN.map(function(item) {return(this.state.dataDANs[0].folio)}.bind(this));
		var lider = curDAN.map(function(item) {return(this.state.dataDANs[0].lider)}.bind(this));
		var cpn = curDAN.map(function(item) {return(this.state.dataDANs[0].cpn)}.bind(this));
		var analista = curDAN.map(function(item) {return(this.state.dataDANs[0].analista)}.bind(this));
		var ventanaAnio = curDAN.map(function(item) {return(this.state.dataDANs[0].ventanaAnio)}.bind(this));
		var ventanaMes = curDAN.map(function(item) {return(this.state.dataDANs[0].ventanaMes)}.bind(this));
		var etapa = curDAN.map(function(item) {return(this.state.dataDANs[0].etapa)}.bind(this));
		var estatus = curDAN.map(function(item) {return(this.state.dataDANs[0].estatus)}.bind(this));

		//desgloses por fases
		var fases = this.state.dataDANs[0].fases;
		fases = fases.map(function (item, index) {
				return (
					<th key={index}>{ this.state.dataDANs[0].fases[index].nombre }</th>
				)
				}.bind(this)

			)

		var plataformas = this.state.dataDANs[0].plataformas;
		var fss = this.state.dataDANs[0].plataformas.fases;
		plataformas = plataformas.map(function (item, index) {
			return (
				<td key={index}> {this.state.dataDANs[0].plataformas[index].nombre}</td>
			)
		}.bind(this)

		)





		var totFase = curDAN.map(function(item) {return(this.state.dataDANs[0].totFase)}.bind(this));
		var totHrs = curDAN.map(function(item) {return(this.state.dataDANs[0].totHrs)}.bind(this));
		var totCosto = curDAN.map(function(item) {return(this.state.dataDANs[0].totCosto)}.bind(this));
		var totSemanas = curDAN.map(function(item) {return(this.state.dataDANs[0].totSemanas)}.bind(this));
		var comentarios = curDAN.map(function(item) {return(this.state.dataDANs[0].comentarios)}.bind(this));
		var attachments = curDAN.map(function(item) {return(this.state.dataDANs[0].attachments)}.bind(this));
		return (
			<div style={displayComponent}>
				<table className="w3-table-all w3-hoverable">
					<tbody>
						<tr>
							<td className="w3-third">Título</td>
							<td className="w3-twothird">{titulo}</td>
						</tr>
						<tr>
							<td  className="w3-third">Folio de iniciativa</td>
							<td className="w3-twothird">{folio}</td>
						</tr>
						<tr>
							<td  className="w3-third">Líder de iniciativa</td>
							<td className="w3-twothird">{lider}</td>
						</tr>
						<tr>
							<td  className="w3-third">CPN</td>
							<td className="w3-twothird">{cpn}</td>
						</tr>
						<tr>
							<td  className="w3-third">Analista de Negocio</td>
							<td className="w3-twothird">{analista}</td>
						</tr>
						<tr>
							<td  className="w3-third">Ventana</td>
							<td className="w3-twothird">Año: {ventanaAnio} &emsp;	&emsp;			Mes: {ventanaMes}</td>
						</tr>
						<tr>
							<td  className="w3-third">Iniciativa</td>
							<td className="w3-twothird">Etapa: {etapa}	 &emsp; &emsp;					Estatus: {estatus}</td>
						</tr>
						<tr>
							<td  className="w3-third">Desglose de esfuerzo y costo</td>

						</tr>
						<tr>
							<td className="w3-twothird" colspan="2">
								<table className="w3-table-all w3-hoverable">
									<thead>
										<tr>
											<th> &nbsp; </th>
											{fases}

										</tr>
									</thead>
									<tbody>


										<tr>
											<td>EBS</td>
										</tr>
										<tr>
											<td>RMS</td>
										</tr>
										<tr>
											<td>Integración</td>
										</tr>
										<tr>
											<td>Workflows</td>
										</tr>
										<tr>
											<td>POS</td>
										</tr>
										<tr>
											<td>xPOS</td>
										</tr>
										<tr>
											<td>BI</td>
										</tr>
										<tr>
											<td>RDM</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td  className="w3-third">Estimación total por fase</td>
							<td className="w3-twothird">xxxxxx</td>
						</tr>
						<tr>
							<td  className="w3-third">Estimación total horas</td>
							<td className="w3-twothird">{totHrs}</td>
						</tr>
						<tr>
							<td  className="w3-third">Estimación total costo</td>
							<td className="w3-twothird">{totCosto}</td>
						</tr>
						<tr>
							<td  className="w3-third">Duración estimada (semanas)</td>
							<td className="w3-twothird">{totSemanas}</td>
						</tr>
						<tr>
							<td  className="w3-third">Comentarios</td>
							<td className="w3-twothird">{comentarios}</td>
						</tr>
						<tr>
							<td  className="w3-third">Attachments</td>
							<td className="w3-twothird">{	attachments}</td>
						</tr>
					</tbody>
				</table>
				<br/>
				<button onClick={this.handleClick} className="w3-btn w3-blue">Guardar</button>
				&nbsp;
				<button onClick={this.handleClick} className="w3-btn w3-blue">Cancelar</button>
			</div>
		)
	}

});

module.exports = EditDAN;
