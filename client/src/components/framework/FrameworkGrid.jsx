import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FrameworkItem from "./FrameworkItem";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  frameworks: state.frameworks,
  category: state.category,
  showEcosystems: state.ui.showEcosystems
});

const FrameworkGrid = ({
  frameworks,
  category,
  showEcosystems,
  handleScroll
}) => {
  return (
    <Grid stackable columns={4} className="animated fadeIn">
      <Grid.Row>
        {frameworks &&
          frameworks
            .filter(p => !p.isContender)
            .sort((a, b) => a.stars < b.stars)
            .map((z, index) => (
              <Grid.Column width={4} key={z.framework}>
                <FrameworkItem
                  data={z}
                  key={z.framework}
                  rank={index + 1}
                  showEcosystems={showEcosystems}
                  handleScroll={handleScroll}
                  category={category}
                />
              </Grid.Column>
            ))}
      </Grid.Row>
    </Grid>
  );
};

export default connect(mapStateToProps)(FrameworkGrid);
