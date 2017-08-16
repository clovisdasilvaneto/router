'use strict';

import Component from 'metal-jsx';

class Route extends Component {

    checkMatch() {
        
    }

    getContext() {
        return this.context;
    }

    render() {
        //console.log(this);

        const { location } = this.context.router.route;
        const { path, component, render, children } = this.props;

        if(path === location) {
            return <div>{component()}</div>;
        }
    }
}

Route.STATE = {
    path: {},
    component: {},
    render: {}
}

export default Route;
