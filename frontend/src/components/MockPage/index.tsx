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
					<RecipeReviewCard avatar="RL" title="Rafael Lemos" subheader="Novembro 14, 2019" image="1" content="Café de manhã de hoje! #focototal" feedback="Evite bacon pelo café da manhã"/>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="JS" title="Maria Santos" subheader="Novembro 12, 2019" image="2" content="Que saudade que eu estava da academia! Voltando após cirurgia" feedback="Pegue leve! Bom treino!"/>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="PS" title="João Pedro" subheader="Outubro 25, 2019" image="3" content="De volta aos treinos após lesão no joelho!" feedback="É isso aí, jogador! Não se esqueça de treinar apenas um turno!"/>
				</div>
				<div className="dale2">
					<RecipeReviewCard avatar="EM" title="Equipe Médica" subheader="Outubro 10, 2019" image="4" content="Você conhece os benefícios dos exercícios físicos? São inúmeros: diminuição e controle de peso, aumento das taxas do bom colesterol, combate a insônia" feedback=""/>
				</div>
			</div>
		</div>
	);
};

export const MockPage = MockPageComp;
