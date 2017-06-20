import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import ListDetail from './components/ListDetail.jsx';

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
        console.log(data);
        this.setState({
          movies: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleClick(movie){
    console.log(movie);
    this.setState({
      movie: movie
    });
    return (<ListDetail movie={this.state.movie}/>)
  }

  render () {
    return (<div>
      <h1>Movie Collector</h1>
      <List handleClick={this.handleClick.bind(this)} movies={this.state.movies}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));