import { useNavigate } from "react-router-dom";
import { LogoPng } from "../../assets/images/images";
import { HeaderContainer, Logo } from "./styles";

import { HomeRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

const Header = (): React.ReactElement => {
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	}

	return (
		<HeaderContainer>
			<a href="https://www.taugor.com.br/" target="_blank">
				<Logo src={ LogoPng } alt="Taugor Corporation: taugor comporation logo"/>
			</a>
			<Tooltip title="Home" placement="bottom">
				<IconButton onClick={ () => handleNavigate("/") }>
					<HomeRounded fontSize="large" color="primary" />
				</IconButton>
			</Tooltip>
		</HeaderContainer>
	);
}

export { Header };
