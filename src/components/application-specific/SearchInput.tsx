import styled from 'styled-components';
import SearchIcon from '@static/search-icon.svg';

const StyledInput = styled.input`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #a8a8a8;
  width: 100%;
  border: none;
  position: absolute;
  &:focus {
    outline: none;
  }
`;

const SearchImage = styled(SearchIcon)`
  position: absolute;
  left: 0;
  z-index: 1;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 31px;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 12px;
`;

const SearchInput = (): JSX.Element => {
  return (
    <SearchBox>
      <SearchImage />
      <StyledInput placeholder="Search for your sneaker" />
    </SearchBox>
  );
};

export default SearchInput;
