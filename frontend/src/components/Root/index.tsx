import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../Login";
import { LoginPartner } from "../Login Partner";
import { MockPage } from "../MockPage";

const Root: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/login/user" component={Login} />
				<Route path="/login/partner" component={LoginPartner} />
				<Route path="/feed/user" component={MockPage} />
				<Route path="/feed/partner" component={MockPage} />
			</Switch>
		</Router>
	);
};

export default Root;
