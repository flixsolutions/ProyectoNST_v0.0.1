var React = require('react');

var DanCotizacion = React.createClass({
  render(){
    return (
      <div className="DanCotizacion">
        <iframe width="100%" height="400px" src="https://app.powerbi.com/view?r=eyJrIjoiNTFiZTE3MjQtOGFiNi00NTM1LWJjMDgtOTI2Mzc3YzBkZjkwIiwidCI6IjY2ZjlhYjg1LWRlMWEtNDBkNC1iN2JiLTIxNTY1YWQ1N2NjZSIsImMiOjR9" frameBorder="0" allowFullScreen="true"></iframe>
      </div>
    )// return
  }// render
});

module.exports = DanCotizacion;