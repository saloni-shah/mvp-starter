import React from 'react';

const ListItem = (props) => (
  <tr onClick={(e) => props.handleClick(props.movie)}>
    <td>{ props.movie.title }</td>
    <td>{ props.movie.vote }</td>
  </tr>
)

export default ListItem;