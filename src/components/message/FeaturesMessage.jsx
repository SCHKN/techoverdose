import React from "react";
import { Message, Icon } from "semantic-ui-react";
const FeaturesMessage = () => {
  return (
    <Message info icon>
      <Icon name="star" />
      <Message.Content>
        <Message.Header>Have you heard about the new features?</Message.Header>
        <Message.List>
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
