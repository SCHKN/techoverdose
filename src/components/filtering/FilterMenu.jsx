import React from "react";
import {
  Menu,
  Header,
  Icon,
  Dropdown,
  Button,
  Responsive
} from "semantic-ui-react";
import { connect } from "react-redux";
import {
  setFilterAndFetchPosts,
  setDatasourceAndFetchPosts
} from "../../redux/repoReducers";
import { showEcosystems } from "../../redux/repoActions";
import { hideEcosystems } from "./../../redux/repoActions";
import SearchPopup from "./SearchPopup";

const options = [
  {
    key: "today",
    text: "today",
    value: "today",
    content: "Today"
  },
  {
    key: "week",
    text: "this week",
    value: "week",
    content: "This Week"
  },
  {
    key: "month",
    text: "this month",
    value: "month",
    content: "This Month"
  },
  {
    key: "year",
    text: "this year",
    value: "year",
    content: "This Year"
  }
];

const dataSourceOptions = [
  {
    key: "github",
    text: "GitHub",
    value: "github",
    content: "GitHub"
  },
  {
    key: "reddit",
    text: "Reddit",
    value: "reddit",
    content: "Reddit"
  }
];

const mapStateToProps = state => ({
  ecosystemVisible: state.showEcosystems,
  frameworkSelected: state.frameworkSelected,
  ecosystemSelected: state.ecosystemSelected,
  dataSourceSelected: state.dataSourceSelected,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(setFilterAndFetchPosts(filter)),
  showEcosystems: () => dispatch(showEcosystems()),
  hideEcosystems: () => dispatch(hideEcosystems()),
  changeDatasource: datasource =>
    dispatch(setDatasourceAndFetchPosts(datasource))
});

const FilterMenu = ({
  changeFilter,
  changeDatasource,
  showEcosystems,
  hideEcosystems,
  ecosystemVisible,
  frameworkSelected,
  ecosystemSelected,
  dataSourceSelected,
  filter
}) => {
  return (
    <Menu size="large">
      <Responsive minWidth="768">
        <Menu.Item>
          <Icon name="eye" />{" "}
          {"Currently watching " +
            frameworkSelected +
            (ecosystemSelected ? " with ecosystem " + ecosystemSelected : "") +
            " on " +
            dataSourceSelected}
        </Menu.Item>
      </Responsive>
      <Menu.Menu position="right">
        <Responsive>
          <Menu.Item>
            <Header as="h4">
              <Icon name={dataSourceSelected} />
              <Header.Content>
                Datasource{" "}
                <Dropdown
                  inline
                  header="Choose your datasource"
                  options={dataSourceOptions}
                  defaultValue={dataSourceOptions[0].value}
                  onChange={(e, { value }) => {
                    changeDatasource(value);
                  }}
                />
              </Header.Content>
            </Header>
          </Menu.Item>
        </Responsive>
        {dataSourceSelected === "github" && (
          <Responsive>
            <Menu.Item>
              <Header as="h4">
                <Icon name="line graph" />
                <Header.Content>
                  Trending repos{" "}
                  <Dropdown
                    inline
                    header="Adjust time span"
                    options={options}
                    defaultValue={filter}
                    onChange={(e, { value }) => changeFilter(value)}
                  />
                </Header.Content>
              </Header>
            </Menu.Item>
          </Responsive>
        )}
        <Responsive>
          <Menu.Item>
            <Button
              content={ecosystemVisible ? "Hide Ecosystems" : "Show Ecosystems"}
              onClick={() => {
                ecosystemVisible ? hideEcosystems() : showEcosystems();
              }}
              size="mini"
              className="ecosystem-button"
            />
          </Menu.Item>
        </Responsive>
        {/* <Menu.Item>
          <SearchPopup />
        </Menu.Item> */}
      </Menu.Menu>
    </Menu>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMenu);
