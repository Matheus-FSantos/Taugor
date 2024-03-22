import { InputBase, Divider, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const SearchInputContainer = styled.form`
	padding: 2px 4px;
	display: flex;
	flex-direction: row;
	align-items: center;

	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;

	border-radius: 5px;

	width: 65%;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}
`;

const SearchInput = (): React.ReactElement => {
	return (
		<SearchInputContainer>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a employee"
        inputProps={{ 'aria-label': 'search for a employee' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </SearchInputContainer>
	);
}

export { SearchInput };
