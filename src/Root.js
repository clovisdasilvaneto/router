'use strict';

import { BrowserRouter, Route, Link } from './';
import Component from 'metal-jsx';

class Root extends Component {
    render() {
        return(
			<BrowserRouter>
				<App />
			</BrowserRouter>
        );
    }
}

const App = () => {
    return (
        <div class="wrapper">
            <header>
                <Link to='/'>Home</Link>
                <Link to='/doc'>Doc</Link>
            </header>
            <main>
                <Route path='/' component={Home} />
                <Route path='/doc' component={Doc} />
            </main>
        </div>
    );
}

const Home = () => {
    return (
        <h1>Hello World!</h1>
    );
}

const Doc = () => {
    return (
		<div>
			<Link to='/doc/getting-started'>Getting Started</Link>

			<h1>Document</h1>
			<Route path='/doc/getting-started' render={() => (
				<h3>Getting Started</h3>
			)} />
		</div>
    );
}

export { Root };
export default Root;
