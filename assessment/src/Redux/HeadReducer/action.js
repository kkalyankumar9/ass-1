import axios from "axios"
import { DELETEHEAD, ERROR, GETHEAD, LOADING, POSTHEAD } from "./actiontype"

export const postHeader=(data)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
    let res=     await axios.post("http://5.189.180.8:8010/header",data)

        dispatch({type:POSTHEAD,dispatch:res.data})
    } catch(error) {
        dispatch({type:ERROR})
    }
}


export const getHead=()=>async(dispatch)=>{
    
    try {
     dispatch({type:LOADING})   
    let  res  =await axios.get(`http://5.189.180.8:8010/header`)
    dispatch({type:GETHEAD,payload:res.data})
    } catch (error) {
        dispatch({type:ERROR})
    }
}

export const deleteHead=(vr_no)=>async(dispatch)=>{
  
    try {
        dispatch({type:LOADING})  
        await axios.delete(`http://5.189.180.8:8010/header/${vr_no}`)
        dispatch({type:DELETEHEAD})
    } catch (error) {
        dispatch({type:ERROR})
    }
}

