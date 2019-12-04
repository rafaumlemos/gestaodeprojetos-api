import * as React from "react";
import { Link } from "react-router-dom";
import RecipeReviewCard from "../Content/index"
import "./index.css"
import { Button, TextareaAutosize } from "@material-ui/core";

export const MockPageComp = () => {
	return (
		<div className="dale">
			<div className="dale3">
				<div>
					<TextareaAutosize placeholder="Insira sua publicação" rows={3} rowsMax={5}></TextareaAutosize>
				</div>
				<div>
					<Button color="primary">Publicar</Button>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="A" title="teste" subheader="September 14, 2016" image="1" content="auhauhauhauhauhau" feedback="uahauhauhauhauhauhauhuah"/>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="B" title="teste2" subheader="September 14, 2016" image="1" content="auhauhauhauhauhau" feedback="uahauhauhauhauhauhauhuah"/>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="C" title="teste3" subheader="September 14, 2016" image="1" content="auhauhauhauhauhau" feedback="uahauhauhauhauhauhauhuah"/>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="D" title="teste4" subheader="September 14, 2016" image="1" content="auhauhauhauhauhau" feedback="uahauhauhauhauhauhauhuah"/>
				</div>
			</div>
		</div>
	);
};

export const MockPage = MockPageComp;
