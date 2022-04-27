import React from "react"

//Components
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import Container from "../../components/Container"

import {
  Content
} from "./styles"

const storageAdicionados = localStorage.getItem("adicionados")
const jsonStorageFavoritos = JSON.parse(storageAdicionados) 

export default class Adicionados extends React.Component {

  state = {
    todosAdicionados: jsonStorageFavoritos
  }

 


  render(){
    return(
      <Container>
        {storageAdicionados ? (
          <Content>
            
              <Content>
                {this.state.todosAdicionados.map((item, index) => ( 
                  <div>
                    <Card key={index} item={item} onClick={() => this.handleShowModal(item)}/>
                    
                  </div>      
              ))}
              </Content>
           
          </Content>
        ) : (
          <>
          </>
        )}
        
        
        
      </Container>
    )
  }
}