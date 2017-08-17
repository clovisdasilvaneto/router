'use strict';

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
                    location: '/',
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

    pushStateHistory(path) {
        window.history.pushState(null, null, path);
    }

    onPopState() {
        window.onpopstate = (event) => {
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
        return(
            <div>{this.props.children}</div>
        );
    }
}

BrowserRouter.STATE = {
    location: {
        value: '/'
    }
}

export default BrowserRouter;
