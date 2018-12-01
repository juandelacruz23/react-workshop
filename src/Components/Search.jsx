import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class Search extends Component {
  state = {
    searchString: ""
  };

  search = () => {
    this.props.onClickSearch(this.state.searchString);
  };

  render() {
    return (
      <div> 
        <Input
          size="small"
          onChange={e => this.setState({ searchString: e.target.value })}
          label={<Button icon="search" onClick={this.search} />}
          labelPosition="right"
          placeholder="Busca entre miles de repos"
          fluid
        />
      </div>
    );
  }
}

export default Search;