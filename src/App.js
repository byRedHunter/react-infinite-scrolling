import { lazy, Suspense } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	Link,
} from 'react-router-dom'

const FormaUno = lazy(() => import('./pages/FormaUno'))
const FormaDos = lazy(() => import('./pages/FormaDos'))
const FormaTres = lazy(() => import('./pages/FormaTres'))

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Primera Forma</Link>
						</li>
						<li>
							<Link to='/forma-dos'>Segunda Forma</Link>
						</li>
						<li>
							<Link to='/forma-tres'>Tercera Forma</Link>
						</li>
					</ul>
				</nav>

				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={FormaUno} />
						<Route path='/forma-dos' component={FormaDos} />
						<Route path='/forma-tres' component={FormaTres} />
						<Redirect to='/' />
					</Switch>
				</Suspense>
			</div>
		</Router>
	)
}

export default App
