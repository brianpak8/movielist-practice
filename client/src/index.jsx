import React from 'react';
import ReactDOM from 'react-dom';
import Search from './component/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
]
    }
    this.search = this.search.bind(this);
    // this.getQuery = this.getQuery.bind(this);
  }

  search(term) {
    var count = 0;
    for (let i = 0; i < this.state.movies.length; i++) {
      if (this.state.movies[i].title.toLowerCase().includes(term.toLowerCase())) {
        let found = this.state.movies.splice(i, 1);
        this.state.movies.unshift(found[0]);
        console.log(this.state.movies);
        this.setState({movies: this.state.movies});
        //console.log('!!!!!!!!!!!!!!!!!', found);
        //this.state.movies.unshift(this.state.movies.splice(i, 1);)
      } else {
        count += 1;
      }
    }
    if (count === this.state.movies.length) {
      console.log('haha not found');
      alert('not found');
    }
  }

  // getQuery() {

  // }


  render() {
    return (
      <div>
      <h3>MOVIE LIST</h3>
      <div>
      <span>
      <Search search={this.search}/>
      </span>
        <ul>
          <li> {this.state.movies[0].title} </li>
          <li> {this.state.movies[1].title} </li>
          <li> {this.state.movies[2].title} </li>
          <li> {this.state.movies[3].title} </li>
          <li> {this.state.movies[4].title} </li>
        </ul>
      </div>
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));