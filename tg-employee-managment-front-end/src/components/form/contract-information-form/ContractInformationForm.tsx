import { useState } from "react";
import { FlexContainer } from "../../ui/container/flex-container";
import { ContactInformation } from "../contact-information-form/styles";

import { DateField } from "@mui/x-date-pickers";
import { CreateRounded } from "@mui/icons-material";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const ContractInformationForm = () => {

	const [sector, setSector] = useState<string>("");

	return (
		<FlexContainer className="flex-column gap-20">
			<ContactInformation>Contact informations <CreateRounded fontSize="medium" /></ContactInformation>
		

			<FlexContainer className="inline">
				<TextField helperText="e.g.: Analista de Software Júnior" label="Job Title" variant="outlined" required={ true }/>
				<DateField helperText="e.g.: 11/02/1998" label="Admission Date" variant="outlined" required={ true }/>
			</FlexContainer>

			<TextField helperText="e.g.: 2400" label="Salary" variant="outlined" required={ true }/>
			
			<FormControl fullWidth>
					<InputLabel id="sector-label">Sector *</InputLabel>
					<Select
						labelId="sector-label"
						id="sector"
						value={ sector }
						label="Gender"
						required={ true }
						onChange={ (e) => { setSector(e.target.value) } }
					>
						<MenuItem value={"finance"}>Finance</MenuItem>
						<MenuItem value={"juridical"}>Juridical</MenuItem>
						<MenuItem value={"tecnology"}>Tecnology</MenuItem>
						<MenuItem value={"marketing"}>Marketing</MenuItem>
						<MenuItem value={"human-resource"}>Human Resouce</MenuItem>
					</Select>
					<FormHelperText>e.g.: Finance, Tecnology, Human Resouce...</FormHelperText>
				</FormControl>
		</FlexContainer>
	);
}

export { ContractInformationForm };
