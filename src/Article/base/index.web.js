import React from 'react';

export default class Base extends React.Component {
	render() {
		return (
			<article>
					<header>
							<h3>{this.props.title}</h3>
					</header>
					<p>{this.props.content}</p>
					<footer>
							<a href="" className="button special">More</a>
					</footer>
			</article>
		);
	}
}

Base.defaultProps = {
	title: "",
	content: ""
}