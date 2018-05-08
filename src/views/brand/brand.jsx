import React, { Component } from 'react';
import {connect} from "react-redux"
import "./brand.less"
class Brand extends Component {
    constructor(){
        super();
    }
    render() {
        let {data} = this.props
        return <div id='brand'>
          <ul>
             {
                 data.map((item,index)=>{
                     return item.map((items,ind)=>{
                         return <li key={ind}>{items.carClass}</li>
                     })
                 })
             }  
          </ul>
        </div>
    }   
}
function mapStateToProps(state){
    return {
        data:state.data_list
    }
}

export default connect(mapStateToProps)(Brand)