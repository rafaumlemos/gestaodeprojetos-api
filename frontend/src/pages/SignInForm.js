import React, { Component } from 'react';
import api from "../services/api";

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    async handleSubmit(e) {
        const { email, password } = this.state;
        try {
            console.log("login efetuado");
            // const { data } = await api.post("login", { email, password });
        } catch (err) {
            this.setState({
                error:
                    "Houve um problema com o login, verifique suas credenciais."
            });
        }
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="insira seu email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">senha</label>
                <input type="password" id="password" className="FormField__Input" placeholder="insira sua senha" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Entrar</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;