import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListDetail from './components/ListDetail.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      movie: ''
    }
  }

  componentDidMount() { 
    $.ajax({
      url: '/movies', 
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        //console.log(data);
        this.setState({
          movies: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleAddMovie(moviename){
    $.ajax({
      url: '/addmovie', 
      type: 'POST',
      data: {name: moviename},
      success: () => {
        this.componentDidMount();
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleSearchClick(searchVal){
    if(searchVal !== ''){
      var movies = this.state.movies;
      var filterMovies = movies.filter((movieObj) => {
        return movieObj['title'].indexOf(searchVal) !== -1;
      });
      this.setState({
        movies: filterMovies
      });
    } else {
      this.setState({
        movies: this.state.movies
      });
    }
  }

  render () {
    return (<div>
      <h1>Movie Collector</h1>
      <input id="addmovie" type="text" placeholder="Add Movie..."/>
      &nbsp;<button onClick={(e) => this.handleAddMovie(document.getElementById("addmovie").value)}>Add Movie</button>
      <br/><br/>
      <Search handleSearchClick={this.handleSearchClick.bind(this)}/>
      <List movies={this.state.movies}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));