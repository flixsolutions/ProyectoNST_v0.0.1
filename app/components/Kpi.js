var React = require('react');
import Body from './parts/Body'

var Kpi = React.createClass({

    render(){
      return (
        <div>
          <div className="w3-row">

            <div className="w3-third w3-padding-tiny">
              <p className="w3-large w3-text-teal"><b><i className="fa fa-area-chart fa-fw w3-margin-right w3-text-teal"></i>Salud de Proyectos</b></p>
              <p>Proyecto 1</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"90%"}}>
                  <div className="w3-center w3-text-white">90%</div>
                </div>
              </div>
              <p>Proyecto 2</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"80%"}}>
                  <div className="w3-center w3-text-white">80%</div>
                </div>
              </div>
              <p>Proyecto 3</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"75%"}}>
                  <div className="w3-center w3-text-white">75%</div>
                </div>
              </div>
              <p>Proyecto 4</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"50%"}}>
                  <div className="w3-center w3-text-white">50%</div>
                </div>
              </div>
              <br/>
            </div>

            <div className="w3-third w3-padding-tiny">
              <p className="w3-large  w3-text-teal"><b><i className="fa fa-legal fa-fw w3-margin-right w3-text-teal"></i>STTI</b></p>
              <p>DAN</p>
              <div className="w3-progress-container w3-round-xlarge">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"100%"}}></div>
              </div>
              <p>Análisis</p>
              <div className="w3-progress-container w3-round-xlarge">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"55%"}}></div>
              </div>
              <p>Cotización</p>
              <div className="w3-progress-container w3-round-xlarge">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"25%"}}></div>
              </div>
              <br/>
            </div>

            <div className="w3-third w3-padding-tiny">
              <p className="w3-large  w3-text-teal"><b><i className="fa fa-star fa-fw w3-margin-right w3-text-teal"></i>RH</b></p>
              <p>Adopta una tienda</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"90%"}}>
                  <div className="w3-center w3-text-white">90%</div>
                </div>
              </div>
              <p>ADES</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"80%"}}>
                  <div className="w3-center w3-text-white">80%</div>
                </div>
              </div>
              <p>TOPS</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"75%"}}>
                  <div className="w3-center w3-text-white">75%</div>
                </div>
              </div>
              <p>RV</p>
              <div className="w3-progress-container w3-round-xlarge w3-small">
                <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"50%"}}>
                  <div className="w3-center w3-text-white">50%</div>
                </div>
              </div>
              <br/>
            </div>

          </div>







        </div>
      )
    }

});

module.exports = Kpi;
