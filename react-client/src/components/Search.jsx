import React from 'react';

const Search = (props) => (
  <input id="searchVal" type="text" onKeyUp={(e) => props.handleSearchClick(document.getElementById("searchVal").value)} placeholder="Search here..."/>
)

export default Search;