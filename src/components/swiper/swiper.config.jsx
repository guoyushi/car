import React,{Component} from 'react';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
class SwiperWrapper extends Component{
    render(){
        return <div className="swiper-container" ref='dom'>
            <div className="swiper-wrapper">
                <div className='swiper-slide'><img src={require('../../static/img/1.jpg')} alt=''/></div>
                <div className='swiper-slide'><img src={require('../../static/img/2.jpg')} alt=''/></div>
                <div className='swiper-slide'><img src={require('../../static/img/3.jpg')} alt=''/></div>
                <div className='swiper-slide'><img src={require('../../static/img/4.jpg')} alt=''/></div>
            </div>
        </div>
    }
    componentDidMount(){
        new Swiper(this.refs.dom,{
            autoplay:true,
            loop:true
        })
    }
}
export default SwiperWrapper