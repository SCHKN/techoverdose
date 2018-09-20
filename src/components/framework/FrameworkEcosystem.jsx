import React from "react";
import { Segment, List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/repoReducers";

const mapDispatchToProps = dispatch => ({
  fetchPosts: (framework, ecosystem) =>
    dispatch(fetchPosts(framework, ecosystem))
});

const FrameworkEcosystem = ({ ecosystem, framework, fetchPosts }) => {
  return (
    <Segment className="ecosystem-segment">
      <List horizontal>
        {ecosystem.map(library => (
          <List.Item
            className="ecosystem-item"
            onClick={() => fetchPosts(framework, library)}
            key={library}
          >
            <Image
              src={require("../../images/" + library + ".png")}
              size="mini"
            />
          </List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(FrameworkEcosystem);
