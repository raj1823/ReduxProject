import {TOGGLE_VALUE,FETCH_ERROR,FETCH_PENDING,FETCH_SUCCESS} from './constant'

const initialState={
    
    
    success : false,
    error: null,
    
    token: ''

}

const authenticate_Reducer = (state=initialState ,action) => {

    switch(action.type) {
       
        case FETCH_SUCCESS:
            return {
                ...state,
               
                success: true,
               
                token: action.token
                
            }
        case FETCH_ERROR:
            return {
                ...state,
                
                success: false,
              
            }
        default: 
            return state;
    }
}



export default authenticate_Reducer