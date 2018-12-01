import React from 'react';
import { Card } from 'semantic-ui-react';

const GithubCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{ props.repoName }</Card.Header>
        <Card.Meta>{ props.username }</Card.Meta>
        <Card.Description>
          { props.description }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={props.url}>Ir al repo</a>
      </Card.Content>
    </Card>
  );
};

export default GithubCard;