// ########## Import Dependencies Here ##########
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// ########## Import Screens Here ##########

// ########## Import Components Here ##########
import ReadMoreButton from './ReadMoreButton';

export default class JuniorSchool extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <section id="junior-school">
        <div className="top-section">
          <div className="wrapper">
            <h3 className="junior-school-heading">Data Scientist</h3>
            <p className="junior-school-description">about the Data Science course of itern buddy.</p>
            <ReadMoreButton
              align="center"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="wrapper">
            <div className="junior-school-gallery-container">
              <div className="junior-school-left-image" />
              <div className="junior-school-right-image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

JuniorSchool.propTypes = {
}