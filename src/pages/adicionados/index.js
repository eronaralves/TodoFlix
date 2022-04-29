import React from "react"

//Components
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import Container from "../../components/Container"



import {
  Content,
  BoxIcon
} from "./styles"

const storageAdicionados = localStorage.getItem("adicionados")
const jsonStorageFavoritos = JSON.parse(storageAdicionados) 

export default class Adicionados extends React.Component {

  state = {
    todosAdicionados: jsonStorageFavoritos,
    close: true,
  }

  
 

  render(){
    return(
      <Container>
        {storageAdicionados ? (
          <div>
            
              <Content>
                {this.state.todosAdicionados.map((item, index) => ( 
                   
                    <Card key={index} item={item} onClick={() => this.handleShowModal(item)} close={this.state.close} />
                   
                ))}
              </Content>
            
          </div>
        ) : (
          <>
          </>
        )}
      </Container>
    )
  }
}