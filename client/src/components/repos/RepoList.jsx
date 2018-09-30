import React, { Component } from "react";
import RepoItem from "./RepoItem";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import RedditPost from "./RedditPost";
import NoResultsItem from "./NoResultsItem";
import SnippetItem from "./SnippetItem";

const mapStateToProps = state => ({
  repos: state.repos,
  dataSourceSelected: state.ui.dataSourceSelected,
  frameworkSelected: state.ui.frameworkSelected
});

class RepoList extends Component {
  render() {
    const { repos, dataSourceSelected, frameworkSelected } = this.props;
    const { items, fetching } = repos;
    return (
      <Segment loading={fetching} className="results-segment animated fadeIn">
        {(items && items.length === 0 && !fetching && <NoResultsItem />) ||
          items.map(item => {
            if (dataSourceSelected === "github") {
              return (
                <RepoItem
                  repo={item}
                  key={item.id}
                  framework={frameworkSelected}
                />
              );
            } else if (dataSourceSelected === "reddit") {
              return <RedditPost post={item.data} />;
            } else {
              return <SnippetItem snippet={item} />;
            }
          })}
      </Segment>
    );
  }
}

export default connect(mapStateToProps)(RepoList);
