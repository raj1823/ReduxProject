import {FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS,FETCH_DATA_WITH_QUERY } from '../Data_Service/constant'

const initialState={

    isSuccess: false,
    storedData : [],
    error: null,
   

    


}

const data_Reducer=(state=initialState,action={})=>{

    switch(action.type)
    {

        case FETCH_DATA_SUCCESS:
             return { 
                 ...state,
                  isSuccess:true,
                  storedData: action.storedData,
                  
                }
        case FETCH_DATA_FAILURE: 
        return {
            ...state,
             isSuccess:false
            }
       
        default:  return state
    }





}

export default data_Reducer



