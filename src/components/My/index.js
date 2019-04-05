import React, { Component } from 'react'

import './index.scss'

//导入标题
import Header from "./Header/index"
import Nodl from "./Nodl/index"
import Footer from "../common/Footer/index"

import { Icon } from 'antd-mobile';

class My extends Component{
    constructor(props){
        super(props)
        this.state = {
            user: false
        }
    }
    componentWillMount(){
        if(this.user){
            console.log(1);
        }else{
            console.log(2);
        }
    }
    render(){
        return (
            <div className="My-app-box">
                <Header></Header>
                <div className="cont-box">
                    <div className="z">
                        { this.user ? <div>123</div> : <Nodl></Nodl> }
                    </div>
                    <div className="k ywqd">
                        <a href="" className="ywqd">
                        <span>愿望清单</span>
                        <Icon key="0" type="right" size="md" className="right"/>
                        </a>
                    </div>
                    <div className="k dd">
                        <a href="" className="dd">
                        <span>订单</span>
                        <Icon key="0" type="right" size="md" className="right"/>
                        </a>
                    </div>
                    <div className="k kj">
                        <a href="" className="kj">
                        <span>卡券</span>
                        <Icon key="0" type="right" size="md" className="right"/>
                        </a>
                    </div>
                    <div className="k kf x">
                        <a href="" className="kf">
                        <span>客服</span>
                        <Icon key="0" type="right" size="md" className="right"/>
                        </a>
                    </div>
                    <div className="k shgl x">
                        <a href="" className="shgl">
                        <span>收货地址管理</span>
                        <Icon key="0" type="right" size="md" className="right"/>
                        </a>
                    </div>
                    <div className="k sz x">
                        <a href="" className="sz">
                        <span>设置</span>
                        <Icon key="0" type="right" size="md" className="right"/>
                        </a>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default My