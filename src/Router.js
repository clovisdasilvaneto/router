'use strict';

import Component from 'metal-jsx';

class Router extends Component {
    render() {
		const { location } = this.props;

		this.setState({
			location: location
		});

        return(
			<div>{this.props.children}</div>
        );
    }
}

Router.STATE = {
	location: {
		value: ''
	}
}

export { Router };
export default Router;
