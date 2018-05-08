import React, { Component } from 'react';
import {connect} from "react-redux"
import "./sort.less"
class Sort extends Component {
    constructor(){
        super();
        this.state={
            arr:["价格排序","销量排序"]
        }
        this.priceSort = this.priceSort.bind(this)
    }
    render() {
        let {arr} = this.state
        return <div id='sort'>
            <ul>
                {
                  arr.map((item,index)=>{
                      return <li key={index} onClick={this.priceSort.bind(this,item)}>{item}</li>
                  })  
                }
            </ul>
        </div>
    }   
    componentDidMount() {
       
    }
    priceSort(item){
        this.props.addSort(item)
        this.props.history.push("/index/cart")
    }
}
import {ADD_SORT} from "../../store/reducer"
function mapDispatchToProps(dispatch){
    return {
        addSort:(arr)=>{
            dispatch({
                type:ADD_SORT,
                data:arr
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(Sort)