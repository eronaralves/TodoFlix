import React, { useState, useEffect } from "react"

//icons
import { IoHeartOutline, IoHeartSharp, IoClose } from 'react-icons/io5';

import {
  CardContainer,
  ContentCard,
  BoxAvaliacao,
  BoxInfoFilme
} from './styles';


export default function Card(props) {

  const [eFavorito, setEFavorito] = useState(false)

  const adiconarFvoritos = () => {
    const itemClicado = props.item;
    
    const storageFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    const temItem = storageFavoritos.find((item) => item.id === itemClicado.id);
    
    if(storageFavoritos){
      setEFavorito(true)

      if(!temItem) {
        const novosFavoritos = [
          ...storageFavoritos,
          itemClicado
        ];
  
        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

        setEFavorito(true)

      } else {
        const todosMenosOqueEuQuero = storageFavoritos.filter((item) => item.id !== itemClicado.id)
  
        localStorage.setItem("favoritos", JSON.stringify(todosMenosOqueEuQuero));
  
        setEFavorito(false)
        
      }
    }
  }

  const onCloseCard = () => {
    const itemClicado = props.item;
    
    const storagePosters = JSON.parse(localStorage.getItem("posters")) || [];
    
     
    const todosMenosOqueEuQuero = storagePosters.filter((item) => item.name !== itemClicado.name)

    localStorage.setItem("posters", JSON.stringify(todosMenosOqueEuQuero));

    // window.location.reload(true)
    props.estadoDoAdiconado(todosMenosOqueEuQuero)
  }

  useEffect(() => {
    const storageFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const temItem = storageFavoritos.find((item) => item.id === props.item.id)
    if(temItem) {
      setEFavorito(true)
    }
  }, [])

 

 
    return(
      <CardContainer className="card">
        <ContentCard >
          {props.close && (
            <div className="icon-close" onClick={()=> onCloseCard()}>
              <IoClose fontSize={25} color="#fff"/>
            </div>
          )}
            
          <div className="icon-favoritos" onClick={() => adiconarFvoritos()}>
            {eFavorito ? (
              <IoHeartSharp color="#E71B27" size={22}/>
            ) : (
              <IoHeartOutline size={22}/>
            )}
          </div>

          <BoxInfoFilme onClick={props.onClick}>
            <img src={props.item.img} alt={`Capa do filme: ${props.item.name}`} />
            <BoxAvaliacao>
              <h3>{props.item.name}</h3>
              <span>{props.item.nota}</span>
            </BoxAvaliacao>
            <p>{props.item.info}</p>
          </BoxInfoFilme>
        </ContentCard>
     </CardContainer>
        
      
    )

}