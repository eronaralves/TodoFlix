import styled from "styled-components"

export const CardContainer = styled.div`

  width: 100%;
  max-width: 250px;

  color: #fff;
 
  margin-right: 10px;
  margin-bottom: 60px;

  
  
`

export const ContentCard = styled.div`  
  
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-top: 10px;
  margin-bottom: 30px;


  &:hover {
    opacity: .7;
    cursor: pointer;
  }

  

  .icon-favoritos {
      position: absolute;
      right: 5px;
      top: 5px;

      z-index: 1;
    
  }

  .icon-close {
    position: absolute;
    left: 5px;
    top: 5px;

    z-index: 2;
  }

  h3 {
    font-size: 18px;
    margin-top: 8px;
    /* display: none; */
  }

  p {
    font-size: 12px;
    margin-top: 4px;
  }

  @media(max-width: 375px) {
    
  }
  @media(max-width: 340px) {  
    p {
      display: none;
    }

  }
`

export const BoxInfoFilme = styled.div`
  width: 100%;

  img {
    width: 100%;
  }

`

export const BoxAvaliacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  
`
