import { DELETEDETAILS, ERROR, GETDETAILS, GETHEAD, GETHEADER, GETTODOS, LOADING, POSTDETAILS, POSTHEAD,  } from "./actiontype"

const initialState={
   isLoading:false,
   isError:false,

   headData:[]
   
}
 export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOADING: return {...state,isLoading:true,isError:false}
        case ERROR: return {...state,isLoading:false,isError:true}
        case GETHEAD: return {...state,isLoading:false,isError:false,headData:payload}
        case POSTHEAD : return{...state,isLoading:false,headData:[...state.products,payload]}
        default :
        return state
    }
}