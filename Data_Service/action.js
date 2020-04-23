import {FETCH_DATA_SUCCESS,FETCH_DATA_FAILURE,FETCH_DATA_WITH_QUERY} from '../Data_Service/constant'


export function isDataSuccess(data)
{
    return {
        type: FETCH_DATA_SUCCESS,
        storedData :  data,
        
        
    }
}


export function isDataFailure(error)
{

    return {
        type: FETCH_DATA_FAILURE,
        
        error:error

    }
}

// export const queriedData = query => dispatch =>
// {
//         dispatch({
//             type: FETCH_DATA_WITH_QUERY,
//             queryData: query
//         })
// }