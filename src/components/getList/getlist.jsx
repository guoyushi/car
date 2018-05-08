import React,{Component} from 'react';
import $http from '../../utils/http';
import {Cookle} from '../cook.js'
import './getlist.less'
import {connect} from 'react-redux';
import {ADD_CART} from '../../store/reducer.js'
import {T} from 'react-toast-mobile'
class getItem extends Component{
    constructor(){
        super();
        this.setCart=this.setCart.bind(this);
    }
    render(){
        let {data}=this.props
        return <dl id='goods-item' onClick={()=>{this.detail(data.goods_id)}}>
            <dt><img src={'http://www.lb717.com/'+data.obj_data} alt=''/></dt>
            <dd>
                <p className='goods-detail'>{data.goods_name}</p>
                <p><span className='goods-preice'>{data.discount_price}</span><span onClick={this.setCart} className='iconfont icon-cart'></span></p>
            </dd>
        </dl>
    }
    detail(goods_id){
        //跳转详情页
        this.props.history.push('/detail?id='+goods_id,{
            id:goods_id
        })
    }
    setCart(e){
        //添加购物车
        e.stopPropagation();
        let {data}=this.props;
        if(Cookle('token')){
            $http.post('http://localhost:9000/user/cart/goshooping',{
                goods_id:this.props.data.goods_id,
                good_info:data,
                token:Cookle('token')
            })
            .then(res=>{
                console.log(res)
                if(res==1){//添加成功
                    T.notify('购物车添加成功')
                    //往store存储数据
                    this.props.dispatch({
                        type:ADD_CART,
                        data:{
                            ...data,
                            count:1,
                            selected:0
                        }
                    })
                }
            })
        }else{
            let {history}=this.props;
            this.props.history.push('/login',{
                from:history.location.pathname
            })
            console.log(history.location.pathname)
            
           
        }
    }
}
export default connect(null)(getItem)