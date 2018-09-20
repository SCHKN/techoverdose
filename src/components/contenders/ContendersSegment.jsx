import React from "react";
import { Segment, List } from "semantic-ui-react";
import { connect } from "react-redux";
import ContendersItem from "./ContendersItem";

const mapStateToProps = state => ({
  data: state
});

const ContendersSegment = ({ data }) => {
  return (
    <Segment>
      <List horizontal>
        {data &&
          data.frameworks &&
          data.frameworks
            .filter(p => p.isContender)
            .sort((a, b) => a.framework > b.framework)
            .map(z => (
              <ContendersItem framework={z.framework} key={z.framework} />
            ))}
      </List>
    </Segment>
  );
};

export default connect(mapStateToProps)(ContendersSegment);
