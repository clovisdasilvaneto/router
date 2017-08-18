'use strict';

import Component from 'metal-jsx';

class Route extends Component {

    matchPath(path, location) {
        let comparePathAndLocation = path.localeCompare(location);
        
        if(comparePathAndLocation == '-1' || comparePathAndLocation === 0) {
            return true;
        }
        return false;
    }

    extractParam() {
    }

    getContext() {
        return this.context;
    }

    render() {
        const { location } = this.context.router.route;
        const { path, component, render, dyna } = this.props;
        
        if((path === location && !dyna) || (dyna && this.matchPath(path, location))) {
            if (!render) {
                return component();
            }

            return render(this.props)
        }
    }
}

Route.STATE = {
    path: {},
    component: {},
    render: {}
}

export default Route;
