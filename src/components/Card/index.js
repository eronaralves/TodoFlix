import React from 'react';

import Shrek from "../../assets/images/shrek.png"
import SpiderMan from "../../assets/images/homem-aranha.png"
import HojeQueroVoltar from "../../assets/images/hoje-eu-quero-voltar-sozinho.png"
import QueHorasELa from "../../assets/images/que-horas-ela-volta.png"
import UmSonhoLiberdador from "../../assets/images/um-sonho-liberdade.png"

//icons
import { IoHeartOutline, IoHeartSharp, IoClose } from 'react-icons/io5';

import {
  CardContainer,
  ContentCard,
  BoxAvaliacao,
  BoxInfoFilme
} from './styles';



export default class Card extends React.Component {
  state = {
    eFavorito: false
   
  }

  adiconarFvoritos = () => {
    const itemClicado = this.props.item;
    
    const storageFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    const temItem = storageFavoritos.find((item) => item.id === itemClicado.id);
    
    if(storageFavoritos){
      this.setState({
        eFavorito: true
      })

      if(!temItem) {
        const novosFavoritos = [
          ...storageFavoritos,
          itemClicado
        ];
  
        localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

        this.setState({
          eFavorito: true
        })

      } else {
        const todosMenosOqueEuQuero = storageFavoritos.filter((item) => item.id !== itemClicado.id)
  
        localStorage.setItem("favoritos", JSON.stringify(todosMenosOqueEuQuero));
  
        this.setState({
          eFavorito: false
        })
      }
    }
  }

  onCloseCard = () => {
    const itemClicado = this.props.item;
    
    const storageAdicionados = JSON.parse(localStorage.getItem("adicionados")) || [];
    
     
    const todosMenosOqueEuQuero = storageAdicionados.filter((item) => item.name !== itemClicado.name)

    localStorage.setItem("adicionados", JSON.stringify(todosMenosOqueEuQuero));
  }



  componentDidMount() {
    const storageFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const temItem = storageFavoritos.find((item) => item.id === this.props.item.id)


      if(temItem) {
        this.setState({
          eFavorito: true
        })
      }

    // const itemClicado = this.props.item;
    
    // const storageAdicionados = JSON.parse(localStorage.getItem("adicionados")) || [];
    
     
    // const todosMenosOqueEuQuero = storageAdicionados.filter((item) => item.name !== itemClicado.name)

    // localStorage.setItem("adicionados", JSON.stringify(todosMenosOqueEuQuero));

  }

  render(){
    return(
      <CardContainer className="card">
        <ContentCard >
          {this.props.close && (
            <div className="icon-close" onClick={()=> this.onCloseCard()}>
              <IoClose fontSize={25} color="#fff"/>
            </div>
          )}
            
          <div className="icon-favoritos" onClick={() =>   this.adiconarFvoritos()}>
            {this.state.eFavorito ? (
              <IoHeartSharp color="#E71B27" size={22}/>
            ) : (
              <IoHeartOutline size={22}/>
            )}
          </div>

          <BoxInfoFilme onClick={this.props.onClick}>
            <img src={this.props.item.img} alt={`Capa do filme: ${this.props.item.name}`} width="100%"/>
            <BoxAvaliacao>
              <h3>{this.props.item.name}</h3>
              <span>{this.props.item.nota}</span>
            </BoxAvaliacao>
            <p>{this.props.item.info}</p>
          </BoxInfoFilme>
        </ContentCard>
     </CardContainer>
        
      
    )
  }
}