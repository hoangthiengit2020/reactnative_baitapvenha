import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/AntDesign';

export default class Home extends Component {
    render() {
        let{navigation}=this.props;//dung navigation de chuyen huong trang thuoc tinh nay co san cua components tu props cua dung phuong thuc navigation.navigate de goi component
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name='menufold' size={50} onPress={()=>navigation.openDrawer()}></Icon>
                <Icon name='menufold' size={50} onPress={()=>navigation.closeDrawer()}></Icon>
            <TouchableOpacity onPress={()=>navigation.navigate('ProductList')}>
                <View style={{backgroundColor:'blue',padding:10,borderRadius:10}}>
                    <Text style={{color:'white',fontWeight:'bold'}}> Chuyen toi productlist</Text>
                </View>
            </TouchableOpacity>           
            </View>
        )
    }
}
