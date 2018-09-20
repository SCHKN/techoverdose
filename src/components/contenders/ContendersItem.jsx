import React, { Component } from "react";
import { List, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/repoReducers";

const mapDispatchToProps = dispatch => ({
  fetchPosts: framework => dispatch(fetchPosts(framework, null))
});

class ContendersItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(framework) {
    this.props.fetchPosts(framework);
  }

  render() {
    const { framework } = this.props;
    return (
      <List.Item onClick={() => this.handleClick(framework)}>
        <Label as="a" image className="contender-label">
          <img src={require("../../images/" + framework + ".png")} />
          {framework}
        </Label>
      </List.Item>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ContendersItem);
