import React, { useState, useEffect } from "react"

// Components
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Container from "../../components/Container"
import CardDestaque from "../../components/CardDestaque"


//Ultis
import {Posters, Destaque} from "../../Utils/consts"


// Images
import CapitaoFantastico from "../../assets/images/capitao-fantastico.png"
import ArrowImage from "../../assets/images/arrow.svg";

import {
  BoxDestaque,
  InfoDestaque,
  BoxCards,
  CarouselBox,
  CarouselContainer,
  ArrowButton,
  TitleSection,
  Button
} from "./styles"

const infoCarousel = {
  itemsToShow: 5,
  wrapAround: true,
  pagination: false,
  breakPoints: [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 550, itemsToShow: 3,},
    { width: 850, itemsToShow: 5 },
  ]
  
}

export default function Home(props) {
  


  const [posters, setPosters] = useState(Posters)
  const [cardDestaque, setCardDestaque] = useState(Destaque)
  const [itemSelecionado, setItemSelecionado] = useState(null)

  const myArrow = ({ type, onClick, isEdge }) => {
    return (
      <ArrowButton type={type} isEdge={isEdge} onClick={onClick}>
        <img src={ArrowImage} alt=""/>
      </ArrowButton>
    )
  }
  
  const handleShowModal = (item) => {
    setItemSelecionado(item)
  }

  const back = () => {
    setItemSelecionado(null)
  }
  

  useEffect(() => {

    const storagePosters = JSON.parse(localStorage.getItem("posters")) || [];

    if(storagePosters.length > 0) {

      setPosters(storagePosters)      
    } else {
      localStorage.setItem("posters", JSON.stringify(Posters))

      setPosters(Posters)
    }
    

  }, []);

  const atualizarPosters = () => {
    const storagePosters = JSON.parse(localStorage.getItem("posters"))
    
    setPosters(storagePosters)
  }

  useEffect(() => {
    

  }, [props.adicionouFilme]);


    return(
      <>
        {itemSelecionado && (
          <Modal item={itemSelecionado} onClose={() => back()} ></Modal>
        )}

        <Container>
          {cardDestaque.map((item, index) => (
            <CardDestaque item={item} key={index}/>
          ))}

        </Container>
        <BoxCards>
          <TitleSection>Destaques</TitleSection>
          <CarouselContainer>
            <CarouselBox renderArrow={myArrow} {...infoCarousel}>

              {posters.map((item, index) => (
                <Card key={index} item={item} onClick={() => handleShowModal(item)}/>
              ))}
    
            </CarouselBox>
          </CarouselContainer>
      </BoxCards>
      </>
    )
}