import React, { useState, useEffect } from "react"

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

export default function Todos(props){

  const [posters, setPosters] = useState(Posters)
  const [itemSelecionado, setItemSelecionado] = useState(null)

  const handleShowModal = (item) => {
    
    setItemSelecionado(item)
  } 

  const back = () => {
    setItemSelecionado(null)
  }

  //componentDidMount
  useEffect(() => {
    const storagePoster = JSON.parse(localStorage.getItem("posters")) || [];
    console.log(storagePoster)
    if(storagePoster.length > 0) {
      setPosters(storagePoster)
    } else {
      localStorage.setItem("posters", JSON.stringify(Posters))

      setPosters(Posters)
    }
  }, [])

  useEffect(() => {

    const storagePoster = JSON.parse(localStorage.getItem("posters"))

    setPosters(storagePoster)

  }, [props.adicionouFilme])

  

    return(
      <Container>
        {itemSelecionado && (
          <Modal item={itemSelecionado} onClose={() => back()} ></Modal>
        )}
        <Content>  
          <h2>Todos</h2>
          <BoxCards>
            {posters.map((item, index) => (
              <Card key={index} item={item} onClick={() => handleShowModal(item)}/>
            ))}
          </BoxCards>
        </Content>
      </Container>
        
      
    )
}