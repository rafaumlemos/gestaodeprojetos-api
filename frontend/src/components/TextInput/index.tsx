import * as React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

export const TextInputComp = () => {
	const classes = useStyles();
	return (
		<TextField
			id="outlined-required"
			label="Email"
			defaultValue=""
			className={classes.textField}
			margin="normal"
			variant="outlined"
		/>
	);
};

export const TextInput = TextInputComp;
