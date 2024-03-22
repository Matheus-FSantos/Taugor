import styled from "styled-components";

const ContactInformation = styled.p`
	font-size: 1.563rem; /* 25px */
	font-family: "Roboto", Arial, Helvetica, sans-serif;

	font-weight: 500;

	display: flex;
	align-items: start;
	justify-content: start;
	
	gap: 0.625rem;
`;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export {
	ContactInformation,
	VisuallyHiddenInput,
}
