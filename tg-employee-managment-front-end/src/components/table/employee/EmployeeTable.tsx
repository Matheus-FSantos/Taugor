import { Button } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

import { useNavigate } from 'react-router-dom';

function createData (
	id: string,
  firstName: string,
  lastName: string,
  gender: string,
  jobTitle: string,
) {
  return { id, firstName, lastName, gender, jobTitle };
}

const rows = [
	createData("b64faa35-35f3-4fa6-93b4-7b3341f23ed6", "Henrique", "Benjamin Melo", "Male", "Analista de Sistemas Jr."),
	createData("3c196353-2479-435a-b90b-3e3b75449ac4", "Márcia", "Costa", "Female", "Analista QA Sênior"),
	createData("46e8ad11-c704-4440-b23e-51c79ba64644", "Patrícia", "Hadassa Nina", "Female", "Gerente de RH I"),
	createData("d17b8659-f3a1-4dbe-a789-8084e46ece53", "Tomás", "Vicente Moreira", "Male", "Estágiario de TI"),
	createData("183e40e8-2bc8-4adb-aaf6-a1270d8562ac", "Márcia", "Larissa Letícia", "Female", "Gerente de RH II"),
	createData("183e40e8-2bc8-4adb-aaf6-a1270d8562ab", "Márcia", "Larissa Letícia", "Female", "Gerente de RH II"),
	createData("183e40e8-2bc8-4adb-aaf6-a1270d8562aa", "Márcia", "Larissa Letícia", "Female", "Gerente de RH II"),
	createData("183e40e8-2bc8-4adb-aaf6-a1270d8562ae", "Márcia", "Larissa Letícia", "Female", "Gerente de RH II"),
];

const EmployeeTable = (): React.ReactElement => {
	
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		navigate(path);
	}
	
	return (
		<TableContainer component={ Paper }>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>by Matheus-FSantos</caption>
        <TableHead>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>Full name</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>CV</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
				<TableBody>
					{ rows.map((row) => (
						<TableRow key={ row.id }>
							<TableCell component="th" scope="row">{ row.firstName }</TableCell>
							<TableCell>{ row.lastName }</TableCell>
							<TableCell>{ row.firstName.concat(" ").concat(row.lastName) }</TableCell>
							<TableCell>{ row.gender }</TableCell>
							<TableCell>{ row.jobTitle }</TableCell>
							<TableCell>
								<Button variant="outlined" color="secondary" onClick={ () => handleNavigate(`/cv/${ row.id }`) }>CV</Button>	
							</TableCell>
							<TableCell>
								<Button variant="outlined" color="success" onClick={ () => handleNavigate(`/update/${ row.id }`) }>Update</Button>
							</TableCell>
							<TableCell>
								<Button variant="text" color="error" onClick={ () => handleNavigate(`/delete/${ row.id }`) }>Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
      </Table>
    </TableContainer>
	);
}

export { EmployeeTable };
