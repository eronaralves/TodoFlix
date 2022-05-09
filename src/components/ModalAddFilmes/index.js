import React, { useState } from "react"
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

export default function ModalAddFilmes(props) {


  const [name, setName] = useState("")
  const [img, setImg] = useState(Shrek)
  const [info, setInfo] = useState("")
  const [jaAssisti, setJaAssisti] = useState(false)
  const [nota, setNota] = useState(0)
  


  const inputNome = (event) => {

    setName(event.target.value)
    
  }

  const inputTextArea = (event) => {

    setInfo(event.target.value)
    
  }

  const ratingChanged = (newRating) => {
    setNota(newRating)
  };

  const storageInput = () => {
    const itemClicado = {name,img,info,jaAssisti,nota}
    const storageAssistidos = JSON.parse(localStorage.getItem("posters")) || [];
  
    
    
    if(storageAssistidos) {
        let novos = [
          ...storageAssistidos,
          itemClicado
        ]

        localStorage.setItem("posters", JSON.stringify(novos));
        
    } else {
      let novos = [
        itemClicado
      ]
      localStorage.setItem("posters", JSON.stringify(novos));
    }

    props.modalAtivar(false)
    props.filmeAdicionado()
  }

  const sairDoModal = () => {
    props.modalAtivar(false)
  }




    return(
      <>
        {props.showModal && (
        <>
          <Container onClick={props.onClose}>
          </Container>
          <Content>
            <BoxOnCLocse onClick={props.onClose}>
              <IoClose size={30} color="#fff" />
            </BoxOnCLocse>
            <BoxForm>
              <form>
                <h2>Editar Dados</h2>
                
                <BoxLabel>
                  <label htmlFor="name">Nome</label>
                  <input id="name" type="text"wrap="hard" onChange={inputNome}/>
                </BoxLabel>
                <BoxLabel>
                  <div>
                    <label htmlFor="descricao">Descrição</label>
                    <span>0/200</span>
                    </div>
                  <textarea  id="nao-assistido" cols="30" rows="5" onChange={inputTextArea}></textarea>
                </BoxLabel>

                <label>Status</label>
                <BoxRadio>
                  <div>
                    <input id="assistido" type="radio" name="Assistidos" value="dsad"/>
                    <label htmlFor="assistido">Já assisti</label> 
                  </div>
                  <div>
                    <input id="nao-assistido" type="radio" name="Assistidos" value={false}/>
                    <label htmlFor="nao-assistido">Ainda não assisti </label>
                  </div>
                </BoxRadio>
                <BoxNota>
                  <h3>Nota</h3>
                  <div>
                    <ReactStars
                      value={nota}
                      onChange={(starRating) => ratingChanged(starRating)}
                      size={37}
                      color="#fff"
                      activeColor="#E71B27"
                    /> 
                    ({nota}/5)
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
              <button onClick={() => sairDoModal()}>Cancelar</button>
              <button onClick={() => storageInput()}>Confirmar</button>
            </Boxconfirmation>
          </Content>
        </>
      )}
      </>
    );

}