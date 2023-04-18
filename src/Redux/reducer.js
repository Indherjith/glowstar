import * as types from "./actionType";
export const reducer = (state,{type,payload})=>{
    switch(type){
        case types.GET_PRODUCT_REQUEST:
            return {...state,isLoading:true,isError:false}
        
        case types.GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,products:payload,isError:false}

        case types.GET_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}

        default:return {...state};
    }
}