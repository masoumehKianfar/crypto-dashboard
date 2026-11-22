interface SearchComponentProps {
  searchInputValue: string;
  onSearch: (searchInputValue: string) => void;
  placeHolder: string;
  inputClassName: string;
}

const SearchComponent = ({
  searchInputValue,
  onSearch,
  placeHolder,
  inputClassName,
}: SearchComponentProps) => {
  return (
    <div>
      <input
        value={searchInputValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={`${placeHolder}`}
        className={`${inputClassName}`}
      />
    </div>
  );
};

export default SearchComponent;
