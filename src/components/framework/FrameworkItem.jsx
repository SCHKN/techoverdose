import React from "react";
import { Segment } from "semantic-ui-react";
import FrameworkStatistics from "./FrameworkStatistics";
import FrameworkInfo from "./FrameworkInfo";
import FrameworkEcosystem from "./FrameworkEcosystem";

const FrameworkItem = ({ data, rank, showEcosystems, handleScroll }) => {
  return (
    <Segment.Group>
      <FrameworkInfo data={data} rank={rank} handleScroll={handleScroll} />
      <FrameworkStatistics data={data} />
      {showEcosystems && data.ecosystem && data.ecosystem.length > 0 && <FrameworkEcosystem ecosystem={data.ecosystem} framework={data.framework} />}
    </Segment.Group>
  );
};

export default FrameworkItem;
