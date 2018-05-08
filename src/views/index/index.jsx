import React,{Component} from 'react';
import './index.less'
import {NavLink,Link} from 'react-router-dom';
import RouterWrapper from '../../components/route.jsx'
import Toast from 'react-toast-mobile'
import 'react-toast-mobile/lib/react-toast-mobile.css'

//ip地址定位
var mycity = remote_ip_info['city'];
class Index extends Component{
    constructor(){
        super();
        this.state={
            city:[mycity+"市"]
        }
         this.getCity = this.getCity.bind(this)
    }
    componentDidMount(){
        //设置ip地址位置
        if(sessionStorage.getItem("info")){
            this.setState({
                city:sessionStorage.getItem("info")
            })
        }
    }
    render(){
        let {routes} =this.props
        //默认ip地址获取
        let {city}=this.state
        return <div id='index'>
              <header>
                 <span onClick={this.getCity}>{city}</span>
                 <span></span>
              </header>
              <div className='content'>
                    <RouterWrapper routes={routes}></RouterWrapper>
              </div>
              <ul className='footerNav'>
                    <li>
                        <NavLink to='/index/home' activeClassName='tab-active'>
                            <span className='iconfont'>&#xe648;</span>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/index/catagory' activeClassName='tab-active'>
                            <span className='iconfont'>&#xe649;</span>
                            <span>卖车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/index/cart' activeClassName='tab-active'>
                            <span className='iconfont'>&#xe63c;</span>
                            <span>购车</span>
                        </NavLink>
                        </li>
                    <li>
                        <NavLink to='/index/mine' activeClassName='tab-active'>
                            <span className='iconfont'>&#xe647;</span>
                            <span>我的</span>
                        </NavLink>
                    </li>
              </ul>
        </div>
    }
    getCity() {
        
        this.props.history.push('/city')

    }
    // componentDidMount(){
    //     console.log(sessionStorage.getItem("info"))
    //     this.setState={
    //         city:sessionStorage.getItem("info")
    //     }
    // }
}
export default Index