// Disclaimer
// This page is unlisted and may contain unreleased or otherwise non-public materials. Please do not share without permission. To view the contents press “I Understand”.
// I Understand

const Test = (props: any) => {
	return (
		<p style={{ color: 'blue' }} {...props}>
			This is from an MDX component.
			{props.children}
		</p>
	);
};

export default Test;
