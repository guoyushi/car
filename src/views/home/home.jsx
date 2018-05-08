import React,{Component} from 'react';
import './home.less'
import SwiperWrapper from '../../components/swiper/swiper.config.jsx'
import $http from '../../utils/http'
import GetList from '../../components/getList/getlist.jsx'
class Home extends Component{
    constructor(){
        super()
         this.state={
            getlist:[],
            channel_id:2,
            flag:true
        }
    }
    render(){
        return <div id='home' onScroll={this.scrolling} ref='scroller'>
            首页           
        </div>
    }
    componentDidMount(){
       
    }
}
export default Home