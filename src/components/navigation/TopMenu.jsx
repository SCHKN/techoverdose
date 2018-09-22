import React from "react";
import { Menu, Icon, Responsive, Dropdown } from "semantic-ui-react";
import logo from "../../images/artist.png";
import { connect } from "react-redux";
import { setCategoryAndFetchAll } from "../../redux/repoReducers";

const options = [
  { key: "front", text: "Front-End", value: "front", icon: "paint brush" },
  { key: "devops", text: "DevOps", value: "devops", icon: "server" },
  { key: "ml", text: "Machine Learning", value: "ml", icon: "idea" },
];

const mapStateToProps = state => ({
  data: state
});

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(setCategoryAndFetchAll(category))
});

const TopMenu = ({ changeCategory, data }) => {
  return (
    <Menu size="huge" borderless className={"top-menu " + data.category + "-menu"}>
      <Menu.Item>
        <img src={logo} />
      </Menu.Item>
      <Menu.Item className="brand">
        <div className="git-front">TechOverdose</div>
        <div className="brand-description">
          <p>Tech Aggregator for Tech Junkies</p>
        </div>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Dropdown
            button
            className="icon"
            floating
            labeled
            icon="world"
            options={options}
            search
            text="Choose category"
            onChange={(e, { value }) => {
              changeCategory(value);
            }}
          />
        </Menu.Item>
        <Menu.Item>
          <Responsive {...Responsive.onlyComputer}>
            <Icon name="code" />
          </Responsive>
        </Menu.Item>
        <Menu.Item>
          <Responsive {...Responsive.onlyComputer}>
            Built with <Icon name="heart" /> by{" "}
            <a href="https://github.com/SCHKN" className="schkn">
              SCHKN
            </a>
          </Responsive>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
