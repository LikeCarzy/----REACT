import React, { Component } from 'react'
import './index.scss'

//导入组件
import Header from "./Header/index.js"
import Nav from "./Nav/index"
import Footer from "../common/Footer/index"

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import data from "./xh.json"


class Index extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        var swiper1 = new Swiper('.swiper1', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
        })
        var swiper3 = new Swiper('.swiper3', {
            slidesPerView : 3,
            spaceBetween : 20,
        })
    }
    renderxh(){
        return data.map(item => {
            return (
                <div className="swiper-slide" key={item.id}>
                    <div className="img"><img src={ item.src }/></div>
                    <div className="text">
                        <h5>{ item.text }</h5>
                        <p>{ item.p }</p>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="index-app-box">
                <Header></Header>
                <Nav></Nav>
                <div className="gg">
                    <a href="" className="gg1">
                    <div className="swiper-container swiper1">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src="https://pic4.shangpin.com/e/s/19/01/03/20190103162441559035-620-387.jpg" alt=""/></div>
                            <div className="swiper-slide"><img src="https://pic2.shangpin.com/e/s/19/01/02/20190102144801404240-620-387.jpg" alt=""/></div>
                            <div className="swiper-slide"><img src="https://pic2.shangpin.com/e/s/19/01/03/20190103152942316677-620-387.jpg" alt=""/></div>
                        </div>
                    </div>
                    </a>
                    <a href="" className="gg2"><img src="https://pic2.shangpin.com/e/s/19/01/03/20190103182331710414-0-0.jpg" alt=""/></a>
                    <a href="" className="gg3"><img src="https://pic5.shangpin.com/e/s/18/11/01/20181101151507542000-0-0.jpg" alt=""/></a>
                    <div className="xh">
                        <div className="swiper-container swiper3">
                            <div className="swiper-wrapper">
                                {this.renderxh()}
                            </div>
                        </div>
                        <h3><span>猜你喜欢</span></h3>
                    </div>
                    <div className="fg">
                        <a href=""><img src="https://pic2.shangpin.com/e/s/19/01/04/20190104091043511381-10-10.jpg" alt=""/></a>
                        <a href=""><img src="https://pic1.shangpin.com/e/s/19/01/02/20190102103838141161-10-10.jpg" alt=""/></a>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Index