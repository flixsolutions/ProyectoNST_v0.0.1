var React = require('react');
import Body from './parts/Body'

var Kpi = React.createClass({

    render(){
      return (
        <div>
          <svg width="400" height="450">
            <defs>
              <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
                <image x="0" y="0" width="512" height="512" src="../images/person.png"></image>
              </pattern>
            </defs>
            <circle className="uno" r="100" cx="200" cy="225" />
            <circle className="dos" r="100" cx="200" cy="225" />
            <circle className="tres" r="100" cx="200" cy="225"/>
            <circle className="cuatro" r="100" cx="200" cy="225"/>
          </svg>
        </div>
      )
    }

});

module.exports = Kpi;
