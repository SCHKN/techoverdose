import React, { Component } from "react";
import { Segment, Icon, Label } from "semantic-ui-react";
import { fetchPosts } from "../../redux/repoReducers";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  fetchPosts: framework => dispatch(fetchPosts(framework, null))
});

class FrameworkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(framework) {
    this.props.fetchPosts(framework);
    this.props.handleScroll();
  }

  render() {
    const { fetchPosts, data, rank } = this.props;
    const { framework } = data;
    return (
      <Segment
        onClick={() => this.handleClick(framework)}
        textAlign="center"
        className="framework-info"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <Label attached="top" className={framework + "-label"}>
          {framework}
        </Label>
        <Icon name={framework} size="massive" className="framework-icon" />
        <Label
          attached="bottom"
          className={this.state.isHovered ? framework + "-label" : undefined}
        >
          <Icon name="trophy" className={"trophy-" + rank} /> Rank # {rank}
        </Label>
      </Segment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(FrameworkInfo);
