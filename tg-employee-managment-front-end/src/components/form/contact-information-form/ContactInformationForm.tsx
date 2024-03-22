import { useState } from "react";

import { DateField } from "@mui/x-date-pickers";
import { CreateRounded, FileUploadRounded } from "@mui/icons-material";
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Tooltip } from "@mui/material";

import { FlexContainer } from "../../ui/container/flex-container";
import { ContactInformation, VisuallyHiddenInput } from "./styles";

const ContactInformationsForm = () => {
	const [gender, setGender] = useState<string>("");

	return (
		<FlexContainer className="flex-column gap-20">
			<ContactInformation>Contact informations <CreateRounded fontSize="medium" /></ContactInformation>

			<FlexContainer className="flex-column gap-20">
				<FlexContainer className="inline">
					<TextField helperText="e.g.: Pedro" label="Name" variant="outlined" required={ true }/>
					<TextField helperText="e.g.: Dos Santos" label="Lastname" variant="outlined" required={ true }/>
				</FlexContainer>

				<Tooltip
					placement="bottom"
					title="Select a employee image"
					slotProps={{
						popper: {
							modifiers: [
								{
									name: 'offset',
									options: {
										offset: [0, -8],
									},
								},
							],
						},
					}}
				>
					<Button
						size="large"
						tabIndex={-1}
						component="label"
						role={ undefined }
						variant="outlined"
						startIcon={ <FileUploadRounded /> }
					>
						Upload employee image
						<VisuallyHiddenInput type="file" />
					</Button>
				</Tooltip>

				<FormControl fullWidth>
					<InputLabel id="gender-label">Gender *</InputLabel>
					<Select
						labelId="gender-label"
						id="gender"
						value={ gender }
						label="Gender"
						required={ true }
						onChange={ (e) => { setGender(e.target.value) } }
					>
						<MenuItem value={"male"}>Male</MenuItem>
						<MenuItem value={"female"}>Female</MenuItem>
						<MenuItem value={"other"}>Other</MenuItem>
					</Select>
					<FormHelperText>e.g.: Male, Female, Other</FormHelperText>
				</FormControl>

				<TextField helperText="e.g.: Rua Adelaide Fernandes da Costa, 122 - Costa Azul" label="Address" variant="outlined" required={ true }/>

				<FlexContainer className="inline">
					<TextField helperText="e.g.: 11987619027" label="Telephone" variant="outlined" required={ true }/>
					<DateField helperText="e.g.: 11/02/1998" label="Birthday" variant="outlined" required={ true }/>
				</FlexContainer>
			</FlexContainer>
		</FlexContainer>
	);
}

export { ContactInformationsForm };
