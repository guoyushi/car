export const UPDATA_LIST='UPDATA_LIST'
export const UPDATA_DATA='UPDATA_DATA'
export const DATA_LIST = "DATA_LIST"
export const ADD_SORT = "ADD_SORT"
export const CAR_LIST = "CAR_LIST"
import {combineReducers} from 'redux'
let initState={
    updata_list:[],
    updata_data:[],
    data_list:[],
    car_list:[]
}
function updata_list(state=initState.updata_list,action){
    if(action.type==UPDATA_LIST){
        return action.data
    }
    return state
}
function updata_data(state=initState.updata_data,action){
    if(action.type==UPDATA_DATA){
        return action.data
    }
    return state
}
function data_list(state=initState.data_list,action){
    if(action.type == DATA_LIST){
        return action.data
    }
    return state
}
function add_sort(state=initState.data_list,action){
    if(action.type == ADD_SORT){
        return action.data
    }
    return state
}
function car_list(state=initState.data_list,action){
    if(action.type == CAR_LIST){
        return action.data
    }
    return state
}
export default combineReducers({
    updata_list,
    updata_data,
    data_list,
    add_sort,
    car_list
})