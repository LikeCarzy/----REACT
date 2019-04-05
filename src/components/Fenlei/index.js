import React, { Component } from 'react'
import './index.scss'

import Header from "./Header/index"
import Nav from "./Nav/index"
import Footer from "../common/Footer/index"

class Fenlei extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="Fenlei-app-box">
                <Header></Header>
                <Nav></Nav>
                <Footer></Footer>
            </div>
        )
    }
}

export default Fenlei