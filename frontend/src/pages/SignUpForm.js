import React, { Component } from 'react';
import api from "../services/api";

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            phone: ''
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
        const {email, password, name, phone} = this.state;
        try {
            const { data } = api.post("partnerAdmin/createUser", {
                name,
                email,
                password,
                phone,
                partnerId: "1",
                blocked: false,
                dueDate: new Date()
            });
            console.log(data);
            this.props.history.push("/feed/user");
        } catch (error) {
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
                <label className="FormField__Label" htmlFor="name">nome</label>
                <input type="text" id="name" className="FormField__Input" placeholder="nome do usuário" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">telefone</label>
                <input type="text" id="name" className="FormField__Input" placeholder="(71) 9 9999-9999" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">senha</label>
                <input type="password" id="password" className="FormField__Input" placeholder="******" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">email</label>
                <input type="email" id="email" className="FormField__Input" placeholder="seuemail@email.com" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Criar</button>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;