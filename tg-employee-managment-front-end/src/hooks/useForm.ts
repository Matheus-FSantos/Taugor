import { useState } from "react"

const useForm = (steps: React.ReactNode[]) => {
	const [currentStep, setCurrentStep] = useState<number>(0);

	const changeStep = (i: number, e: React.FormEvent): void => {
		e.preventDefault();
		if(i < 0 || i>= steps.length) return

		setCurrentStep(i);
	}

	return {
		changeStep,
		currentStep,
		currentComponent: steps[currentStep],
		isLastStep: currentStep + 1 === steps.length ? true : false
	};
}

export { useForm };
