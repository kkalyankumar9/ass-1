import { DELETEDETAILS, ERROR, GETDETAILS, GETHEADER, GETITEMS, GETTODOS, LOADING, POSTDETAILS, POSTHEAD,  } from "./actiontype"

const initialState={
   isLoading:false,
   isError:false,
   detailsData:[],
   itemData:[]
  
   
}
 export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case LOADING: return {...state,isLoading:true,isError:false}
        case ERROR: return {...state,isLoading:false,isError:true}
        case GETDETAILS: return {...state,isLoading:false,isError:false,detailsData:payload}
        case POSTDETAILS:return {...state,isLoading:false,detailsData: [...state.detailsData, payload]}

        case GETITEMS: return {...state,isLoading:false,isError:false,itemData:payload}
        default :
        return state
    }
}