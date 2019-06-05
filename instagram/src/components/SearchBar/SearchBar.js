import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.changeHandler}
        name="search"
        value={this.props.newSearch}
        placeholder="Search"
      />
    );
  }
}

// const SearchBar = () => {
//   return (
//     <div className="search">
//       <form>
//         <input type="text" placeholder="Search" />
//       </form>
//     </div>
//   );
// };

export default SearchBar;
