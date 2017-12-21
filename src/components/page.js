import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// application actions.
import { fetchPage } from '../actions';

class Page extends Component {
  // dispatch the action.
  componentDidMount() {
    this.props.fetchPage();
  }

  render() {
    return (
      <div>
        <h3>Page</h3>
        <div>{this.props.newProp.text}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { newProp: state.app };
}

export default connect(mapStateToProps, { fetchPage })(Page);
