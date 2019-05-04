import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderPost from './HeaderPost/index';
import './style.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <HeaderPost
          avatar={this.props.post.avatar}
          name={this.props.post.name}
          hour={this.props.post.hour}
        />
        <div className="hr" />
        <p>{this.props.post.text}</p>
      </div>
    );
  }
}

HeaderPost.propTypes = {
  post: PropTypes.objectOf({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
