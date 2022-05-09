import styled from "styled-components";

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