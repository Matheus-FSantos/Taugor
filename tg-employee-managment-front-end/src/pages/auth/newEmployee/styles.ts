import styled from "styled-components";

const Title = styled.h1`
	font-size: 1.875rem; /* 30px */
	font-family: "Roboto", Arial, Helvetica, sans-serif;
	font-weight: 500;
`;

const Subtitle = styled.p`
	font-size: 0.875rem; /* 14px */
	font-family: "Robot", Arial, Helvetica, sans-serif;
	font-weight: 600;

	color: var(--gray-350);

	line-height: 1.313rem; /* 21px */

	span {
		color: var(--red-500);
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;

	gap: 1.25rem;
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
	Form,
	Title,
	Subtitle,
	VisuallyHiddenInput,
}
