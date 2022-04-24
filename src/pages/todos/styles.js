import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;

  h2 {
    font-size: 29px;
    font-weight: 400;
    line-height: 33px;
    margin-bottom: 15px;
    color: #FFF;
  }

 
`

export const BoxCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  

 @media(max-width: 725px){
  width: 80%;
  display: flex;
  justify-content: space-between ;
 }


`