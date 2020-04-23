import React from 'react'
import {SafeAreaView, View,Text,FlatList, TextInput, TouchableOpacity} from 'react-native'
import { } from 'react-native-gesture-handler'
import CustomModal from '../customModal'




class ListComponent extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
          
            queryData:'',
            visible:false

        }
    }
    checkModalVisibility(){
      let length=this.state.queryData.length;
      const {queryData}=this.state
      if(length>=2)
      {     
        //this.props.queriedData(this.state.queryData)
        console.log("global query: ",this.state.queryData)
         this.props.fetch_data(queryData).then(resolve=>{
          if(resolve=="Resolved")
          {
            this.setState({visible:true})
          }
     
     
        },reject=>{
          if(reject=="Rejected")
          {
          alert("Server Error")
          
          }
     
           
           

      })
    }
  }
    render()

    {   
      
      
       
    
      
      
      const {visible}=this.state
      console.log("Props in List:",this.props)
     
      
      
      
      return(
          visible? <CustomModal data={this.props.storedData}
                                visible={this.state.visible}/>:
        <SafeAreaView style={{flex:1,backgroundColor:"cyan"}}>
            <View style={{backgroundColor:"#fff",margin:5,flexDirection:"row",justifyContent:"space-between"}}>
                <TextInput 
                placeholder={"Search Items"}
                style={{height:40,padding:10}}
                onChangeText={text=>{
                  this.setState({queryData:text})
                 
                   this.checkModalVisibility()
                  }}></TextInput>
                <TouchableOpacity onPress={()=>{

                    
                }}>
                    <Text style={{margin:5,fontSize:18}}>Search</Text>
                </TouchableOpacity>
            </View>
           <FlatList
              data={this.props.storedData}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      backgroundColor: '#fff',
                      borderWidth: 1,
                      margin: 5,
                      borderRadius: 5,
                    }}>
                    <View >
                      <Text
                        style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                        Store ID: {item.storeId}
                      </Text>
                      <Text
                        style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                        Store Name: {item.storeName}
                      </Text>
                      <Text
                        style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                        City: {item.city}
                      </Text>
                      {/* <Text
                        style={{marginLeft: 15, borderWidth: 0.6, fontSize: 17}}>
                        Retailer Name: {item.concept.retailer.retailerName}
                      </Text> */}
                    </View>
                    
                  </View>
                );
              }}
            />
    
         
        </SafeAreaView>
      )
    }
}
export default ListComponent