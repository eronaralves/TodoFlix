import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 70px;
  color: #fff;

  
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;


`

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: red;
    font-size: 32px;
  }

  img {
    margin-top: 5px;
  }

  details[open] {
    position: relative;
    left: 0;
    top: 68px;

  }

  details {
    width: 136px;
    padding: 0px 10px 0px 10px;
    background: #000;
    cursor: pointer;

    a {
      width: 100%;
      text-align: left;
      margin: 0px;
      color: #fff;
      text-decoration: none;
    }
  }

  details > ul  {
    margin: 8px 15px;

    list-style: none;
    line-height: 30px;
    
  }


`

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  z-index: 3;

  @media(max-width: 970px){
    & .responsivo {
      display: none;
    }

  }

  a {
    margin: 16px 25px;
    color: #fff;
    text-decoration: none;
    display: block;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown {
    display: inline-block;
    
    @media(max-width: 640px) {
      & {
        display: none;
      }
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    background-color: #000;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    

    & a:nth-child(1) {
      display: none;
    }
    a {
      padding: 10px 25px;
      margin: 0;
      font-size: 13px;

      &:hover {
        background: #171717;
      }
    }

    @media(max-width: 970px){
      & a:nth-child(1) {
        display: block;
      }

    }

  }

  
  

`

export const BoxPerfil = styled.div`
  display: flex;
  align-items: center;

  & > button {
    height: 32px;
    cursor: pointer;

    margin: 0px 16px;
    padding: 0px 15px;


    border: none;
    border-radius: 3px;
    
    color: #fff;
    background: red;

  }

  img {
    margin: 2px 5px 0px 5px;
    

  }

  @media(max-width: 900px) {
    .image-perfil {
      display: none;
    }
  }
  

  @media(max-width: 935px) {
  & > button {
    display: none;
  }}

`

export const BoxPesquisa = styled.div`
  margin-right: 10px;
` 


export const SubmitLine = styled.div`
 
  float: left;
  width: 400px;
  height: 32px;
  background: #2C2C2C;

  

  & > input {
    float: left;
    width: 90%;
    height: 100%;
    border: 0px;

    background: transparent;
    color: #fff;
  }

  & > input:focus {
    box-shadow: none;
    outline: 0;
  }
  
  
  & > button {
    position: relative;
    top: 0px;
    float: left;
    width: 10%;
    height: 100%;
    border: none;
    opacity: .7;
    background: transparent;
    
  }

  @media(max-width: 700px){
    width: 350px;
  }

  @media(max-width: 500px){
    width: 150px;

    input {
      padding: 0px 18px;
    }
  }

`