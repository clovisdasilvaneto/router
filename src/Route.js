'use strict';

import Component from 'metal-jsx';

class Route extends Component {

    matchPath() {
        
    }

    extractParam(path, location) {
        console.log(path.split(" "), location.split(" "))
        return false;
    }

    getContext() {
        return this.context;
    }

    render() {
        //console.log(this);

        const { location } = this.context.router.route;
        const { path, component, render } = this.props;
        
        if(path === location) {
            if (!render) {
                return <div>{component()}</div>;
            }

            return <div>{render(this.props)}</div>
        }
    }
}

Route.STATE = {
    path: {},
    component: {},
    render: {}
}

export default Route;
