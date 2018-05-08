import React, { Component } from 'react';
import './catagory.less'
class Catagory extends Component {
    constructor() {
        super();
        this.state = {
            active: 0,
            content:''
        }
    }
    render() {
        let {content,list}=this.state
        return <div id='catagory'>
           卖车
        </div>
    }
    componentDidMount() {
       
    }
}
export default Catagory