import React, { Component, Profiler } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,StatusBar } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
//import thư viện quản lý navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Store from './Store';
import Favourists from './Favourists'
import ProductList from './ProductList'
import Profile from './Profile'
//tạo Bottom Tab
const BottomTab=createBottomTabNavigator();
const {iconActive,IconInactive}=StyleSheet.create({
    iconActive:{
        color:'#503E9D',
        fontSize:15,
         fontWeight:'bold',         
         textTransform:'uppercase'
    },
    IconInactive:{
        fontSize:10,
         textTransform:'uppercase'
    }
})
export default class HomeScreen extends Component {
    componentDidMount() {
        let {navigation,route} = this.props;
        //  console.log(this.props);
        //Lấy params dựa vào this.props.route
        let {email} = route.params;
        // console.log(email)
    }
    render() {
        return (     
            
            <BottomTab.Navigator>
                 
                <BottomTab.Screen name='Store' component={Store}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: '#503E9D' }} size={size} name='store'></IconF> : <IconF size={size} name='store'></IconF>,
                        tabBarLabel: ({ focused, color }) => focused ? <Text style={[iconActive]}>Store</Text> : <Text style={[IconInactive]}>store</Text>
                             }}>
                </BottomTab.Screen>
                <BottomTab.Screen name='Favourits' component={Favourists}
                    options={{ tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: '#503E9D' }} size={size} name='heart' /> : <IconF size={size} name='heart' />, tabBarLabel: ({ focused, color }) => focused ? <Text style={[iconActive]}>Favorites</Text> : <Text style={[IconInactive]}>Favorites</Text> }}  >
                </BottomTab.Screen>
                <BottomTab.Screen name='ProductList' component={ProductList}
                     options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconM style={{ color: '#503E9D' }} size={size} name='towing'></IconM> : <IconM size={size} name='towing'></IconM>,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[iconActive]}>Product</Text> : <Text style={[IconInactive]}>Product</Text>
                           }}>
                </BottomTab.Screen>
                <BottomTab.Screen name='Profile' component={Profile} 
                    options={{
                    tabBarIcon: ({ focused, color, size }) => focused ? <IconF style={{ color: '#503E9D' }} size={size} name='history'></IconF> : <IconF size={size} name='history'></IconF>,
                    tabBarLabel: ({ focused, color }) => focused ? <Text style={[iconActive]}>Profile</Text> : <Text style={[ IconInactive ]}>Profile</Text>
                            }}>
                </BottomTab.Screen>
            </BottomTab.Navigator>
        )
    }
}
