import React, { Component } from 'react';
import { Header, Card } from "semantic-ui-react";
import Search from './Components/Search';
import GithubCard from './Components/GithubCard';

class App extends Component {
  state = {
    items: []
  }

  search = searchString => {
    const url = "https://api.github.com/search/repositories?q="+searchString+"&per_page=15";
    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => jsonResponse.items.map(result => ({ 
          key: result.id, 
          repoName: result.name, 
          username: result.owner.login,
          description: result.description,
          url: result.html_url
        }))
      )
      .then(items => this.setState({ items }));
  }

  render() {
    return (
      <div className="ui container">
        <Header as="h1">Buscador de repos</Header>
        <Search onClickSearch = {this.search} />
        <br />
        <Card.Group>
          {this.state.items.map(item => <GithubCard {...item} /> )}
        </Card.Group>
      </div>
    );
  }
}

export default App;
