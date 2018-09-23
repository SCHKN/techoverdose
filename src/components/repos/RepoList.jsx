import React, { Component } from "react";
import RepoItem from "./RepoItem";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import RedditPost from "./RedditPost";
import NoResultsItem from "./NoResultsItem";

const mapStateToProps = state => ({
  data: state
});

class RepoList extends Component {
  render() {
    const { data } = this.props;
    const { repos, repoFetching } = data;
    return (
      <Segment
        loading={repoFetching}
        className="results-segment animated fadeIn"
      >
        {(repos && repos.length === 0 && !repoFetching && <NoResultsItem />) ||
          repos.map(item => {
            if (data.dataSourceSelected === "github") {
              return (
                <RepoItem
                  repo={item}
                  key={item.id}
                  framework={data.frameworkSelected}
                />
              );
            } else {
              return <RedditPost post={item.data} key={item.id} />;
            }
          })}
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(RepoList);
