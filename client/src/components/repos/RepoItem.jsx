import React from "react";
import {
  Segment,
  Item,
  Statistic,
  Icon,
  Label,
  Responsive
} from "semantic-ui-react";
import { format } from "date-fns";

export default ({ repo, framework }) => {
  return (
    <Segment.Group>
      <Segment className={"repo-item-" + framework}>
        <Label attached="top right">
          {repo.language ? repo.language : "Undefined"}
        </Label>
        <Item.Group>
          <Item className="framework-item">
            <Responsive minWidth="1140">
              <Item.Image
                src={repo.owner["avatar_url"]}
                size="tiny"
                className="repo-image"
              />
            </Responsive>
            <Item.Content>
              <Item.Header as="a" href={repo.html_url}>
                {repo.full_name}
              </Item.Header>
              <Item.Meta>by {repo.owner.login}</Item.Meta>
              <Item.Description>{repo.description}</Item.Description>
              <Item.Extra>
                Updated on {format(repo.updated_at, "MM/DD/YYYY")}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment className={"repo-item-" + framework}>
        <Statistic.Group size="mini">
          <Statistic>
            <Statistic.Value>
              <Icon name="star" />
              {repo.stargazers_count}
            </Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="fork" />
              {repo.forks_count}
            </Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="eye" />
              {repo.watchers_count}
            </Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </Segment.Group>
  );
};
