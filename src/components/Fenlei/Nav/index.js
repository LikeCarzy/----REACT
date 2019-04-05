import React, { Component } from 'react'
import './index.scss'

import { Icon } from 'antd-mobile';

//导入Json文件 -- 女士
import nv from "./nv.json"
//导入Json文件 -- 男士
import nan from "./nan.json"
//导入Json文件 -- 儿童
import et from "./et.json"

var data = nv;

class Nav extends Component{
    constructor(props){
        super(props)
        this.nv = this.nv.bind(this);
        this.nan = this.nan.bind(this);
        this.et = this.et.bind(this);
        this.start = {
            active: 'nv'
        }
    }
    nv(){
        data = nv;
        this.setState({active:'nv'});
    }
    nan(){
        data = nan;
        this.setState({active:'nan'});
    }
    et(){
        data = et;
        this.setState({active:'et'});
    }
    componentWillReceiveProps(){
        this.renderlist()
    }
    renderlist(){
        return data.map(item => {
            return (
                <li key = { item.id }>
                    <a href="/list"><img src={ item.src } alt=""/><span>{ item.cont }</span><Icon type="right" className="right"></Icon></a>
                </li>
            )
        })
    }
    render(){
        const { active } = this.start
        return (
            <div className="Nav-app-box">
                <div className="nav-box">
                    <span id={ this.start.active == 'nv' ? 'active' : 'nv' } onClick={ this.nv }>女士</span>
                    <span id={ this.start.active == 'nan' ? 'active' : 'nan' } onClick={ this.nan }>男士</span>
                    <span id={ this.start.active == 'et' ? 'active' : 'et' } onClick={ this.et }>儿童</span>
                </div>
                <div className="content-box">
                    <ul className="list-box">  
                        {/* <li><a href=""><img src="https://pic1.shangpin.com/e/s/16/10/31/20161031152502622081-0-0.jpg" alt=""/><span>当季新品</span><Icon type="right" className="right"></Icon></a>
                        <div className="fenlei-z-box">
                            <span>后即可兑换</span>
                            <span>后即可兑换</span>
                            <span>后即可兑换</span>
                            <span>后即可兑换</span>
                            <span>后即可兑换</span>
                            <span>后即可兑换</span>
                        </div>
                        </li> */}
                        { this.renderlist() }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav


