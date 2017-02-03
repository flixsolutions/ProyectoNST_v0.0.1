var React = require('react');
import Body from './parts/Body'

var Kpi = React.createClass({
    render(){
      return (
        <div className="Kpi">                    
          <iframe width="100%" height="400px" src="https://app.powerbi.com/view?r=eyJrIjoiYzEyZjA0M2ItODQyMS00ODMwLThiZGUtMjlmM2M5ZDYyMzU1IiwidCI6IjY2ZjlhYjg1LWRlMWEtNDBkNC1iN2JiLTIxNTY1YWQ1N2NjZSIsImMiOjR9" frameBorder="0" allowFullScreen="true"></iframe>
        </div>
      )// return
    }// render
});

module.exports = Kpi;
