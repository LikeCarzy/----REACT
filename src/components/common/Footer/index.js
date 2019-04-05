import React, { Component } from 'react'
import './index.scss'

import data from "./data.json"

class Footer extends Component{
    constructor(props){
        super(props)
    }
    renderF(){
        return data.map( item => {
            return (
                <a key={ item.id } href={ item.t }>
                    <img src={ item }/>
                    <p>{ item.text }</p>
                </a>     
            )
        })
    }
    render(){
        return (
            <div className="Footer-app-box">
                { this.renderF() }
            </div>
        )
    }
}

export default Footer