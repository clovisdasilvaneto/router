'use strict';

import { History, Router } from './';
import Component from 'metal-jsx';

class BrowserRouter extends Component {
    created() {   
        this.context = {
            router: {
                history: {
                    push: (to) => {
                        
                    }
                },
                route: {
                    location: '/',
                    changeLocation: (to) => {
                        this.changeLocation(to)
                    }
                }
            }
        };
    }

    changeLocation(to) {
        let { location } = this.context.router.route;

        this.setState({
            location: to
        });
        location = to;
    }
    
    render() {
        return(
            <Router location={this.state.location}>{this.props.children}</Router>
        );
    }
}

BrowserRouter.STATE = {
    location: {
        value: '/'
    }
}

export default BrowserRouter;
