import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class HeaderPost extends Component {
  render() {
    return (
      <div className="headerPost">
        <div>
          <img className="avatar" src={this.props.avatar} />
        </div>
        <div className="info">
          <span>{this.props.name}</span>
          <strong>{this.props.hour}</strong>
        </div>
      </div>
    );
  }
}

HeaderPost.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
};
