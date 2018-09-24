import React from "react";
import { Message, Icon, Responsive } from "semantic-ui-react";
import SearchPopup from "../filtering/SearchPopup";
const FeaturesMessage = ({ handleScroll }) => {
  return (
    <Message info icon>
      <Icon name="star" />
      <Message.Content>
        <Message.Header>Have you heard about the new features?</Message.Header>
        <Message.List>
          <Message.Item>
            More than 220 topics have been added to TechOverdose! Try it now!
            <Responsive maxWidth={990}>
              <SearchPopup handleScroll={handleScroll}/>
            </Responsive>
          </Message.Item>
          <Message.Item>
            Hub Proposals are open! If you want to see a custom hub, visit this
            link and suggest one :{" "}
            <a href="https://github.com/SCHKN/techoverdose/issues/1">
              Hub Proposal
            </a>
          </Message.Item>
          <Message.Item>
            New datasources are coming soon (including StackOverflow)
          </Message.Item>
        </Message.List>
      </Message.Content>
    </Message>
  );
};

export default FeaturesMessage;
