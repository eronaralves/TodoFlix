import React, { useState, useEffect } from 'react';

//Utils
import {Posters} from "../../Utils/consts"


import { useLocation } from "react-router-dom" 

// Components
import Card from "../../components/Card";
import Container from "../../components/Container"
import Modal from "../../components/Modal"

import {
  Content,
  BoxCards
} from "./styles"


export default function Pesquisa(){
  
  const [posters, setPosters] = useState(Posters)
  const [postersFiltrados, setPostersFiltrados] = useState([])
  const [valueSearch, setValueSearch] = useState("")
  const [itemSelecionado, setItemSelecionado] = useState(null)
  
  const { search } = useLocation();

  const handleShowModal = (item) => {
    setItemSelecionado(item)
  }

  const back = () => {
    setItemSelecionado(null)
  }

  useEffect(() => {
    const storageAssistidos = JSON.parse(localStorage.getItem("posters")) || [];

    setPosters(storageAssistidos)

  }, [])

  useEffect(() => {
    if(search) {
      const params = new URLSearchParams(search) 
      const value  = params.get("query");
      const filtro = posters.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))

      setPostersFiltrados(filtro)
      setValueSearch(value)
    }
  }, [search])

  return(
        <Container>
          {itemSelecionado && (
            <Modal item={itemSelecionado} onClose={() => back()} ></Modal>
          )}
          <Content>
            <h2 ><strong>Pesquisa: </strong> {valueSearch}</h2>
            <BoxCards>
              {postersFiltrados.map((item, index) => (
                <Card key={index} item={item} onClick={() => handleShowModal(item)} />
              ))}
            </BoxCards>
          </Content>
        </Container>
  )
}