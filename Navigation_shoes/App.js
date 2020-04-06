import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View,  Text,  StatusBar,} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';
//import thư viện quản lý navigation
import {NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//component tự tạo
import Home from './src/HomeScreen/Home';
import Productlist from './src/HomeScreen/ProductList';
import Login from './src/HomeScreen/Login'
import HomeScreen from './src/HomeScreen/HomeScreen';
import ProductDetails from './src/HomeScreen/ProductDetailts';


//định nghĩa các màn hình
const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const Toptab=createMaterialTopTabNavigator();

// let { item,route } = this.props.route.params;
// console.log(item);
const App  = () => {
 
  return (
    <>
    <StatusBar hidden={false}></StatusBar>  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{
            tabBarIcon: (forcus, color, size) => <Icon name='home' size={30}></Icon>, headerShown: false
          }}>           
          </Stack.Screen>
          <Stack.Screen name='ProductDetailts' component={ProductDetails} options={{ headerShown: true,showLabel: true,
                                                                                      headerStyle:{backgroundColor:'#503E9D'},
                                                                                      headerTintColor:'#fff' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
{/* <NavigationContainer>*/}
        {/* <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='ProductList' component={Productlist} options={{headerBackTitle:'Trở về',
                                                                              animationEnabled:true,                                                                             
                                                                              title:'Ds sản phâm',headerShown:true,headerStyle: {
                                                                                backgroundColor: '#f4511e'                                                                             },
                                                                              headerTintColor: '#fff',
                                                                              headerTitleStyle: {
                                                                                fontWeight: 'bold',
                                                                              },
                                                                              }} />
        </Stack.Navigator> */}
        {/* <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='ProductList'component={Productlist}          
                   
           options={{ title:'Ds sản phâm',inactiveTintColor: 'red' ,tabBarIcon:({focused,color,size })=>{return <Text style={{color:'red'}}><Icon name='home' size={30}/></Text>}                                                             
          ,tabBarLabel:({focused,color,size})=>focused?<Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>ProductList</Text> :<Text style={{fontSize:10,color:'red'}}>ProductList</Text>                                                                }}
                                                                              
                                                                              />
        </Tab.Navigator> */}
        {/* <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name='Productlist' component={Productlist}></Drawer.Screen>
        </Drawer.Navigator> */}

        {/* <Toptab.Navigator>
          <Toptab.Screen name='Home' component={Home}/>
          <Toptab.Screen name='Productlist' component={Productlist}/>
        </Toptab.Navigator> */}
      {/* </NavigationContainer> */}