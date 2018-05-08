import React,{Component} from 'react'
import Home from '../views/home'
import Index from '../views/index'
import Catagory from '../views/catagory';
import Cart from '../views/cart'
import Mine from '../views/mine'
import City from '../views/city'
import AddCity from '../views/addCity'
import Sort from "../views/sort"
import Brand from "../views/brand"
import Price from "../views/price"
import Screen from "../views/screen"
import {combineReducers} from 'redux';
// function Index(){
//     return <h1>Index</h1>
// }
let router={
    routes:[
        {   //一级路由
            path:"/index",
            component:Index,
            children:[//二级路由
                {
                    path:"/index/home",
                    component:Home
                },
                {
                    path:"/index/catagory",
                    component:Catagory
                },{
                    path:"/index/cart",
                    component:Cart,
                    children:[
                        {
                            path:"/index/cart/sort",
                            component:Sort
                        },{
                            path:"/index/cart/brand",
                            component:Brand
                        },{
                            path:"/index/cart/price",
                            component:Price
                        },{
                            path:"/index/cart/screen",
                            component:Screen
                        }
                    ]
                },{
                    path:"/index/mine",
                    component:Mine
                }
            ]
        },{
            path:"/city",
            component:City
        },{
            path:"/addCity",
            component:AddCity
        }
    ]
}
export default router