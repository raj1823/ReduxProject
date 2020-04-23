import {isDataFailure,isDataSuccess,} from '../Data_Service/action'

import {API_LINK,SEARCH_API_LINK} from '../Data_Service/constant'




export function dataFetch(){
  return dispatch=>{ console.log("inside dataFetch")

    
           return new Promise(function(resolve,reject){

                console.log("fetch Data called")

                //console.log("link:",API_LINK)
                //console.log("query: ",query)
                fetch(API_LINK,
                    {
                      method: 'GET',
                      headers: {
                       authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGZvb2QiLCJleHAiOjE1ODc2NzQ4OTh9.3xbHEM4Yy3Ge2b_0MRZsxjzWvipNLTUIvH1YPZtrte59B9pO-CYTehobq5LZRc6lkkYRunTjCJuXGR75gDacgw"
              
                         
              
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


export function queryDataFetch(query){
  return dispatch=>{ console.log("inside dataFetch")

    
           return new Promise(function(resolve,reject){

                console.log("fetch Data called")

                 console.log("link:",SEARCH_API_LINK+query+"?")
                // console.log("query: ",query)
                fetch(SEARCH_API_LINK+query+"?",
                    {
                      method: 'GET',
                      headers: {
                       authorization: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJheGZvb2QiLCJleHAiOjE1ODc2NzQ4OTh9.3xbHEM4Yy3Ge2b_0MRZsxjzWvipNLTUIvH1YPZtrte59B9pO-CYTehobq5LZRc6lkkYRunTjCJuXGR75gDacgw"
              
                         
              
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
