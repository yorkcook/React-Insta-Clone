import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <img src="/heart-regular.svg" alt="insta" />
        <input
          type="text"
          onChange={this.props.searchFilter}
          name="search"
          // value={this.props.newSearch}
          placeholder="Search"
        />
      </div>
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
