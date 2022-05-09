import React, { useEffect, useState} from "react"

//icons
import { IoHeartOutline, IoHeartSharp, IoClose } from 'react-icons/io5';

import {
  BoxDestaque,
  InfoDestaque
} from "./styles"

export default function CardDestaque(props) {

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

  useEffect(() => {
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
  }, [])


  return (
    <BoxDestaque>
      <img src={props.item.img} alt={`Capa do filme: ${props.item.name}`} width="450px"/> 
      <InfoDestaque>
        <div className="icon-favoritos" onClick={() => adiconarFvoritos()}>
          {eFavorito ? (
            <IoHeartSharp color="#E71B27" size={22}/>
          ) : (
            <IoHeartOutline size={22}/>
          )}
        </div>
        <span>{props.item.jaAssisti}</span> 
        <h2>{props.item.name}</h2>
        <p>{props.item.info}</p>
      </InfoDestaque>  
    </BoxDestaque>
  )
}