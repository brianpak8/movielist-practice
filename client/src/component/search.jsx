import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''

    };
  }
  getQuery(e) {
    console.log('Event triggered', e);
    console.log(e.target.value);
    this.setState({searchTerm: e.target.value});

  }
  search() {
    console.log('------------------->', typeof this.state.searchTerm);
    this.props.search(this.state.searchTerm);
  }
  render() {
    return (
      <div>
      <input type="text" onChange={this.getQuery.bind(this)}/>
      <button onClick={this.search.bind(this)}>SEARCH</button>
      </div>
      )
  }

}

export default Search;