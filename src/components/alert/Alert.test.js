import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from './Alert';

test('should render the alert component', () => {
	render(<Alert />);

	expect(screen.getByTestId('alert-component')).toBeInTheDocument();
});

test('should render the success alert component', () => {
	render(<Alert variant='success' />);

	expect(screen.getByTestId('alert-component')).toBeInTheDocument();
});

test('should render the warning alert component', () => {
	render(<Alert variant='warning' />);

	expect(screen.getByTestId('alert-component')).toBeInTheDocument();
});

test('should render the error alert component', () => {
	render(<Alert variant='error' />);

	expect(screen.getByTestId('alert-component')).toBeInTheDocument();
});

test('should render the alert component with no border radius', () => {
	render(<Alert noBorder={true} />);

	expect(screen.getByTestId('alert-component')).toHaveStyle(
		'border-radius:0px'
	);
});

test('should render the  message for alert component', () => {
	render(<Alert variant='error' message={'password wrong'} />);

	expect(screen.getByTestId('message')).toHaveTextContent('password wrong');
});
