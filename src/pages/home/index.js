import React from "react"

// Components
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Container from "../../components/Container"


//Ultis
import {Posters} from "../../Utils/consts"


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
  TitleSection
} from "./styles"

const infoCarousel = {
  itemsToShow: 5,
  wrapAround: true,
  pagination: false,
  breakPoints: [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 850, itemsToShow: 5 },
  ]
}

export default class Home extends React.Component {
  
  state = {
    posters: Posters,
    itemSelecionado: null,
  }

  myArrow({ type, onClick, isEdge }) {
    
    return (
      <ArrowButton type={type} isEdge={isEdge} onClick={onClick}>
        <img src={ArrowImage} alt=""/>
      </ArrowButton>
    )
  }
  
  handleShowModal = (item) => {
    this.setState({
      itemSelecionado: item,
    })
  }

  back = () => {

    this.setState({
      itemSelecionado: null
    })
  }


  render(){
    
    return(
      <>
        {this.state.itemSelecionado && (
          <Modal item={this.state.itemSelecionado} onClose={() => this.back()} ></Modal>
        )}

        <Container>
          <BoxDestaque>
            <img src={CapitaoFantastico} alt="Capa do filme Capitão Fantastico" width="450px"/> 
            <InfoDestaque>
            
              <span>Visto recentemente</span>
              <h2>Capitão Fantástico</h2>
              <p>Nas florestas do estado de Washington, um pai cria seus seis filhos longe da civilização, em uma rígida rotina de aventuras. Ele é forçado a deixar o isolamento e leva sua família para encarar o mundo, desafiando sua ideia do que significa ser pai.</p>
            </InfoDestaque>  
          </BoxDestaque>
        </Container>
        <BoxCards>
          <TitleSection>Destaques</TitleSection>
          <CarouselContainer>
            <CarouselBox renderArrow={this.myArrow} {...infoCarousel}>

              {this.state.posters.map((item, index) => (
                <Card key={index} item={item} onClick={() => this.handleShowModal(item)}/>
              ))}
    
            </CarouselBox>
          </CarouselContainer>
      </BoxCards>
      </>
    )
  }
}