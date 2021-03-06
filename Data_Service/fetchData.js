import {isDataFailure,isDataSuccess,} from '../Data_Service/action'

import {API_LINK,SEARCH_API_LINK} from '../Data_Service/constant'




export function dataFetch(token){
  return dispatch=>{ console.log("inside dataFetch")

    
           return new Promise(function(resolve,reject){

                console.log("fetch Data called")

               
                fetch(API_LINK,
                    {
                      method: 'GET',
                      headers: {
                       authorization: token
              
                         
              
                      },
                    },
                  )
                    .then((response) => {
                        
                      if (response.status >= 200 && response.status < 300) {
                        
                        //this.props.navigation.navigate("List")
                         
                         resolve("Resolved")
                        return response.json()

                      }
                      else {console.log("hcadc: ",response.status)
                    
                          reject("ServerIssue")
                    
                    }

                    }).then(data => {
                        console.log("data :",data)
                        dispatch(isDataSuccess(data))
                    })
                    
                    .catch((error) => {
                      console.log("Data Error");
                      dispatch(isDataFailure(error))
                       reject("Rejected")
                    });
            
    })
}
}


export function queryDataFetch(query,token){
  return dispatch=>{ console.log("inside dataFetch")

    
           return new Promise(function(resolve,reject){

                console.log("fetch Data called")

                 console.log("link:",SEARCH_API_LINK+query+"?")
                // console.log("query: ",query)
                fetch(SEARCH_API_LINK+query+"?",
                    {
                      method: 'GET',
                      headers: {
                       authorization:token
              
                         
              
                      },
                    },
                  )
                    .then((response) => {
                        
                      if (response.status >= 200 && response.status < 300) {
                        
                        //this.props.navigation.navigate("List")
                         
                         resolve("Resolved")
                        return response.json()

                      }
                      else {console.log("hcadc: ",response.status)}

                    }).then(data => {
                        console.log("data :",data)
                        dispatch(isDataSuccess(data))
                    })
                    
                    .catch((error) => {
                      console.log("Data Error");
                      dispatch(isDataFailure(error))
                       reject("Rejected")
                    });
            
    })
}
}
