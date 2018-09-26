import React from "react";
import { Segment, Statistic, Icon } from "semantic-ui-react";

const FrameworkStatistics = ({ data }) => {
  const { stars, isFrameworkFetching, subscribers } = data;
  return (
    <Segment loading={isFrameworkFetching}>
      <Statistic.Group size="mini" widths="two">
        <Statistic>
          <Statistic.Value>
            <Icon name="star" />
            {stars > 0 && Math.trunc(stars / 1000) + "k"}
          </Statistic.Value>
          <Statistic.Label>Stars</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>
            <Icon name="user circle" />
            {subscribers > 0 && Math.trunc(subscribers / 1000) + "k"}
          </Statistic.Value>
          <Statistic.Label>Subscribers</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Segment>
  );
};

export default FrameworkStatistics;
