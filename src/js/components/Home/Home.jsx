import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hero from '../hero/HeroImage';
import Promo from '../promo/Promo';
import Calender from '../calender/Calender';
import Blog from '../Whatshappen/Blog';
import * as actions from '../../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    const { getPromoAction } = this.props;
    getPromoAction();
  }

  componentDidMount() {}
  render() {
    // const { style } = this.props;

    return (
      <div className="Home">
        <Hero style={'hero-image'} />
        <Promo />
        <Calender />
        <Blog />
      </div>
    );
  }
}

Home.propTypes = {
  // style: PropTypes.isRequired,
  getPromoAction: PropTypes.func.isRequired
};

// function mapStateToProps(state) {
//   return {
//     test: state.test
//   };
// };

export default connect(null, { getPromoAction: actions.getPromoAction })(Home);
