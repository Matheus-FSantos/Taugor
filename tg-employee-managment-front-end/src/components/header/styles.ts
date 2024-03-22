import styled from "styled-components";

const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 6.25rem; /* 100px */
`;

const Logo = styled.img`
	width: 10rem; /* 160px */
	height: auto;

	position: relative;
	right: 13%;

	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;

	cursor: pointer;
	
	&:hover {
		transform: scale(1.1);
	}
`;

export {
	Logo,
	HeaderContainer,
};
