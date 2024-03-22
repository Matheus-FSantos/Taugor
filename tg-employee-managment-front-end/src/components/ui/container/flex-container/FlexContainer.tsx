import styled from "styled-components";

const FlexContainerStyle = styled.div`
	display: flex;
	gap: 0.625rem;

	&.flex-column {
		flex-direction: column;
	}

	&.start {
		align-items: start;
		justify-content: start;
	}

	&.inline {
		flex-direction: row;

		* {
			flex: 1
		}
	}

	&.center {
		align-items: center;
	}

	&.align-center {
		align-items: center;
	}

	&.between {
		justify-content: space-between;
	}

	&.breadcrumbs {
		svg {
			position: relative;
			top: 0.5px;
		}
	}

	&.w-full {
		width: 100%;
	}

	&.gap-5 {
		gap: 0.313rem;
	}

	&.gap-20 {
		gap: 1.25rem;
	}

	&.gap-40 {
		gap: 2.5rem;
	}
`;

interface IFlexContainer {
	className?: string,
	children?: React.ReactNode
}

const FlexContainer = ({ className, children }: IFlexContainer) => {
	return (
		<FlexContainerStyle className={ className }>
			{ children }
		</FlexContainerStyle>
	);
}

export { FlexContainer };
