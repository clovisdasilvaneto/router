'use strict';

import { globals } from './';
import Component from 'metal-jsx';

class BrowserRouter extends Component {
    created() {   
        this.onPopState();
        this.context = {
            router: {
                history: {
                    root: [],
                    pushToHistory: (to, replace = null) => {
                        this.pushToHistory(to, replace)
                    }
                },
                route: {
                    location: document.location.hash.replace('#', ''),
                    change: (to) => {
                        this.changeLocation(to)
                    }
                }
            }
        };
    }

    pushToHistory(to, replace) {
        let { history } = this.context.router;
        let mount = {
            to: to,
            replace: replace
        }

        history.root.push(mount);
        this.pushStateHistory(to);
    }

    pushStateHistory(path, state = null) {
        globals.window.history.pushState(state, null, `#${path}`);
    }

    onPopState() {
        globals.window.onpopstate = (event) => {
            event.preventDefault();

            const { route } = this.context.router;
            const { pathname } = document.location;

            this.pushToHistory(pathname, null);
            route.change(pathname);
        }
    }

    changeLocation(to) {
        this.context.router.route.location = to;

        this.setState({
            location: to
        });
    }
    
    render() {
        return this.props.children;
    }
}

BrowserRouter.STATE = {
    location: {
        value: '/'
    }
}

export default BrowserRouter;
