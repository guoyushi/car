import {UPPDATE_GOODS_COUNT,UPDATA_GOODS_SELECTED} from '../../store/reducer.js'
export default function mapDispathToProps(dispatch){
    return{
        updataCount(count,id){
            dispatch({
                type:UPPDATE_GOODS_COUNT,
                data:count,
                id
            })
        },
        toggle(selected,id){
            dispatch({
                type:UPDATA_GOODS_SELECTED,
                data:selected,
                id
            })
        }
    }
}