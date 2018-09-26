import React from "react";
import { Segment, Item, Label, Statistic, Icon } from "semantic-ui-react";
import reddit from "../../images/reddit.png";

const RedditPost = ({ post }) => {
  return (
    <Segment.Group>
      <Segment>
        <Label attached="top right">{post.subreddit}</Label>
        <Item.Group>
          <Item className="framework-item">
            <Item.Image
              src={
                post.thumbnail === "self" || post.thumbnail === "default"
                  ? reddit
                  : post.thumbnail
              }
              size="tiny"
            />
            <Item.Content>
              <Item.Header as="a" href={post.url}>
                {post.title}
              </Item.Header>
              <Item.Meta>by {post.author}</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <Statistic.Group size="mini">
          <Statistic>
            <Statistic.Value>
              <Icon name="star" />
              {post.score}
            </Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="arrow up" color="green" />
              {post.ups}
            </Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="arrow down" color="red" />
              {post.downs}
            </Statistic.Value>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              <Icon name="comment alternate outline" />
              {post.num_comments}
            </Statistic.Value>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </Segment.Group>
  );
};

export default RedditPost;
