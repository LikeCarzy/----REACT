import React, { Component } from 'react'
import './index.scss'

//导入swiper
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

//导入json
import data from "./nav.json"

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {nav_data: 0};
        this.tab = this.tab.bind(this);
    }
    tab(id) {
        this.setState({nav_data:id});
        console.log(id)
    }
    componentDidMount(){
        var mySwiper = new Swiper('.swiper2', {
           slidesPerView : 5,
           spaceBetween : 20,
        })
    }
    renderNav(){
        return data.map(item => {
            return (
                <div className="swiper-slide" id={this.state.nav_data == item.id ? "active" : item.id } key={item.id} onClick={this.tab.bind(this, item.id)}>{item.text}</div>
            )
        })
    }
    render(){
        return (
            <div className="Nav-box">
                <div className="swiper-container swiper2">
                    <div className="swiper-wrapper">
                        {this.renderNav()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav