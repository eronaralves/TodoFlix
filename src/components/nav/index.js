import React, { useState, useEffect } from "react"


import { Link, useNavigate, useLocation } from "react-router-dom" 


//Components
import Container from "../../components/Container"
import ModalAddFilmes from "../../components/ModalAddFilmes"

//Images
import ImageLogo from "../../assets/images/logo-todoflix.png"
import Perfil from "../../assets/images/perfil.png"
// import Triangulo from "../../assets/images/triangulo-branco.png"
import Lupa from "../../assets/images/lupa.png"

import {
  Navigation,
  Content,
  BoxLogo,
  BoxPerfil,
  List,
  // SubmitLente,
  SubmitLine,
  BoxPesquisa
} from "./styles"



export default function Nav(props) {

  const [routeBack, setRouteBack] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [modalAtivar, setmodalAtivar] = useState(false)
  const [itemSelecionado, setItemSelecionado] = useState(null)

  const navigate = useNavigate();
  const { search, pathname } = useLocation();


  const onChangeValue = (event) => {
    if(routeBack === "" && pathname !== "/pesquisa") {
      setRouteBack(pathname)
    }

    const inputValue = event.target.value;

    setSearchValue(inputValue);

    navigate({
      pathname: "pesquisa",
      search: `?query=${inputValue}`
    });
  }

  const aparecerModal = () => {
    setmodalAtivar(!modalAtivar)
  }

  const closeModal = () => {
    setmodalAtivar(false)
    
  }

  const novoFilmeAdicionado = () => {
    console.log("Foiiiii")
    props.filmeAdicionado()
  }


  useEffect(() => {
    
    if(search) {

      if(searchValue === "") {
        navigate(routeBack);
        setRouteBack("");
      }
    }

  }, [search, searchValue]);


  return(
    <>
      <ModalAddFilmes showModal={modalAtivar} onClose={() => closeModal()} modalAtivar={setmodalAtivar} filmeAdicionado={() => novoFilmeAdicionado()}/>
      <Navigation>
        <Container>
          <Content>
            <BoxLogo>
              <Link to="/"> <img src={ImageLogo} alt="Logo da Todoflix" width="103px" height="40px"/></Link>
              <List>
                <li><Link className="responsivo" to="/">Inicio</Link></li>

                <li className="dropdown">
                  <Link to="/">Categorias</Link>
                  <div className="dropdown-content"> 
                    <Link to="/">Inicio</Link>
                    <Link to="/todos">Todos</Link>
                    <Link to="/favoritos">Favoritos</Link>
                    <Link to="/vistos">Já vistos</Link>
                    <Link to="/adicionados">Adicionados</Link>
                  </div>
                </li>
              </List>
            </BoxLogo>

            <BoxPerfil>
              <button onClick={() => aparecerModal()}>Adicionar Filmes</button>

              <BoxPesquisa>
                <SubmitLine>
                  <button>
                    <img src={Lupa}/>
                  </button>

                  <input type="text" placeholder="Buscar" onChange={onChangeValue}/>
                </SubmitLine>
              </BoxPesquisa>
              <img className="image-perfil" src={Perfil} width="32px" height="32px"/>
               
            </BoxPerfil>
          </Content>
        </Container>
      </Navigation>
    </>
  )
}
