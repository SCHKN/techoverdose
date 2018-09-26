import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import topics from "../../configs/topics";
import { fetchPosts } from "../../redux/repos/reposReducer";
import { setDatasource } from "../../redux/ui/uiActions";

const mapDispatchToProps = dispatch => ({
  fetchPosts: framework => dispatch(fetchPosts(framework, null)),
  setDatasource: datasource => dispatch(setDatasource(datasource))
});

class SearchPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    if (value !== this.state.dropdownValue) {
      this.setState({
        dropdownValue: value
      });
      this.props.setDatasource("github");
      this.props.fetchPosts(value);
      this.props.handleScroll();
    }
  }

  render() {
    return (
      <Dropdown
        placeholder="Search a topic"
        search
        selection
        options={topics.sort((a, b) => a.value >= b.value)}
        onChange={(e, { value }) => {
          this.handleChange(value);
        }}
      >
      </Dropdown>
    );
  }
}
export default connect(
  null,
  mapDispatchToProps
)(SearchPopup);
