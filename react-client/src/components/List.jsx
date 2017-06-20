import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    There are { props.movies.length } items.
    <table>
      <thead>
        <tr>
          <th>Movie Name</th>
          <th>Votes</th>
        </tr>
      </thead>
      <tbody>
        { props.movies.map(movie => <ListItem handleClick={props.handleClick} key={movie.videoId} movie={movie}/>)}
      </tbody>
    </table>
  </div>
)

export default List;