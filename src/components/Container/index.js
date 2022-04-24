import React from "react"
import {
  LayoutContainer
} from "./styles"

export default class Container extends React.Component {
  
  render(){
    return(
      <LayoutContainer>
        {this.props.children}
      </LayoutContainer>
    )
  }
}