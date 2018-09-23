import React, { Component } from "react";
import { Button, Icon, Popup, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import topics from "../../configs/topics";
import { fetchPosts } from "../../redux/repoReducers";

const mapDispatchToProps = dispatch => ({
  fetchPosts: framework => dispatch(fetchPosts(framework, null))
});

class SearchPopup extends Component {
  render() {
    return (
      <Popup
        trigger={
          <Button icon>
            <Icon name="search" />
          </Button>
        }
        on="click"
      >
        <Dropdown
          placeholder="Search a topic"
          search
          selection
          options={topics.sort((a, b) => a.value >= b.value)}
          onChange={(e, { value }) => {
            this.props.fetchPosts(value);
          }}
        />
      </Popup>
    );
  }
}
export default connect(
  null,
  mapDispatchToProps
)(SearchPopup);
