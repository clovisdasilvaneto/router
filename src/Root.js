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
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/doc'>Doc</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </header>
            <main>
                <Route path='/' component={Home} />
                <Route path='/doc' component={Doc} />
                <Route path='/contact' render={(props) => (
                    <h1>Contact</h1>
                )} />
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
            <ul>
                <li>
			        <Link to='/doc/introdution'>Introdution</Link>
                </li>
                <li>
                    <Link to='/doc/getting-started'>Getting Started</Link>
                </li>
            </ul>

			<h1>Document</h1>
            <Route path='/doc' render={() => (
                <p>Introdution</p>
            )}/>
			<Route path='/doc/getting-started' render={() => (
                <h3>Getting Started</h3>
            )} />
            <Route path='/doc/introdution' render={() => (
                <h3>Introdution</h3>
            )} />
		</div>
    );
}

export { Root };
export default Root;
