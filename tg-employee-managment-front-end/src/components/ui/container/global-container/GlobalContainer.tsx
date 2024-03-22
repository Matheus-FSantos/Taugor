import styled from "styled-components";

const GlobalContainerStyle = styled.section`
	padding: 0 100px;
`;

interface IGlobalContainerProps {
	children: React.ReactNode
}

const GlobalContainer = ({ children }: IGlobalContainerProps): React.ReactElement => {
	return (
		<GlobalContainerStyle>
			{ children }
		</GlobalContainerStyle>
	);
}

export { GlobalContainer};
