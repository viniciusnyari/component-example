import React from 'react';
import { FiMail, FiLock } from "react-icons/fi";

import { Container, Content} from './styles';

import Input from "../../Components/Input/index";
import Button from "../../Components/Button/index";



export default class Signin extends React.PureComponent {
  
  state = {    
    email: "",
    password: ""
  };

  handleInput = (hEvent: React.ChangeEvent<HTMLInputElement>): void => {    
    this.setState({ [hEvent.target.name]: hEvent.target.value });
  };
  
  handleAdd = (hEvent: React.MouseEvent): void => {
    alert("E-mail: " + this.state.email + " " + "Senha: " + this.state.password);
    // this.setState(
    //   {
    //     id: this.state.name + this.state.age
    //   },
    //   () => {
    //     this.props.startAddUser({
    //       id: this.state.id,
    //       name: this.state.name,
    //       age: this.state.age
    //     });
    //   }
    // );
  };
  
  render() {
    return (
      <Container>
      <Content>
        <form>
          
          <h1>Faça seu login</h1>

          <Input
              icon={FiMail}                  
              type="email"
              label="email"                  
              autoComplete="false"
              inputHandler={this.handleInput} />      

          <Input
              icon={FiLock}
              type="password"
              label="password"
              placeholder="Senha"
              inputHandler={this.handleInput} />                   
  
          <Button onClick={this.handleAdd}>Add</Button>
  
            <a href="forgot">Esqueci minha senha</a>
        </form>        
      </Content>
    </Container>
    )
  }
}
/*export default class Signin extends React.Component {
 
  Acessar = () => {
    alert("Aessando o ambiente" );
  };

  render() {
    return (
      <Container>
        <Content>
          <form>
            <h1>Faça seu login</h1>
  
            <Input
              icon={FiMail}
              name="email"
              placeholder="E-mail"
              autoComplete="false"
            />
  
            
          </form>
        </Content>
      </Container>
    )
  }
};
 */
  
 