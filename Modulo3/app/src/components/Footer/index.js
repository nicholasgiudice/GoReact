import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Footer = ({ count }) => <p>Você tem {count} Favoritos</p>;

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.length,
});

export default connect(mapStateToProps)(Footer);