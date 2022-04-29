import React from 'react';
import styled from 'styled-components';

interface themeProps {
	text?: string;
	background?: string;
	shade?: string;
	accent?: string;
}

const ThemeMain = styled.div<themeProps>`
	--theme-text: var(--${(props) => props.text});
	--theme-background: var(--${(props) => props.background});
	--theme-shade: var(--${(props) => props.shade});
	--theme-accent: var(--${(props) => props.accent});
`;

let defaultTheme: themeProps = {
	background: 'dark',
	accent: 'blue',
	text: 'white',
	shade: 'darkish'
};
// let defaultTheme: themeProps = {
// 	text: 'dark',
// 	background: 'white',
// 	shade: 'light',
// 	accent: 'blue'
// };

export class Theme extends React.Component<themeProps> {
	componentDidMount() {
		document.body.style.backgroundColor = `rgb(var(--${
			this.props.background
				? this.props.background
				: defaultTheme.background
		}))`;
	}
	render() {
		return (
			<ThemeMain
				text={this.props.text ? this.props.text : defaultTheme.text}
				background={
					this.props.background
						? this.props.background
						: defaultTheme.background
				}
				accent={
					this.props.accent ? this.props.accent : defaultTheme.accent
				}
				shade={
					this.props.shade ? this.props.shade : defaultTheme.shade
				}>
				{this.props.children}
			</ThemeMain>
		);
	}
}
