import styled from "styled-components"
import Carousel, { consts } from "react-elastic-carousel"





export const BoxDestaque = styled.div`
  /* display: flex;
  margin: 90px 0px 62px 0px; */
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 80px 0px; 

  img {
    width: 425px;
    height: auto;
    
  }
  @media(max-width: 740px){
    display: flex;
    flex-wrap: wrap;
    

    img {
      width: 100%;
    }

    p {
       text-align: left;
    }
  }

  @media(max-width: 725px) {
    margin: 20px 0px;
  }

  @media(max-width: 500px){
    & {
      margin: 0px; 
    }

    img {
      width: 100%;
    }
  }

`

export const InfoDestaque = styled.div`
  width: 425px;

  margin: 50px 40px;
  color: #fff;
  

  span {
    font-size: 16px;
    font-weight: Bold;
    line-height: 18px;
  }

  h2 {
    font-size:  40px;
    font-weight: bold;
    line-height: 45px;
    margin-top: 4px;

    
  }

  p {
    font-size: 14px;
    line-height: 18px;
    margin: 8px 0px;
  }
  @media(max-width: 725px){
    margin: 40px 0px;
  }

  @media(max-width: 500px) {
    margin: 40px 0px;
    & p {
      font-size: 17px;
      opacity: .8;
    }

    & h2 {
      font-size:  35px;
    }
  }
 
`

export const BoxCards = styled.div`
  width: 100%;
  position: relative;

  padding-left: 4%;

`

export const TitleSection = styled.h2`
  font-size: 18px;
  font-weight: Bold;

  line-height: 21px;
  margin-bottom: 10px;
  color: #fff;

`

export const CarouselBox = styled(Carousel)`
  width: 100%;
  padding: 0;
  
  .card {
    max-width: 100%;
    margin-bottom: 0px;
  }

  .rec-slider-container {
    margin: 0px;
  }

  
  
`

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;


`;

export const ArrowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  position: absolute;
  top: 16%;

  z-index: 2;

  background: #000000a1;
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background-color: #000000e8;
  }


  ${props => {
    if(props.type === consts.NEXT) {
      return`
        right: 16px;
      `
    } else {
      return `
        left: 16px;
        transform: rotate(180deg);
      `
    }
  }}

  ${props => {
    if(props.isEdge){
      return `
        display: none;
      `
    }
  }}

  @media(max-width: 500px) {
    
    top: 20%;
    opacity: .8;
    
  }
`

export const Button = styled.button`

  

  

`

