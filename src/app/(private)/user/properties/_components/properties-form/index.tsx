'use client';
import { Steps } from 'antd';
import React, { useEffect } from 'react';
import Amenities from './amenities';
import Basic from './basic';
import Contact from './contact';
import Location from './location';
import Media from './media';

export interface PropertiesFormStepProps {
	currentStep: number;
	setCurrentStep: (currentStep: number) => void;
	finalValues: any;
	setFinalValues: (finalValues: any) => void;
	loading: boolean;
	setLoading: (loading: boolean) => void;
	isEdit?: boolean;
}

function PropertiesForm({
	initialValues = {},
	isEdit = false,
}: {
	initialValues?: any;
	isEdit?: boolean;
}) {
	const [finalValues, setFinalValues] = React.useState({
		basic: initialValues,
		location: initialValues,
		amenities: initialValues,
		media: {
			newlyUploadedFiles: [],
			images: initialValues?.images || [],
		},
		contact: initialValues,
	});
	const [currentStep = 0, setCurrentStep] = React.useState(0);
	const [loading = false, setLoading] = React.useState(false);

	const commonPropsForSteps: any = {
		currentStep,
		setCurrentStep,
		finalValues,
		setFinalValues,
		loading,
		setLoading,
		isEdit,
	};

	const steps = [
		{
			title: 'Basic',
			content: <Basic {...commonPropsForSteps} />,
		},
		{
			title: 'Location',
			content: <Location {...commonPropsForSteps} />,
		},
		{
			title: 'Amenities',
			content: <Amenities {...commonPropsForSteps} />,
		},
		{
			title: 'Media',
			content: <Media {...commonPropsForSteps} />,
		},
		{
			title: 'Contact',
			content: <Contact {...commonPropsForSteps} />,
		},
	];

	useEffect(() => {
		console.log(finalValues);
	}, [finalValues]);

	return (
		<div>
			<Steps className='text-sm' current={currentStep} items={steps} />

			<div className='mt-8'>{steps[currentStep].content}</div>
		</div>
	);
}

export default PropertiesForm;
