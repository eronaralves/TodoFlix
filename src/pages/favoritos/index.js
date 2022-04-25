import React from "react"


import {
  Content,
  BoxCards
} from "./styles.js"

//Componentes
import Card from "../../components/Card"
import Container from "../../components/Container"
import Modal from "../../components/Modal"




export default class Favoritos extends React.Component {
  
  state = {
    todosFavoritos: [],
    itemSelecionado: null
  }


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

  componentDidMount() {
    const storageFavoritos = localStorage.getItem("favoritos")

    if(storageFavoritos) {
      const jsonStorageFavoritos = JSON.parse(storageFavoritos)

      this.setState({
        todosFavoritos: jsonStorageFavoritos
      })
    }
  }
   
    render(){
      return(
        <Container>
        {this.state.itemSelecionado && (
          <Modal item={this.state.itemSelecionado} onClose={() => this.back()} ></Modal>
        )}
        <Content>  
          <h2>Favoritos</h2>
          <BoxCards>
          {this.state.todosFavoritos.map((item, index) => (
            <Card key={index} item={item} onClick={() => this.handleShowModal(item)}/>
          ))}
          </BoxCards>
       </Content>
      </Container>
        
      )
    }
}