import React from 'react';

//icons
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

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



  componentDidMount() {
    const storageFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const temItem = storageFavoritos.find((item) => item.id === this.props.item.id)

    if(temItem) {
      this.setState({
        eFavorito: true
      })
    }
    
  }

  render(){
    return(
      <CardContainer className="card">
        
        <ContentCard >
    
          <div className="container-favorito" onClick={() => this.adiconarFvoritos()}>
            {this.state.eFavorito ? (
              <IoHeartSharp color="#E71B27" size={20}/>
            ) : (
            <IoHeartOutline size={20}/>
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
    );
  }
}