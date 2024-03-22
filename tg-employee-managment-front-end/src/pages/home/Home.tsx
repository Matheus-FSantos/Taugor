import { GlobalLayout } from "../../components/layout";
import { useNavigate } from "react-router-dom";

import { EmployeeTable } from "../../components/table/employee";

import { Breadcrumbs, Button, Tooltip, Typography } from "@mui/material";
import { FlexContainer } from "../../components/ui/container/flex-container";
import { Subtitle, Title } from "../auth/newEmployee/styles";
import { SearchInput } from "../../components/ui/input/search";

const Home = (): React.ReactElement => {
	
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	}
	
	return (
		<GlobalLayout>
			<FlexContainer className="flex-column gap-40">
				<Breadcrumbs aria-label="breadcrumb">
					<Typography color="primary">
						Home&nbsp;&nbsp;/
					</Typography>
				</Breadcrumbs>

				<FlexContainer className="flex-column gap-5">
						<Title>Home</Title>
						<Subtitle>See below the information of the employees registered by you<br/>Note: You can check the complete information by clicking to view CV <span>*</span></Subtitle>
					</FlexContainer>

				<FlexContainer className="flex-column start gap-20">
					<FlexContainer className="gap-5 w-full align-center between">
						<Tooltip title="Create a new employee">
							<Button variant="contained" size="large" onClick={ () => handleNavigate("/new-employee") }>New Employee</Button>
						</Tooltip>
						<SearchInput />
					</FlexContainer>
					<EmployeeTable />
				</FlexContainer>
			</FlexContainer>
		</GlobalLayout>
	);
}

export { Home };
