var React = require('react');

import RegDAN from './RegDAN'
import EditDAN from './EditDAN'

var ContainerDAN = React.createClass({
  getInitialState: function () {
    return{
      editDANVisible: false,
      regDANVisible: true,
    };
  },

  showComponent: function (){
    var tempEditVisibility = !this.state.editDANVisible;
    var tempRegVisibility = !this.state.regDANVisible;
    this.setState({
      editDANVisible: tempEditVisibility,
      regDANVisible: tempRegVisibility
    })
  },

  render(){
    return(
      <div>
        <RegDAN
          bodyVisible = {this.state.regDANVisible}
          handleToggle = {this.showComponent}
        />
        <EditDAN
          bodyVisible = {this.state.editDANVisible}
          handleToggle = {this.showComponent}
        />
      </div>
    )
  }
});

module.exports = ContainerDAN;
