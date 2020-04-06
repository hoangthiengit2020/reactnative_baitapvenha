import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity, StyleSheet,Dimensions,Alert } from 'react-native';
const widthDevice=Dimensions.get('window').width;
const heightDevice=Dimensions.get('window').height;
const {textstylelogin,styleInput,styleButtom,textstyle}=StyleSheet.create({
    textstylelogin:{
        color:'#503E9D',
        fontSize:40,
        textTransform: 'uppercase',
        fontWeight:'bold',
        borderBottomWidth:2,
        borderColor:'#E5E5E5'         
    },
    styleInput:{
        fontSize: 20,
        width: widthDevice * 0.90,
        borderBottomWidth: 3,
        borderColor: '#503E9D',
        height: 50,
        marginTop: '5%',
    },
    styleButtom:{
        marginTop: 20,
        backgroundColor: '#503E9D',
        width: widthDevice / 2,
        alignContent: 'center',
        padding: '3%',
        alignItems: 'center',
       
    },
    textstyle:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase'
    }
})
export default class Login extends Component {

    state={
        email:'thien_hv@yahoo.com',
        password:'123@'
    }
    //Hàm lấy giá trị từ textBox sử dụng sự kiện OntextChange, setstate lai
    
    handChange=(name,value)=>{
        this.setState({
            [name]:value           
        })     
    }
    
       handSubmit=()=>{
        //sử dụng phương thức navigation.navigate để chuyển hướng màn hình-phương thức có sẵn của components
        //lấy state đã thay đổi từ người dùng nhập
        let { navigation } = this.props;
        let{email,password}=this.state;
        if(email==='thien_hv@yahoo.com'&& password==='123@')
        {          
           navigation.navigate('Home',{params:{email:email,password:password}}); //Truyền params qua home           
        }
        else
        {
            Alert.alert('Email hoặc mật khẩu không đúng!');
            navigation.navigate('Login',{params:''});
        }
    }
    render() {
        return (
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Text style={[textstylelogin]}> hệ thống </Text>
                <TextInput style={[styleInput]} autoFocus={true} placeholder='Email' autoFocus={true} onChangeText={ this.handChange.bind(this, 'email')} defaultValue={'thien_hv@yahoo.com'}></TextInput>
                <TextInput style={[styleInput]} autoFocus={true} placeholder='Password' autoFocus={true} secureTextEntry={true} onChangeText={(value)=>{this.handChange('password',value)}} defaultValue={'123@'}  ></TextInput>
                <TouchableOpacity onPress={()=>this.handSubmit()} >
                    <View style={[styleButtom]}>
                        <Text style={[textstyle]}>Đăng nhập</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
