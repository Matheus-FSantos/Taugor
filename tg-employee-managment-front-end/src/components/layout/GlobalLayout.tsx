import { Header } from "../header";
import { GlobalContainer } from "../ui/container/global-container";

interface IGlobalLayoutProps {
	children?: React.ReactNode
}

const GlobalLayout = ({ children }: IGlobalLayoutProps): React.ReactElement => {
	return (
		<GlobalContainer>
			<Header />
			{ children }
		</GlobalContainer>
	);
}

export { GlobalLayout };
