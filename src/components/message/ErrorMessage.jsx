import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  errors: state.errors
});

class ErrorMessage extends Component {
  render() {
    const { errors } = this.props;
    return (
      <Message negative hidden={errors.length === 0} header='Oops! Something went wrong' list={this.props.errors} />
    );
  }
}

export default connect(mapStateToProps)(ErrorMessage);
