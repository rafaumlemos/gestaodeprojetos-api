import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../Login";
import { MockPage } from "../MockPage";

const Root: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/login" component={Login} />
				<Route path="/mockPage" component={MockPage} />
			</Switch>
		</Router>
	);
};

export default Root;
