import React, { Component } from 'react'
import './index.scss'

//导入标题栏插件
import { NavBar, Icon } from 'antd-mobile';

class Header extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="Header-app-box">
                <NavBar
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    // <Icon key="0" type="search" style={{ marginRight: '16px' }} color="#000" />,
                    <Icon key="1" type="ellipsis" color="#000"  className="fa fa-camera-retro"/>,
                ]}
                ><span>个人中心</span></NavBar>
            </div>
        )
    }
}

export default Header


