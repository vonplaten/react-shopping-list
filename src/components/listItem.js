import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    const { title } = this.props;
    
    return (
        
        <li >{title}</li>
        
    )
}
}



