import React, { Component } from 'react';
import "./carList.less"
import { connect } from 'react-redux'
class CarList extends Component{
    constructor(){
        super()
        this.state={
            list:null
        }
    }
    render(){
        let {list} = this.props
        return(
            <div id="carList">
                {
                    list.map((item,index)=>{
                        return item.map((items,ind)=>{
                           return items.carList.map((its,ins)=>{
                               return (its.price ? <div key={ins} className="list">
                                <h4>{its.carName}</h4>
                                <p>{its.price}</p>
                            </div> : null)
                           })
                        })
                    })
                }
            </div>
        )
    }
    componentWillMount(){
        this.props.dataList()
    }
}
function mapStateToProps(state){
    return{
        list:state.data_list
    }
}
import {DATA_LIST} from "../../store/reducer"
function mapDispatchToProps(dispatch){
    return{
        dataList:()=>{
            fetch("../../server/cart.json").then(res=>res.json()).then(res=>{
                dispatch({
                    type:DATA_LIST,
                    data:res
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CarList)