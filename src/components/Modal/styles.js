import styled from "styled-components"


export const Modal = styled.div`
  width: 100%;
  max-width: 430px;

  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);
  
  margin: 0 auto;
  
  border: 2px solid #808080;
  border-radius: 10px;
  z-index: 3;

  padding: 30px;

  color: #fff;
  background: #000;

  h2 {
    font-weight: 500;
    font-size: 29px;
    line-height: 33px;

    margin-top: 20px;
  }

  p {
    font-size: 17px;
    line-height: 20px;

    margin-top: 8px;
    margin-bottom: 25px;
  }
`;

export const BoxButtonnBack = styled.div`
  width: 100%;
  text-align: right;
  svg {
    cursor: pointer;
  }
`

export const Button = styled.button`
 
  margin-right: 12px;
  padding: 5px 7px;

  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  border-radius: 5px;

  color: #fff;
  background: #393939;
`
export const BoxIcons = styled.div`
  display: flex;
  align-items: center;

  margin-top: 16px; 

  img {
    margin-right: 8px;
  }
` 

export const BoxAvaliation = styled.div`

  display: flex;
  align-items: end;

  small {
    font-size: 16px;
    padding :10px;
  }
 


`

