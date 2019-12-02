import * as React from "react";
import { Link } from "react-router-dom";

export const MockPageComp = () => {
	return (
		<button>
			<Link to="/login">Logout</Link>
		</button>
	);
};

export const MockPage = MockPageComp;
