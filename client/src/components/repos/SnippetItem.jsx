import React from "react";
import Markdown from "markdown-to-jsx";
import Highlight from "react-highlight";
import snippets from "../../snippets/javascript";
import { Segment, Label, Item, Icon } from "semantic-ui-react";

const SnippetItem = () => {
  return (
    <div>
      {snippets.data.slice(0, 9).map(data => {
        const snippet = data.attributes;
        return (
          <Segment.Group>
            <Segment>
              <Item.Group>
                <Item className="framework-item">
                  <Item.Content>
                    <Icon name="code" color="yellow" />
                    <Item.Header as="a">{data.id}</Item.Header>
                    <Item.Meta>by 30 Seconds Of Code</Item.Meta>
                    <Item.Description>
                      <Markdown>{snippet.text}</Markdown>
                    </Item.Description>
                    <Item.Extra />
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
            <Segment>
              <Label attached="top">Snippet</Label>
              <Highlight language="javascript">
                <Markdown>
                  {snippet.codeBlocks && snippet.codeBlocks[0]}
                </Markdown>
              </Highlight>
            </Segment>
          </Segment.Group>
        );
      })}
    </div>
  );
};

export default SnippetItem;
