import React from 'react';

// const ListDetail = (props) => (
//   <div>
//     <div>
//     <iframe width="820" height="345" src={`https://www.youtube.com/embed/${props.movie.trailer}`}>
//     </iframe>
//   </div>
//   </div>
// )


// export default ListDetail;

class ListDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          <iframe width="100%" height="345" src={`https://www.youtube.com/embed/${this.props.movie.trailer}`}>
          </iframe>
        </div>
        <h2>{this.props.movie.title}</h2>
        <p>{this.props.movie.overview}</p>
      <table>
        <tbody>
          <tr>
            <td><b>Vote:</b>{this.props.movie.vote}</td>
            <td><b>Release Date:</b>{this.props.movie.release_date}</td>
            <td><b>Production Companies:</b>{this.props.movie.productionCompanies.map(obj => obj.name + ", " )}</td>
          </tr>
        </tbody>
      </table>
     </div>
    );
  }
}
export default ListDetail;