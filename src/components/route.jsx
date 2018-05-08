import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Cookle } from './cook.js';
import { Redirect } from 'react-router-dom';

function Login() {
    return !!Cookle('token')
}
class RouteWrapper extends Component {
    render() {//路由权限
        const { routes } = this.props
        return routes.map((item, index) => {
            return <Route key={index} path={item.path} render={(location) => {
                return item.authorization && !Login() ? 
                <Redirect to={{pathname:'/login',state:{from:item.path}}} /> 
                : <item.component {...location} routes={item.children}></item.component>
            }}></Route>
        })
    }
}
export default RouteWrapper