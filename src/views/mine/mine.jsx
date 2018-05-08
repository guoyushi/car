import React, { Component } from 'react';
import './mine.less'
import $http from '../../utils/http.js'
import {Cookle} from '../../components/cook.js'
class Mine extends Component {
    constructor() {
        super();
        this.state={
            name:''
        }
    }
    componentDidMount() {
    }
    getDeliveryList(){
        //this.props.history.push('/deliverylist')
    }
    render() {
        let {name}=this.state
        return <div id='mine'>
            我的
        </div>
    }
    getSeting() {
       // this.props.history.push('/seeting')
    }
}
export default Mine