import React, { Component } from 'react'
import './index.scss'

//导入标题
import Header from "./Header/index"

//导入List数据
import data from "./list.json"

class List extends Component{
    constructor(props){
        super(props)
    }
    renderList(){
        return data.map(item => {
            return (
                <div className="item-box" key={item.id}>
                    <a href="">
                        <div className="img-box">
                            <img src={item.src} alt=""/>
                        </div>
                        <div className="text-box">
                            <div className="kon"></div>
                            <h5>{item.h5}</h5>
                            <p>{item.p}</p>
                            <p><em>{item.em}</em></p>
                        </div>
                    </a>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="List-app-box">
                <Header></Header>
                <div className="cz-box">
                    <ul>
                        <li>排序</li>
                        <li>筛选</li>
                    </ul>
                </div>
                <div className="content-box">
                    {/* <div className="item-box">
                        <a href="">
                            <div className="img-box">
                                <img src="" alt=""/>
                            </div>
                            <div className="text-box">
                                <div className="kon"></div>
                                <h5></h5>
                                <p></p>
                                <p><em></em></p>
                            </div>
                        </a>
                    </div> */}
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default List