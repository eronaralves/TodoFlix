import React from 'react';
import ReactStars from "react-rating-stars-component";

import { IoClose } from 'react-icons/io5';
import { Posters } from "../../Utils/consts.js"


//icons
import Avaliacao from "../../assets/images/curtir.svg"
import MaisInfo from "../../assets/images/mais-info.svg"


import {
  Container,
  Modal,
  BoxButtonnBack,
  Button,
  BoxIcons,
  BoxAvaliation
  
} from './styles';

const infoStars = {
  size: 42,
  color: "#fff",
  activeColor: "green",
  a11y: true
}

export default class Moda extends React.Component {
  state = {
    oAssistido: false,
    eFavoritos: false
  }

  adiconarAssistidos = () => {
    
    const itemClicado = this.props.item
    const storageAssistidos = JSON.parse(localStorage.getItem("assistidos")) || [];
    const temItem = storageAssistidos.find((item) => item.id === itemClicado.id)
    
    if(!temItem) {
      const novoAssistidos = [
        ...storageAssistidos,
        itemClicado
      ]

      localStorage.setItem("assistidos", JSON.stringify(novoAssistidos));
      
      this.setState({
        oAssistido: true
      })
    } else {
      const todosMenosOqueEuQuero = storageAssistidos.filter((item) => item.id !== itemClicado.id)

      localStorage.setItem("assistidos", JSON.stringify(todosMenosOqueEuQuero));

      this.setState({
        oAssistido: !this.state.oAssistido
      })
    }

  }

  componentDidMount() {

    const storageAssistidos = JSON.parse(localStorage.getItem("assistidos")) || [];

    const temItem = storageAssistidos.find((item) => item.id === this.props.item.id)

    if(temItem) {
      this.setState({
        oAssistido: true
      })
    }
  }
 

  render(){
    return(
      <>
        <Container onClick={this.props.onClose}>

        </Container>
        <Modal> 
          <BoxButtonnBack>
            <IoClose size={30} color="#fff"  onClick={this.props.onClose}/>
          </BoxButtonnBack>
          <img src={this.props.item.img} alt={`Posters do filme ${this.props.item.name}`} width="100%"/>
          <BoxIcons>
            <div>
              {this.state.oAssistido ? (
                <Button onClick={() => this.adiconarAssistidos()}>Ja assisti</Button>
              ) : (
                <Button onClick={() => this.adiconarAssistidos()}>Assisti Agora</Button>
              )}
            </div>
            <img src={Avaliacao}/>
            <img src={MaisInfo}/>
          </BoxIcons>
          <h2>{this.props.item.name}</h2>
          <p>{this.props.item.info}"</p>
          <BoxAvaliation>
            <ReactStars {...infoStars}/>
            <small>(4/5)</small>
          </BoxAvaliation>
        </Modal>
      </>
    );
  }
}