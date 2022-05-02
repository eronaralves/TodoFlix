import React, { useState, useEffect } from "react"

//Components
import Card from "../../components/Card"
import Modal from "../../components/Modal"
import Container from "../../components/Container"



import {
  Content
} from "./styles"


export default function Adicionados(props) {

  const [posters, setPosters] = useState(null)
  const [close, setClose] = useState(true)
  const [itemSelecionado, setItemSelecionado] = useState(null)

  const handleShowModal = (item) => {
    setItemSelecionado(item)
  }

  const back = () => {
    setItemSelecionado(null)
  }


  useEffect(() => {
    const storagePosters = JSON.parse(localStorage.getItem("posters"))

    setPosters(storagePosters)

  }, [props.adicionouFilme])


    return(
      <>
        {itemSelecionado && (
          <Modal item={itemSelecionado} onClose={() => back()} ></Modal>
        )}
      <Container>
          <Content>
            {posters !== null && (
              <>
                {posters.map((item, index) => (   
                  <Card key={index} item={item} onClick={() => handleShowModal(item)} close={close} estadoDoAdiconado={setPosters}/>

                ))}
              </>
            )}
          </Content>            
      </Container>
      </>
    )

}