var React = require('react');

var Procapet = React.createClass({

    getInitialState(){
      return {
        isDisabledState :   true,
        optionButton : "Registrar Visita"
      }
    },

    handleAdd: function(e) {

      if(this.state.isDisabledState){ //INACTIVO
        this.setState({
          isDisabledState : false,
          optionButton : "Guardar Visita"
        });
      }else{//ACTIVO
        this.setState({
          isDisabledState : true,
          optionButton : "Editar Visita"
        });
      }

      var tempItem = {
          fechaProgramada: this.refs.inputFechaProgramada.value + ' ' +
            this.refs.inputHoraProgramada.value,
          nombreTienda: this.refs.inputNombreTienda.value,
          crTienda: this.refs.inputCrTienda.value,
          fechaVisita: this.refs.inputFechaVisita.value + ' ' +
            this.refs.inputHoraVisita.value,
          evidencia: this.refs.inputEvidencia.value,
          comentarios: this.refs.inputComentarios.value
      } //tempItem
      e.preventDefault();
      //this.props.addApt(tempItem);
    }, //handleAdd

    render(){
      var isDisabled = this.state.isDisabledState;

      return (
        <div>

          <div className="panel panel-primary">
            <div className="panel-heading apt-addheading">
            <span className="glyphicon glyphicon-plus"></span> Registrar Visita</div>
            <div className="panel-body">

              <form className="add-appointment form-horizontal"
              onSubmit={ this.handleAdd }>
                <fieldset disabled={isDisabled}>

                <div className="form-group">
                  <label className="col-sm-2 control-label" htmlFor="fechaProgramada">Fecha Programada</label>
                  <div className="col-sm-4">
                    <input type="date" className="form-control"
                    id="fechaProgramada" ref="inputFechaProgramada" />
                  </div>
                  <label className="col-sm-2 control-label" htmlFor="horaProgramada">Hora</label>
                  <div className="col-sm-4">
                    <input type="time" className="form-control"
                    id="horaProgramada" ref="inputHoraProgramada" />
                  </div>
                </div>

                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="nombreTienda">Nombre Tienda</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"
                        id="nombreTienda" ref="inputNombreTienda" placeholder="Nombre de la tienda" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="crTienda">CR Tienda</label>
                    <div className="col-sm-10">
                      <input type="text" className="form-control"
                        id="crTienda" ref="inputCrTienda" placeholder="CR de la tienda" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="fechaVisita">Fecha Visita</label>
                    <div className="col-sm-4">
                      <input type="date" className="form-control"
                      id="fechaVisita" ref="inputFechaVisita" />
                    </div>
                    <label className="col-sm-2 control-label" htmlFor="horaVisita">Hora</label>
                    <div className="col-sm-4">
                      <input type="time" className="form-control"
                      id="horaVisita" ref="inputHoraVisita" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="evidencia">Evidencia</label>
                    <div className="col-sm-10">
                      <input type="file" className="form-control"
                        id="evidencia" ref="inputEvidencia" placeholder="Ruta del archivo de evidencia" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="comentarios">Comentarios</label>
                    <div className="col-sm-10">
                      <textarea className="form-control" rows="4" cols="50"
                      id="comentarios" ref="inputComentarios" placeholder="Comentarios"></textarea>
                    </div>
                  </div>
                </fieldset>

                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button type="submit" className="btn btn-primary pull-right">{this.state.optionButton}</button>
                  </div>
                </div>

              </form>

            </div>
          </div>

        </div>

      )
    }

});


module.exports = Procapet;
