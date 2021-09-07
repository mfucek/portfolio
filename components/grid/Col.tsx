import React from 'react';

type ColProps = {
	span?: Number;
	sm?: Number;
	md?: Number;
	lg?: Number;
	xs?: Number;
	className?: String;
	hide?: string;
};
export default class Col extends React.Component<ColProps> {
	private df_out: string = this.props.span ? ' col-' + this.props.span : '';
	private sm_out: string = this.props.lg ? ' col-lg-' + this.props.lg : '';
	private md_out: string = this.props.md ? ' col-md-' + this.props.md : '';
	private lg_out: string = this.props.sm ? ' col-sm-' + this.props.sm : '';
	private xs_out: string = this.props.xs ? ' col-xs-' + this.props.xs : '';

	private hide: string = this.props.hide ? ' hide-' + this.props.hide : '';

	render() {
		return (
			<div
				className={`col${
					this.df_out +
					this.sm_out +
					this.md_out +
					this.lg_out +
					this.xs_out +
					this.hide
				} ${this.props.className ? this.props.className : ''}`}>
				{this.props.children}
			</div>
		);
	}
}
