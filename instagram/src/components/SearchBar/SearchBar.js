import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.searchFilter}
        name="search"
        // value={this.props.newSearch}
        placeholder="Search"
      />
    );
  }
}

// const SearchBar = () => {
//   return (
//     <div className="search">
//       <input
//         type="text"
//         name="search"
//         onChange={props.searchFilter}
//         placeholder="Search"
//       />
//     </div>
//   );
// };

export default SearchBar;
