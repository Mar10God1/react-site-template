'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const PageHeader = require('../shared/header/index.jsx');
const PageFooter = require('../shared/footer/index.jsx');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollMiddle() {
    var scrollCoords = document.querySelector('.fakeData').offsetTop + 15;

    var i = window.scrollY;
    var int = setInterval(() => {
      window.scrollTo(0, i);
      i += 10;
      if (i >= scrollCoords) {
        clearInterval(int);
      }
    }, 7);
  }

  scrollTop() {
    var i = window.scrollY;
    var int = setInterval(() => {
      window.scrollTo(0, i);
      i -= 10;
      if (i <= -10) {
        clearInterval(int);
      }
    }, 7);
  }

  render() {
    return (
      <div>
        <div className="parallax">
          <div className="mainContent">
            <div className="mainContent__headerImg">
            </div>
            <div className="mainContent__headline">
              <h2>Matt Viteri</h2>
              <h3>Software Engineer & Dog Dad</h3>
            </div>
            <div className="mainContent__social">
              <i className="fa fa-github fa-2x"></i>
              <i className="fa fa-linkedin fa-2x"></i>
              <i className="fa fa-codepen fa-2x"></i>
            </div>
          </div>
          <div className="bottom">
            <a><span className="white glyphicon glyphicon-chevron-down" aria-hidden="true" onClick={this.scrollMiddle}></span></a>
          </div>
        </div>
        <div className="fakeData">
          <div className="bottom">
            <a><span className="black glyphicon glyphicon-chevron-up" aria-hidden="true" onClick={this.scrollTop}></span></a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
