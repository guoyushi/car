import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Redirect} from 'react-router-dom'
import RouteWrapper from './components/route.jsx'
import routes from './router/router.config.js'
import {Provider} from 'react-redux';
import './static/css/reset.css'
import './static/css/common.css'
import './static/css/getlist.less'
import "./static/icon/iconfont.css"
import store from './store/store.js'//挂载store
ReactDOM.render(<Provider store={store}>
    <BrowserRouter> 
        <Switch>
             <Redirect exact from='/' to='/index/home'/> 
            <RouteWrapper routes={routes.routes}></RouteWrapper>
        </Switch>
    </BrowserRouter>
    </Provider>,document.getElementById('app'))