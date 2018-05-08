import React,{Component} from 'react';
import {connect} from 'react-redux'
import city from '../../../server/province.js'
import './addCity.less'
class addCity extends Component{
    constructor(){
        super();
        this.state={
            arr:[],
            newarr:[],
            right:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        }
    }
    render(){
        let {arr,newarr,right}=this.state
        return <div id='addCity'>
            <section>
                <div id='left' ref='the' className='left'>
                     {arr.map((item, index) => {
                    return <div  className='wrap' key={index}>
                        <h4 ref={item.letter}>{item.letter}</h4>
                         <ul className="ul" >
                            {item.province.map((items, ind) => {
                                return <li onClick={this.scroll.bind(this,items)}  key={ind}>{items.name}</li>
                            })}
                        </ul> 
                    </div>
                    })}  
                </div>
                <div className='center'>
                    <ul className='ul' >
                        {
                            newarr.map((item,index)=>{
                                return <li key={index}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='right'>
                    <ul ref='bodybox'>
                        {
                            arr.map((item,index)=>{
                                return <li onClick={this.right.bind(this,item,index)} key={index}>{item.letter}</li>
                            })
                        }
                    </ul>
                </div>
            </section>
        </div>
    }
    componentDidMount(){
        //scroll事件
        let citys=[]
        city.provinceArr.map(item=>{
            citys.push(item.province[0])
        })
        //设置默认
        let id=citys[0].id;
        for(let ins in city.city){
            if(ins==id){
                this.setState({
                    newarr:city.city[ins]
                })
            }
        }
        this.setState({
            arr:city.provinceArr
        })
    }
    scroll(city){
        let id=city.id;
        for(let i in city.id){
            if(i==id){
                this.setState({
                    newarr:city.city[i]
                })
            }
        }
    }
    right(item,letter){
        //     let id=item.letter;
        //     console.log(this.refs[id].parentNode.scrollTop)
        //    console.log(letter)
        //    let {newarr}=this.state;
        let sum = document.getElementById("left").getElementsByClassName("wrap")
        let height=0;
        for(let i=0;i<sum.length;i++){

        }
    }
}
import { UPDATA_DATA } from '../../store/reducer.js';
function mapStateToProps(state) {
    return {
        list: state.updata_data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updatadata: function () {
            fetch('../../../server/cart.json').then(res => res.json()).then(res => {
                dispatch({
                    type: UPDATA_DATA,
                    data: res
                })
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addCity)