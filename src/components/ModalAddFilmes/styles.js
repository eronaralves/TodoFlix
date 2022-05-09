import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;


  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);

  z-index: 2;

`

export const Content = styled.div`
  width: 100%;
  max-width: 830px;
  background: #000;
  
  border: 1px solid  #808080;
  border-radius: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;

  padding: 16px 50px;
  color: #fff;
`
export const BoxOnCLocse = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;

  text-align: right;

  @media(max-width: 550px) {
    margin: 25px 0px;

    button {
      margin-bottom: 5px;
    }

  }
  
  
`
export const BoxForm = styled.div`
  
  display: flex;
  
  

  h2 {
    font-size: 29px;
    font-weight: 500;
    line-height: 33px;
    
    margin: 24px 0px 40px 0px;
  }

  label {
    font-size: 15px;
    font-weight: 700;
    line-height: 17px;

    display: inline-flex;
  }

  @media(max-width: 550px) {
    display: flex;
    flex-wrap: wrap;

    h2 {
      margin-top: 30px;
      
    }
  }

`

export const BoxLabel = styled.div`
  width: 100%;
  max-width: 400px;


  display: flex;
  flex-direction: column;
  margin-bottom: 22px;


  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }

  input, textarea {
    width: 100%;
    margin-top: 8px;
    padding: 11px;
    border: none;
    border-radius: 5px;

    color: #fff;
    background: #2C2C2C;

  }
  
`

export const BoxRadio = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom:30px;
 
  div {
    height: 70px;
    display: flex;
    align-items: center;
    margin-right: 44px;

    input  {
      height: 24px;
      width: 24px;
      
      border: 7px solid #B1B1B1;
      margin-right: 7px;

      background: red;
      color: red;
    }

  }
`

export const BoxCoverImage = styled.div`

  display: flex;
  flex-direction: column;



  margin: 50px 30px;

  h3 {
    font-size: 15px;
    line-height: 17px;

    margin-top: 27px;
  }

  div {
    
    display: flex;
    align-items: end;
    border: 1px solid #585858;
    border-radius: 5px;
    margin-top: 10px;
    
  }

  img {
    width: 100%;

  }

  button {
    width: 139px;
    border-radius: 5px;

    font-size: 13px;
    line-height: 15px;

    padding: 8px 12px;
    margin-top: 20px;
  }

  @media(max-width: 550px) {
    margin: 8px 0px;

    button {
      margin-bottom: 5px;
    }

  }

`

export const BoxNota = styled.div`
  
  div {
    display: flex;
    align-items: center;
  }
`

export const Boxconfirmation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 60px;


  button {
    font-size: 15px;
    font-weight: bold;
    line-height: 17px;

    padding: 10px 16px;
    border-radius: 5px;
    color: #fff;
    background: #000;
  }

  & button:nth-child(2) {
    background: red;
    
  }

  @media(max-width: 550px) {
    margin: 16px 0px;


  }

`
    
