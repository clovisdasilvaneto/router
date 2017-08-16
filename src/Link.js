'use strict';

import { core } from 'metal';
import Component from 'metal-jsx';

const isModifiedEvent = (event) => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)

class Link extends Component {

    handleClick(event) {

        if(this.props.onClick) {
            this.props.onClick(event);
        }

        if (!event.preventDefault() && event.target && !isModifiedEvent(event) && event.button === 0) {
            event.preventDefault();

            const { history, route } = this.context.router;
            const { to } = this.props;

            route.changeLocation(to)
        }

    }

    createHref() {
        const { to } = this.props;

        return `#${to}`;
    }

    render() {
        const href = this.createHref();
        return (
            <a href={href} onClick={this.handleClick.bind(this)}>{this.props.children}</a>
        );
    }
}

Link.STATE = {
    to: {
    },
    onClick: {
    }
}

export default Link;
