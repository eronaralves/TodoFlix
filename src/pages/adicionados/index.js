import React from "react"

//Components
import Card from "../../components/Card"
import Modal from "../../components/Modal"

import {
  Container
} from "./styles"

const storageAdicionados = localStorage.getItem("adicionados")
const jsonStorageFavoritos = JSON.parse(storageAdicionados)
export default class Adicionados extends React.Component {

  state = {
    todosFavoritos: []
  }

  componentDidMount() {

    if(storageAdicionados){
      this.setState({
        todosFavoritos: [jsonStorageFavoritos]
      })

    }
  }

  // handleShowModal = (item) => {
    
  //   this.setState({
  //     itemSelecionado: item
  //   })

  // } 

  // back = () => {
  //   this.setState({
  //     itemSelecionado: null
  //   })
  // }
 


  render(){
    console.log(this.state.todosFavoritos)
    return(
      <div>
        {storageAdicionados ? (
          <Container>
            {this.state.todosFavoritos.map((item, index) => ( 
              <div>
                <Card key={index} item={item} onClick={() => this.handleShowModal(item)}/>
                {item.name}
                </div>
                
            ))}
          </Container>
        ) : (
          <>
          </>
        )}
        
        
        
      </div>
    )
  }
}