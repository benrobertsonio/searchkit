import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/src/App.tsx";

import SearchkitManager from "./domain/new/SearchkitManager.ts";
import { Router, Route, Link, Redirect } from 'react-router'
import history from "./domain/history.ts"
import SearchkitProvider from "./domain/new/SearchkitProvider.ts"

const searchkit = new SearchkitManager("movies")

searchkit.listenToHistory(history)


class Root extends React.Component<any, any> {
	render(){
		return (
			<SearchkitProvider searchkit={searchkit}>
				<App/>
			</SearchkitProvider>
		)
	}
}


ReactDOM.render((
	<Router history={history}>
		<Route path="/movies-app" component={Root}/>
	</Router>
), document.getElementById('root'))
