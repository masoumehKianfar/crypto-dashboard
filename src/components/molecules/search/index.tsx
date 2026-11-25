import { Input } from "@/shadcn/components/ui/input";

interface SearchComponentProps {
  searchInputValue: string;
  onSearch: (searchInputValue: string) => void;
  placeHolder: string;
  inputClassName?: string;
}

const SearchComponent = ({
  searchInputValue,
  onSearch,
  placeHolder,
  inputClassName,
}: SearchComponentProps) => {
  return (
    <div>
      <Input
        value={searchInputValue}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={`${placeHolder}`}
        className={`${inputClassName}`}
      />
    </div>
  );
};

export default SearchComponent;
