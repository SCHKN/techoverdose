import React from "react";
import { Segment, List } from "semantic-ui-react";
import { connect } from "react-redux";
import ContendersItem from "./ContendersItem";

const mapStateToProps = state => ({
  data: state
});

const ContendersSegment = ({ data }) => {
  return (
    <div className="contenders-segment">
      {data &&
        data.frameworks &&
        data.frameworks.filter(p => p.isContender).length > 0 && (
          <Segment>
            <List horizontal>
              {data.frameworks
                .filter(p => p.isContender)
                .sort((a, b) => a.framework > b.framework)
                .map(z => (
                  <ContendersItem
                    framework={z.framework}
                    key={z.framework}
                    category={data.category}
                  />
                ))}
            </List>
          </Segment>
        )}
    </div>
  );
};

export default connect(mapStateToProps)(ContendersSegment);
