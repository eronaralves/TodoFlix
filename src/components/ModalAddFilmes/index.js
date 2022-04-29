import React from 'react';
import ReactStars from "react-rating-stars-component";

//images
import EmptyImage from "../../assets/images/empty-image.svg"
import Shrek from "../../assets/images/shrek.png"

//icons
import { IoClose} from 'react-icons/io5';


import {
  Container,
  Content,
  BoxOnCLocse,
  BoxForm,
  BoxLabel,
  BoxRadio,
  BoxNota,
  BoxCoverImage,
  Boxconfirmation
} from "./styles"


const infoStars = {
  size: 37,
  color: "#ff",
  activeColor: "red",
  a11y: true
  
}



export default class ModalAddFilmes extends React.Component {
  state = {
    

    name: "",
    img: Shrek,
    info: "",
    jaAssisti: false,
    nota: 4,
    
  }

  inputNome = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  inputTextArea = (event) => {
    this.setState({
      info: event.target.value,
    })
  }

  StorageInput = () => {
    const itemClicado = this.state
    const storageAssistidos = JSON.parse(localStorage.getItem("adicionados")) || [];
    
    
    if(storageAssistidos) {
        let novos = [
          ...storageAssistidos,
          itemClicado
        ]

        localStorage.setItem("adicionados", JSON.stringify(novos));
    } else {
      let novos = [
        itemClicado
      ]
      localStorage.setItem("adicionados", JSON.stringify(novos));
    }

    this.props.modalAtivar(false)
  }

  sairDoModal = () => {
    this.props.modalAtivar(false)
  }

  render(){
    return(
      <>
        {this.props.showModal && (
        <>
          <Container onClick={this.props.onClose}>
          </Container>
          <Content>
            <BoxOnCLocse onClick={this.props.onClose}>
              <IoClose size={30} color="#fff" />
            </BoxOnCLocse>
            <BoxForm>
              <form>
                <h2>Editar Dados</h2>
                
                <BoxLabel>
                  <label htmlFor="name">Nome</label>
                  <input id="name"ype="text" wrap="hard" onChange={this.inputNome}/>
                </BoxLabel>
                <BoxLabel>
                  <div>
                    <label htmlFor="descricao">Descrição</label>
                    <span>0/200</span>
                    </div>
                  <textarea  id="nao-assistido" cols="30" rows="5" onChange={this.inputTextArea}></textarea>
                </BoxLabel>

                <label>Status</label>
                <BoxRadio>
                  <div>
                    <input id="assistido" type="radio" />
                    <label htmlFor="assistido">Já assisti</label> 
                  </div>
                  <div>
                    <input id="nao-assistido" type="radio" />
                    <label htmlFor="nao-assistido">Ainda não assisti </label>
                  </div>
                </BoxRadio>
                <BoxNota>
                  <h3>Nota</h3>
                  <div>
                    <ReactStars {...infoStars}/> 
                    (0/5)
                  </div>
                </BoxNota>
              </form>

              <BoxCoverImage>
                <h3>imagem de Capa</h3>
                <div>
                  <img src={EmptyImage} alt="Image vazia"/>
                </div>
                <button>Selecionar imagem</button>
              </BoxCoverImage>

            </BoxForm>
            <Boxconfirmation>
              <button onClick={() => this.sairDoModal()}>Cancelar</button>
              <button onClick={() => this.StorageInput()}>Confirmar</button>
            </Boxconfirmation>
          </Content>
        </>
      )}
      </>
    );
  }
}