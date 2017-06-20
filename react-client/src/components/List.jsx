import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem.jsx';
import ListDetail from './ListDetail.jsx';
// const List = (props) => (
//   <div>
//     There are { props.movies.length } items.
//     <table>
//       <thead>
//         <tr>
//           <th>Movie Name</th>
//           <th>Votes</th>
//         </tr>
//       </thead>
//       <tbody>
//         { props.movies.map(movie => <ListItem key={movie.videoId} movie={movie}/>)}
//       </tbody>
//     </table>
//   </div>
// )

// export default List;

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movie: ''
    }
  }

  handleDetailMovie(movie){
    console.log('aaaa',movie);
    this.setState({
      movie: movie
    });
  }

  render () {
    if(!this.state.movie) {
      return (
        <div>
         There are { this.props.movies.length } items.
         <table>
           <thead>
             <tr>
               <th>Movie Name</th>
               <th>Votes</th>
             </tr>
           </thead>
           <tbody>
             { this.props.movies.map(movie => <ListItem handleDetailMovie={this.handleDetailMovie.bind(this)} key={movie.videoId} movie={movie}/>)}
           </tbody>
        </table>
       </div>
      );
    } else {
      //document.getElementById("app").innerHTML = '';
      ReactDOM.render(<ListDetail movie={this.state.movie}/>, document.getElementById('app'));
    }
  }
}
export default List;