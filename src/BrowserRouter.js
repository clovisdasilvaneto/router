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
                    change: (to) => {
                        this.changeLocation(to)
                    }
                }
            }
        };
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
