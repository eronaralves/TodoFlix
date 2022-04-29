import React from "react"

//Utils
import {Posters} from "../../Utils/consts"

// Components
import Card from "../../components/Card";
import Container from "../../components/Container"
import Modal from "../../components/Modal"



import {
  Content,
  BoxCards
} from "./styles"

export default class Todos extends React.Component {
  state = {
    posters: Posters,
    itemSelecionado: null
  }
x
  handleShowModal = (item) => {
    
    this.setState({
      itemSelecionado: item
    })
  } 

  back = () => {
    this.setState({
      itemSelecionado: null
    })
  }

  
  render(){
    return(
      <Container>
        {this.state.itemSelecionado && (
          <Modal item={this.state.itemSelecionado} onClose={() => this.back()} ></Modal>
        )}
        <Content>  
          <h2>Todos</h2>
          <BoxCards>
            {this.state.posters.map((item, index) => (
              <Card key={index} item={item} onClick={() => this.handleShowModal(item)}/>
            ))}
          </BoxCards>
        </Content>
      </Container>
        
      
    )
  }
}