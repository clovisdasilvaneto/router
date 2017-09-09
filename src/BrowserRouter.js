'use strict';

import { globals } from './';
import Component from 'metal-jsx';

class BrowserRouter extends Component {
    created() {
        this.onPopState();        
        this.context = {
            router: {
                history: [],
                route: {
                    location: this.setInitalLocation(globals.document.location),
                    change: (to, replace = null) => {
                        this.changeLocation(to)
                    }
                },
                provider: {
                    hashPrefix: this.props.hash
                },
            }
        };

        this.pushToHistoryModel(this.context.router.route.location, null);
    }

    setInitalLocation(location) {
        if (this.props.hash) {
            return location.hash || '#/';
        }

        return location.pathname || '/';
    }

    getRouterContext() {
        return this.context.router;
    }

    onPopState() {
        globals.window.onpopstate = (event) => {
            event.preventDefault();

            const { route } = this.context.router;
            const { pathname } = document.location;

            route.change(pathname, null);
        }
    }

    changeLocation(to, replace) {
        if (this.props.hash && to.indexOf('#/') !== 0) {
            to = `#${to}`;
        }

        this.pushToHistoryModel(to, replace);
        this.context.router.route.location = to;

        this.setState({
            location: to
        });
    }

    pushToHistoryModel(to, replace) {
        let { history } = this.context.router;
        let mount = {
            to: to,
            replace: replace
        }

        history.push(mount);
        this.pushHistoryApi(to);
    }

    pushHistoryApi(path, state = null) {
        globals.window.history.pushState(state, null, path);
    }
    
    render() {
        return this.props.children;
    }
}

BrowserRouter.PROPS = {
    hash: {
        value: true,
    }
}

BrowserRouter.STATE = {
    location: {
        value: '/',
        internal: true,
    }
}

export default BrowserRouter;
