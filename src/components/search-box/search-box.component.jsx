import './search-box.styles.css';

const SearchBox = ({ onSearchChangeHandler, placeholder, className }) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onSearchChangeHandler}
    />
  );
}

export default SearchBox;
