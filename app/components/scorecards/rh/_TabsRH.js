var React = require('react');
import { Link} from 'react-router'
import Ades from './Ades'
import Adopta from './Adopta'
import Procapet from './Procapet'
import RevisionVertical from './RevisionVertical'
import Tops from './Tops'


var TabsRH = React.createClass({
  getInitialState(){
    return {
      dataTabs: []
    }
  },

  componentDidMount: function(){
      this.serverRequest = $.get('./js/data/seccionesRH.json', function(result){
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
              <a data-toggle="pill" href={"#tabRH_"+index}>
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
            <div id="tabRH_0" className="tab-pane fade in active">
              <br/>
              <Ades />
            </div>
            <div id="tabRH_1" className="tab-pane fade">
              <br/>
              <Adopta titulo="valor2" />
            </div>
            <div id="tabRH_2" className="tab-pane fade">
              <br/>
              <Procapet />
            </div>
            <div id="tabRH_3" className="tab-pane fade">
              <br/>
              <RevisionVertical />
            </div>
            <div id="tabRH_4" className="tab-pane fade">
              <br/>
              <Tops />
            </div>
          </div>

        </div>
      )
    }

});

module.exports = TabsRH;
