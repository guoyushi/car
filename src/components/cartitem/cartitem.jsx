import React,{Component} from 'react';
import { connect } from 'react-redux';
import mapDispathToProps from './dispath.js'
class CartItem extends Component {
    constructor() {
        super();
    }
    render() {
        let { updataCount,item,toggle } = this.props
        return (
            <li key={index}>
                <span onClick={()=>{toggle((1-item.selected),item.goods_id)}} className={'select-btn iconfont ' + (item.selected == 0 ? "" : 'icon-selected')}></span>
                <span className='goods-img'>
                    <img src={'http://www.lb717.com/' + item.obj_data} />
                </span>
                <div className='right-area'>
                    <p>{item.goods_name}</p>
                    <div className='flex'>
                        <div className='price-box'>
                            <p>x{item.count}</p>
                            <p>￥{item.discount_price}</p>
                        </div>
                        <div className='count-box'>
                            <span onClick={() => {updataCount(--item.count, item.goods_id) }}>-</span>
                            <span>{item.count}</span>
                            <span onClick={() => {updataCount(++item.count, item.goods_id) }}>+</span>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
export default connect(null,mapDispathToProps,null,{pure:false})(CartItem)