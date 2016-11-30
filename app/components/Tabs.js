var React = require('react');
import { Link} from 'react-router'
import Kpi from './Kpi'
import Proyectos from './scorecards/proyectos/Proyectos'
import TabsRH from './scorecards/rh/_TabsRH'
import TabsSTTI from './scorecards/stti/_TabsSTTI'


var Tabs = React.createClass({
  getInitialState(){
    return {
      dataTabs: []
    }
  },

  componentDidMount: function(){
      this.serverRequest = $.get('./js/data/secciones.json', function(result){
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
              <a data-toggle="pill" href={"#Tab_"+index}>
                <i className={"w3-margin-right fa fa-" + this.state.dataTabs[index].seccion_icon}></i>
                {this.state.dataTabs[index].seccion_nombre}
                </a>
            </li>
          )//return
      }.bind(this));//filteredDataTabs

      return (
        <div className="w3-padding w3-white w3-card-4">
          <ul className="nav nav-pills">
            {filteredDataTabs}
          </ul>

          <div className="tab-content">
            <div id="Tab_0" className="tab-pane fade in active">
              <br/>
              <Kpi />
            </div>
            <div id="Tab_1" className="tab-pane fade">
              <br/>
              <TabsSTTI />
            </div>
            <div id="Tab_2" className="tab-pane fade">
              <br/>
              <TabsRH />
            </div>
            <div id="Tab_3" className="tab-pane fade">
              <br/>
              <Proyectos />
            </div>
          </div>

        </div>
      )
    }

});

module.exports = Tabs;
