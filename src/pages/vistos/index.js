import React from "react"


import {
  Content,
  BoxCards
} from "./styles.js"

//Componentes
import Card from "../../components/Card"
import Container from "../../components/Container"
import Modal from "../../components/Modal"




export default class Vistos extends React.Component {
  
  state = {
    todosAssistidos: [],
    itemSelecionado: null,
    teste: true
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
    const storageAssistidos = localStorage.getItem("assistidos")

    if(storageAssistidos) {
      const jsonStorageAssistidos = JSON.parse(storageAssistidos)

      this.setState({
        todosAssistidos: jsonStorageAssistidos
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
            <h2>Ja assistidos</h2>
            <BoxCards>
              {this.state.todosAssistidos.map((item, index) => (
                <Card key={index} item={item} onClick={() => this.handleShowModal(item)} teste={this.state.teste}/>
              ))}
            </BoxCards>
          </Content>
        </Container>
        
      )
    }
  }