import React from "react"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"


//Rotas
import Todos from "./pages/todos"
import Pesquisa from "./pages/pesquisa"
import Home from "./pages/home"
import Favoritos from "./pages/favoritos"
import Vistos from "./pages/vistos"
import Adicionados from "./pages/adicionados"
import Nav from "./components/nav"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    border: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    background: #000;
  }
`

export default class App extends React.Component{

  state = {
    adicionouFilme: false
  }

  adicionadosFilmes = () => {

    console.log("Foi DENOVoooooooo")
    this.setState({
      adicionouFilme: !this.state.adicionouFilme
    })
  }
  
  render(){
    return (
      <Router>
        <GlobalStyle/>
        <Nav filmeAdicionado={() => this.adicionadosFilmes()}/>

        <Routes>
          <Route path="/" element={<Home adicionouFilme={this.state.adicionouFilme}/>}/>
          <Route path="/todos" element={<Todos adicionouFilme={this.state.adicionouFilme}/>}/>
          <Route path="/pesquisa" element={<Pesquisa/>}/>
          <Route path="/favoritos" element={<Favoritos/>}/>
          <Route path="/vistos" element={<Vistos/>}/>
          <Route path="/adicionados" element={<Adicionados adicionouFilme={this.state.adicionouFilme}/>}/>
        </Routes>
      </Router>

    )
  }
}
