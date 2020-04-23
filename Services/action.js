import  {TOGGLE_VALUE,FETCH_ERROR,FETCH_SUCCESS} from './constant'



  
    
  export  function fetchDataSuccess(header) {
        return {
            type: FETCH_SUCCESS,
            token: header
            
        }
    }
    
  export  function fetchDataError(error) {
        return {
            type: FETCH_ERROR,
            error: error
        }
    }
