import React from "react";
import { Message } from "semantic-ui-react";
const FeaturesMessage = () => {
  return (
    <Message
      warning
      icon="css3 alternate blue"
      header="Have you heard about the new features?"
      list={[
        "Wow! Many new frameworks were added to Gitfront. Click on them and give it a try!",
        "Frameworks added : Hyperapp, Backbone, Polymer, Bootstrap, Sass, jQuery and Electron."
      ]}
    />
  );
};

export default FeaturesMessage;
