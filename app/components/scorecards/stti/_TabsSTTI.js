var React = require('react');
import { Link} from 'react-router'
import RegDAN from './RegDAN'
import EditDAN from './EditDAN'
import ContainerDAN from './ContainerDAN'
import RegQuot from './RegQuot'
import CumplimientoAnalisis from './CumplimientoAnalisis'
import DanCotizacion from './DanCotizacion'


var TabsSTTI = React.createClass({
  getInitialState(){
    return {
      dataTabs: []
    }//return
  },//getInitialState

  componentDidMount: function(){
      this.serverRequest = $.get('./js/data/seccionesSTTI.json', function(result){
        var tempDataTabs = result;
        this.setState({
          dataTabs: tempDataTabs
        });//setState
        // console.log(this.state);
      }.bind(this));//getdataTabs

  },//componentDidMount

    componentWillUnmount: function(){
        this.serverRequest.abort();
    },//componentDidMount

    render(){

      var filteredDataTabs = this.state.dataTabs;
      filteredDataTabs = filteredDataTabs.map(function(item,index){
          return(
           <li className={index==0?"active": null}  key={index}>
              <a data-toggle="pill" href={"#tabSTTI_"+index}>
                {this.state.dataTabs[index].subSeccion_nombre}
                </a>
            </li>
          )//return
      }.bind(this));//filteredDataTabs

      return (
        <div className="w3-padding w3-white w3-card-4">

          <ul className="w3-navbar w3-card-2 w3-light-grey nav-pills">
            {filteredDataTabs}
          </ul>

          <div className="tab-content">
            <div id="tabSTTI_0" className="tab-pane fade in active">
              <ContainerDAN/>
              <br/>
            </div>
            <div id="tabSTTI_1" className="tab-pane fade">
              <RegQuot/>
              <br/>
            </div>
            <div id="tabSTTI_2" className="tab-pane fade">
              <DanCotizacion/>
              <br/>
            </div>
            <div id="tabSTTI_3" className="tab-pane fade">
              <CumplimientoAnalisis/>
              <br/>
            </div>
            <div id="tabSTTI_4" className="tab-pane fade">
              <br/>
            </div>
          </div>

        </div>
      )
    }

});

module.exports = TabsSTTI;
