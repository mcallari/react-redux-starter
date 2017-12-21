import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// application actions.
import { fetchApp } from '../actions';

class AppIndex extends Component {
  // dispatch the action.
  componentDidMount() {
    this.props.fetchApp();
  }

  render() {
    return (
      <div>
        <h3>Index Page</h3>
        <div>{this.props.newProp.message}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { newProp: state.app };
}

export default connect(mapStateToProps, { fetchApp })(AppIndex);
