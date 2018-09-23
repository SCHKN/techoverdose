import React, { Component } from "react";
import RepoList from "./components/repos/RepoList";
import { Container, Grid, Divider } from "semantic-ui-react";
import FrameworkGrid from "./components/framework/FrameworkGrid";
import TopMenu from "./components/navigation/TopMenu";
import ErrorMessage from "./components/message/ErrorMessage";
import FilterMenu from "./components/filtering/FilterMenu";
import favicon from "./assets/favicon.ico";
import ReactGA from "react-ga";
import FeaturesMessage from "./components/message/FeaturesMessage";
import ReactDOM from "react-dom";
import ContendersSegment from './components/contenders/ContendersSegment';
import CategoryMenu from './components/category/CategoryMenu';

// ReactGA.initialize('UA-125805120-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(props) {
    super(props);
    this.propRef = React.createRef();
    this.handleScrollToElement = this.handleScrollToElement.bind(this);
  }

  handleScrollToElement() {
    const domNode = ReactDOM.findDOMNode(this.propRef.current);
    domNode.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div>
        <TopMenu />
        <Grid className="main-grid">
          <Grid.Column>
            <Container>
              <CategoryMenu />
              {/* <FeaturesMessage /> */}
              <Divider horizontal onClick={this.handleScrollToElement}>
                Frameworks
              </Divider>
              <FrameworkGrid handleScroll={this.handleScrollToElement} />
              <ContendersSegment />
              <Divider horizontal>Results</Divider>
              <ErrorMessage />
              <FilterMenu ref={this.propRef} />
              <RepoList />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
