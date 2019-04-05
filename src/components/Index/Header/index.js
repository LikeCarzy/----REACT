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
                icon={<Icon type="ellipsis" color="#000"/>}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    // <Icon key="0" type="search" style={{ marginRight: '16px' }} color="#000" />,
                    <Icon key="1" type="ellipsis" color="#000"  className="fa fa-camera-retro"/>,
                ]}
                ><img src="https://mpic5.shangpin.com/styles/shangpin/ver3_0/images/public/logo2.png?201811900019243"/></NavBar>
            </div>
        )
    }
}

export default Header


