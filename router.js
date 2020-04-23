import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import  Home from './Containers/Home'
import List from './Containers/List'
import Profile from './Components/Profile'
import React from 'react'

const Stack=createStackNavigator()

function MyStack()
{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="List" component={List} />
        </Stack.Navigator>
    )
}

export default function Apps()
{
   return( 
   
   <NavigationContainer>
        <MyStack />
    </NavigationContainer>
   )
}