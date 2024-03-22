import { Link } from "react-router-dom";
import { useDinamicTitle } from "../../hooks/useDinamicTitle";

interface IErrorProps {
	title: string,
	pageTitle: string,
	description: string
}

const Error = ({ title, pageTitle, description }: IErrorProps) => {
	useDinamicTitle(pageTitle);
	
	return (
		<div>
			<h1>{ title }</h1>
			<p>{ description }</p>

			<Link to="/">Home page here.</Link>
		</div>
	);
}

export { Error };
