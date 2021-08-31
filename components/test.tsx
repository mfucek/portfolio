const Test = (props: any) => {
	return (
		<p style={{ color: 'blue' }} {...props}>
			This is from an MDX component.
			{props.children}
		</p>
	);
};

export default Test;
