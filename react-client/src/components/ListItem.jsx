import React from 'react';
import ReactDOM from 'react-dom';
// const ListItem = (props) => (
//   <tr onClick={(e) => props.handleClick(props.movie)}>
//     <td>{ props.movie.title }</td>
//     <td>{ props.movie.vote }</td>
//   </tr>
// )

// export default ListItem;

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      detailpage: false,
      movie: ''
    }
  }
  
  handleClickForDetail(movie){
    this.setState({
      detailpage: true,
      movie: movie
    });
    this.props.handleDetailMovie(movie);
    // window.location = '/ListDetail';
    // <ListDetail movie={this.state.movie}/>
  }

  render () {
    if(!this.state.detailpage) {
      return (
        <tr onClick={(e) => this.handleClickForDetail(this.props.movie)}>
          <td>{ this.props.movie.title }</td>
          <td>{ this.props.movie.vote }</td>
        </tr>
      )
    }
  }
}
export default ListItem;