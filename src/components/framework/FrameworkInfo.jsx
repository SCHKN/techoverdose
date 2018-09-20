import React, { Component } from "react";
import { Segment, Icon, Label, Image } from "semantic-ui-react";
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
    const { fetchPosts, data, rank, category } = this.props;
    const { framework } = data;
    return (
      <Segment
        onClick={() => this.handleClick(framework)}
        textAlign="center"
        className="framework-info"
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <Label attached="top" className={framework + "-label white-text"}>
          {framework}
        </Label>
        <Image
          src={require("../../images/" + category + "/" + framework + ".png")}
          size="small"
          centered
          className="framework-image"
        />
        <Label
          attached="bottom"
          className={this.state.isHovered ? framework + "-label white-text" : undefined}
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
