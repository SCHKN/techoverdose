import React, { Component } from "react";
import RepoItem from "./RepoItem";
import { connect } from "react-redux";
import { Segment, Dimmer, Loader } from "semantic-ui-react";
import RedditPost from "./RedditPost";
import NoResultsItem from "./NoResultsItem";

const mapStateToProps = state => ({
  data: state
});

class RepoList extends Component {
  render() {
    const { data } = this.props;
    const matchingFramework = data.frameworks.find(f => {
      return f.framework === data.frameworkSelected;
    });
    return (
      <Segment
        loading={matchingFramework.isRepoFetching}
        className="results-segment animated fadeIn"
      >
        {(matchingFramework.repos &&
          (matchingFramework.repos.length === 0 &&
            !matchingFramework.isRepoFetching && <NoResultsItem />)) ||
          matchingFramework.repos.map(item => {
            if (data.dataSourceSelected === "github") {
              return (
                <RepoItem
                  repo={item}
                  key={item.id}
                  framework={data.frameworkSelected}
                />
              );
            } else {
              return <RedditPost post={item.data} />;
            }
          })}
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(RepoList);
