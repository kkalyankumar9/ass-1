import axios from "axios";
import { DELETEDETAILS, ERROR, GETDETAILS, GETHEADER, GETITEMS, LOADING, POSTDETAILS,  } from "./actiontype";



export const getDetails=()=>async(dispatch)=>{
    
    try {
     dispatch({type:LOADING})   
    let  res  =await axios.get(`http://5.189.180.8:8010/detail`)
    dispatch({type:GETDETAILS,payload:res.data})
    } catch (error) {
        dispatch({type:ERROR})
    }
}

//delete

export const deleteDetails=(id)=>async(dispatch)=>{
  
    try {
        dispatch({type:LOADING})  
        await axios.delete(`http://5.189.180.8:8010/detail/${id}`)
        dispatch({type:DELETEDETAILS})
    } catch (error) {
        dispatch({type:ERROR})
    }
}

// //POST 

export const postDetails=(data)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res= await axios.post(`http://5.189.180.8:8010/detail`,data)

        dispatch({type:POSTDETAILS})
    } catch (error) {
        dispatch({type:ERROR})
    }
}
// //POST
export const getItems=()=>async(dispatch)=>{
    
    try {
     dispatch({type:LOADING})   
    let  res  =await axios.get(`http://5.189.180.8:8010/item`)
    dispatch({type:GETITEMS,payload:res.data})
    } catch (error) {
        dispatch({type:ERROR})
    }
} 




