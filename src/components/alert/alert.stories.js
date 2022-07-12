import Alert from './Alert';

export default {
	title: 'Alert',
	component: Alert,
};

const Template = (args) => <Alert {...args} />;

export const SuccessAlert = Template.bind({});

SuccessAlert.args = {
	variant: 'success',
	message: 'You have successfully logged in',
};

export const WarningAlert = Template.bind({});

WarningAlert.args = {
	variant: 'warning',
	message: 'Password must be 6 char long',
};

export const ErrorAlert = Template.bind({});

ErrorAlert.args = {
	variant: 'error',
	message: 'Wrong password entered please check again',
};
