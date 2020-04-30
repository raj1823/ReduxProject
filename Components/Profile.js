import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux'
import ActivityWaiter from '../activityWaiter';
import {dataFetch} from '../Data_Service/fetchData'



class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      storeData: [],
      isLoading:false,
    
    };
  }
  apiFetchData() {
    console.log("Raj")
    
   this.props.data_fetch(this.props.token).then(resolve=>{
     if(resolve=="Resolved")
     {
    this.props.navigation.navigate('List')
    this.setState({isLoading:false})
     }


   },reject=>{
     if(reject=="ServerIssue")
     {
     alert("Server Error")
     this.setState({isLoading: false});
     }
     else if(reject=="Rejected")
     {
       alert("Data Error")
       this.setState({isLoading:false})
     }
     


   })

  

   
  }

  render() {
    console.log(this.props)
  
    const {isLoading}=this.state
    
   
    return (
      isLoading? <ActivityWaiter/>:
      <SafeAreaView style={{flex:1}}>
      <View style={{flex: 1}}>
     
        <View style={{flex: 1, backgroundColor:"#fff"}}>
          <View style={[style.authenticatedUserView,{flex:2}]}>
            <Text style={{fontSize: 25,}}>Hello User</Text>
            
            <TouchableOpacity
              onPress={() => {

                this.props.navigation.navigate("Home")

                
                
              }}>
              <Text style={style.logoutButton}>Log Out</Text>
            </TouchableOpacity>
          
          </View>
          <View style={{justifyContent:"center",flex:10}}>
          <TouchableOpacity
            onPress={() => {
              
              this.apiFetchData();
             
              this.setState({isLoading:true})
            }}>
            
              <Text style={{padding:10,alignSelf:"center",...style.logoutButton}}> Display Data</Text>
                </TouchableOpacity>
            </View>
        
         
        </View>
        </View>
        </SafeAreaView>
      
      
      
      

    
    
      
    
    );
  }
}

const mapStateToProps=(state)=>({

  
   
   
   isSuccess: state.data_Reducer.isSuccess,
   error: state.data_Reducer.error,
   token: state.authenticate_Reducer.token,
   query: state.data_Reducer.queryData
  
  
  
  
  })
  
  const mapDispatchToProps=({
  
  data_fetch: dataFetch    
  
  
  
  })
  
  
  
  export default connect(
      mapStateToProps, mapDispatchToProps,
  )(Profile)    

const style = StyleSheet.create({
  authenticatedUserView: {
    justifyContent:"space-between",
  
    flexDirection:"row"
  },

  logoutButton: {
    fontSize: 25,
    
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
   
  },
  indicatorstyling: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});

