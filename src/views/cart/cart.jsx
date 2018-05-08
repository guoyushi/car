import React, { Component } from 'react';
import { connect } from 'react-redux';
import RouteWrapper from '../../components/route.jsx'
import './cart.less'
import CarList from "../carList"
class Cart extends Component {
    constructor(){
        super();
        this.sort = this.sort.bind(this)
        this.brand = this.brand.bind(this)
        this.price = this.price.bind(this)
        this.screen = this.screen.bind(this)
    }
    render() {
        let {routes} = this.props
        return <div id='cart'>
            <nav>
                <span onClick={this.sort}>智能排序<span><b className="iconfont" ref="ico">&#xe6d1;</b></span></span>
                <span onClick={this.brand}>品牌<span><b className="iconfont">&#xe6d1;</b></span></span>
                <span onClick={this.price}>价格<span><b className="iconfont">&#xe6d1;</b></span></span>
                <span onClick={this.screen}>筛选<span><b className="iconfont">&#xe6d1;</b></span></span>
            </nav>
            <RouteWrapper routes={routes}></RouteWrapper>
            <CarList></CarList>
        </div>
    }
    sort(e){
        // let {data} = this.props
        this.props.history.push("/index/cart/sort")
        // this.refs.ico.innerHTML="&#xe6d5;"
        // e.target.innerHTML=data
    }
    brand(){
        this.props.history.push("/index/cart/brand")
    }
    price(){
        this.props.history.push("/index/cart/price")
    }
    screen(){
        this.props.history.push("/index/cart/screen")
    }
}
function mapStateToProps(state){
    return{
        data:state.add_sort
    }
}
export default connect(mapStateToProps)(Cart)