import React from "react";
import { Segment, Item } from "semantic-ui-react";
import fear from '../../images/fear.png'

const NoResultsItem = () => {
  return (
    <Segment>
      <Item.Group>
        <Item className="framework-item">
          <Item.Image
            src={fear}
            size="tiny"
          />
          <Item.Content>
            <Item.Header>
              Oops! No results were found for your request.
            </Item.Header>
            <Item.Meta>Dino is sad.</Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export default NoResultsItem;
