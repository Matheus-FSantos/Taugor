import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { useTimeout } from "../../../hooks/useTimeout";
import { useDinamicTitle } from "../../../hooks/useDinamicTitle";

import { GlobalLayout } from "../../../components/layout";

import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import { Breadcrumbs, Button, CircularProgress, Link, Tooltip, Typography } from "@mui/material";

/* FORMS */
import { FlexContainer } from "../../../components/ui/container/flex-container";
import { ContactInformationsForm } from "../../../components/form/contact-information-form";
import { ContractInformationForm } from "../../../components/form/contract-information-form";

import { Form, Subtitle, Title } from "./styles";

const NewEmployee = (): React.ReactElement => {
	useDinamicTitle("New Employee");

	const navigate = useNavigate();
	const formComponents: React.ReactNode[] = [<ContractInformationForm />, <ContactInformationsForm />];
	const { currentStep, currentComponent, changeStep, isLastStep } = useForm(formComponents);

	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const handleNavigate = (path: string) => {
		navigate(path);
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		setIsDisabled(true);
		await useTimeout(3000);
		setIsDisabled(false);
	}

	return (
		<GlobalLayout>
			<FlexContainer className="flex-column gap-40">
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						Home
					</Link>
					<Typography color="primary">
						<FlexContainer className="center gap-5 breadcrumbs">
							New Employee <KeyboardDoubleArrowRightRounded  fontSize="small"/>
						</FlexContainer>
					</Typography>
				</Breadcrumbs>

				<FlexContainer className="flex-column gap-5">
					<Title>Fill in the fields below</Title>
					<Subtitle>Fill in your employee's details to register them on the platform<br/>Note: Mandatory data is marked with <span>*</span></Subtitle>
				</FlexContainer>

				<Form onSubmit={ handleSubmit }>
					{ currentComponent }
					<FlexContainer className="flex-column">
						<Tooltip
							placement="top"
							title={ isLastStep ? "Create employee" : "Next step"}
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
							{
								isLastStep ?
									<Button
										size="large"
										type="submit"
										variant="contained"
										disabled={ isDisabled }
									>
										{
											isDisabled ?
												<CircularProgress  size={ 25 } color="secondary"/>
											:
												"Submit"
										}
									</Button>
								:
									<Button
										size="large"
										type="button"
										variant="contained"
										disabled={ isDisabled }
										onClick={ (e) => changeStep(currentStep + 1, e) }
									>
										Next
									</Button>
							}
						</Tooltip>
						<Tooltip
							title={ isLastStep ? "Go back" : "Cancel operation" }
							placement="bottom"
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
							{
								isLastStep ?
									<Button
										color="error"
										size="large"
										type="button"
										onClick={ (e) => changeStep(currentStep - 1, e) }
										disabled={ isDisabled }>
											Back
									</Button>
								:
									<Button
										color="error"
										size="large"
										onClick={ () => handleNavigate("/") }
										disabled={ isDisabled }>
											Cancel
									</Button>
							}
						</Tooltip>
					</FlexContainer>
				</Form>
			</FlexContainer>
		</GlobalLayout>		
	);
}

export { NewEmployee };
