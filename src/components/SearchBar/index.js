import { useState } from 'react';

import { SearchBarWrapper, Input, Button } from './styles';

const SearchBar = ({ onTransactionSearch, clearSearch }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    const searchTerm = event.target.value;
    setValue(searchTerm)
    onTransactionSearch(searchTerm)
  }

  const handleClear = () => {
    setValue('');
    clearSearch();
  };

  return (
    <SearchBarWrapper>
      <Input type='text' value={value} onChange={onChange} placeholder='Search...' />
      <Button onClick={handleClear}>Clear</Button>
    </SearchBarWrapper>
  )
}

export default SearchBar;