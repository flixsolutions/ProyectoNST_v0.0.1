var React = require('react');

var NotFound = React.createClass({

    render(){
      return (
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img src="/images/person.png" style={{width:"100%", height:"50%"}} alt="Avatar"/>
            <div className="w3-display-bottomleft w3-container w3-text-black">
              <h2>Susana Gaytán</h2>
            </div>
          </div>
          <div className="w3-container">
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>London, UK</p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>ex@mail.com</p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>1224435534</p>
            <hr/>

            <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
            <p>Adobe Photoshop</p>
            <div className="w3-progress-container w3-round-xlarge w3-small">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"90%"}}>
                <div className="w3-center w3-text-white">90%</div>
              </div>
            </div>
            <p>Photography</p>
            <div className="w3-progress-container w3-round-xlarge w3-small">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"80%"}}>
                <div className="w3-center w3-text-white">80%</div>
              </div>
            </div>
            <p>Illustrator</p>
            <div className="w3-progress-container w3-round-xlarge w3-small">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"75%"}}>
                <div className="w3-center w3-text-white">75%</div>
              </div>
            </div>
            <p>Media</p>
            <div className="w3-progress-container w3-round-xlarge w3-small">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"50%"}}>
                <div className="w3-center w3-text-white">50%</div>
              </div>
            </div>
            <br/>

            <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
            <p>English</p>
            <div className="w3-progress-container w3-round-xlarge">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"100%"}}></div>
            </div>
            <p>Spanish</p>
            <div className="w3-progress-container w3-round-xlarge">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"55%"}}></div>
            </div>
            <p>German</p>
            <div className="w3-progress-container w3-round-xlarge">
              <div className="w3-progressbar w3-round-xlarge w3-teal" style={{width:"25%"}}></div>
            </div>
            <br/>
          </div>
        </div>

      )
    }

});

module.exports = NotFound;
