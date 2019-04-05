import React, { Component } from 'react';

//导入路由
import { Route,Switch,withRouter } from 'react-router-dom'

//导入首页
import Index from  "./components/Index/index"

//导入分类页
import Fenlei from "./components/Fenlei/index"

//导入我的页
import My from "./components/My/index"

//导入列表页
import List from "./components/List/index"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hasHeader: true,
      hasFooter: true
    }
  }
  renderRoutes(){
    let { routes } = this.props
    return routes.map( item => <Route key = {item.id} path = {item.path} component = {item.component} exact = {item.exact}/>)
  }
  render() {
    return (
      <div className="App">
        <Switch>
          { this.renderRoutes() }
        </Switch> 
      </div>
    );
  }
}

//es react 组件默认属性如何定义
App.defaultProps = {
  routes: [
    {
      id: 1, 
      path: '/',
      component: Index,
      exact: true
    },
    {
      id: 2, 
      path: '/fenlei',
      component: Fenlei
    },
    {
      id: 3, 
      path: '/list',
      component: List
    },
    {
      id: 4, 
      path: '/my',
      component: My
    },
  ]
    
  
}

export default withRouter(App);
