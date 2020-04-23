import { fetchDataSuccess, fetchDataError} from './Services/action';

function authenticateUser(username,password) {
  return  dispatch => {
      return new Promise(function(resolve,reject){
        console.log("fetch called")
        
        fetch('https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login',
        {
            method: 'POST',
            body: JSON.stringify({
              username: username,
              password: password,

            }),
          })
        .then(res => {
            console.log("status: ",res.status)
            if (res.status==403) reject(403)
            if(res.status>=200 && res.status<300) {
                var temp = res.headers.map.authorization.split(' ');
                let header=temp[1]
                console.log("header: ",header)
                dispatch(fetchDataSuccess(header))
                resolve("Resolved")
                
                alert("User Authenticated")
                
             
            }

            
            

        })
         .catch(error => {
            dispatch(fetchDataError(error));
            reject(error)
        })

      })

        
    }
}

export default authenticateUser;