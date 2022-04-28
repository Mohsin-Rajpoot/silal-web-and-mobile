import * as actions from './actions'

const init={
    loading:false,
    error:'',
    user:{}
}
export default (state=init,action) => {
    switch(action.type){
        case actions.SET_USER_REQUEST:
            return {...state,loading:true,error:'',user:{}}
        case actions.SET_USER_SUCCESS:
            return {...state,loading:false,user:action.payload,error:''}
        case actions.SET_USER_ERROR:
            return {...state,loading:false,user:{},error:action.payload}
        case actions.SET_LOADING:
            return {...state,loading:action.payload}
        case actions.LOGOUT:
            return init
        default:
            return state
    }
}
