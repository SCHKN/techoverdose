import React from "react";
import { Menu, Icon, Responsive, Dropdown } from "semantic-ui-react";
import logo from "../../images/artist.png";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  data: state
});

const TopMenu = ({ data }) => {
  return (
    <Menu
      size="huge"
      borderless
      className={"top-menu " + data.category + "-menu"}
    >
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

export default connect(mapStateToProps)(TopMenu);
