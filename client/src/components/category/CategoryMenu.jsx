import React from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import { connect } from "react-redux";
import { setCategoryAndFetchAll } from "../../redux/category/categoryReducer";
import SearchPopup from "../filtering/SearchPopup";

const mapDispatchToProps = dispatch => ({
  changeCategory: category => dispatch(setCategoryAndFetchAll(category))
});

const handleClick = (changeCategory, category) => {
  changeCategory(category);
};

const CategoryMenu = ({ changeCategory, handleScroll }) => {
  return (
    <Menu size="large">
      <Menu.Item header>Categories</Menu.Item>

      <Menu.Item
        name="paint brush"
        onClick={() => handleClick(changeCategory, "front")}
      >
        <Icon name="paint brush" />
        <Responsive {...Responsive.onlyComputer}>Front End</Responsive>
      </Menu.Item>

      <Menu.Item
        name="server"
        onClick={() => handleClick(changeCategory, "devops")}
      >
        <Icon name="server" />
        <Responsive {...Responsive.onlyComputer}>DevOps</Responsive>
      </Menu.Item>
      <Menu.Item name="idea" onClick={() => handleClick(changeCategory, "ml")}>
        <Icon name="idea" />
        <Responsive {...Responsive.onlyComputer}>Machine Learning</Responsive>
      </Menu.Item>
      <Menu.Item
        name="btc"
        onClick={() => handleClick(changeCategory, "crypto")}
      >
        <Icon name="btc" />
        <Responsive {...Responsive.onlyComputer}>Crypto</Responsive>
      </Menu.Item>
      <Responsive {...Responsive.onlyComputer}>
        <Menu.Item>
          <SearchPopup handleScroll={handleScroll} />
        </Menu.Item>
      </Responsive>
    </Menu>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CategoryMenu);
