import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity,Dimensions,ScrollView,Image,Alert } from 'react-native'
import IcomM from 'react-native-vector-icons/MaterialIcons'
import {Grid,Col,Row} from 'react-native-easy-grid';
import {danhSachSanPham2} from '../assets/data/data.js';
const widthdevices=Dimensions.get('window').width;
const heightdivices=Dimensions.get('window').height;
const {cssTextShoes,cssIcon,cssImage,cssTextLabel,cssCol,cssRow}=StyleSheet.create({
    cssTextShoes: {
        marginTop: '5%',
        paddingBottom: '5%',
        color: '#503E9D',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cssCol:{
        width: widthdevices / 2, height: 400,
         backgroundColor: '#F5F5F5',
        flexDirection:'column',
         position:'relative',
         paddingTop:'10%'
    },
    cssIcon: {
        color: '#969696'
    },
    cssImage: {
        width: 150,
        height: 150,
        transform: [{ rotate: '-30deg' }],
        
    },
    cssTextLabel: {
        fontSize: 17, paddingLeft: 15, color: '#003300',
    
    }
    , cssRow: {
        backgroundColor: 'gray', flexWrap: 'wrap'
    }
})
export default class Store extends Component { 
    constructor(props)
    {
        super(props);
        this.state={
            number:0
        }
    }
    TangClick=()=>{
            this.setState({
            number:this.state.number+1
            })
        }
    GiamClick=()=>{
        this.setState({
            number:this.state.number-1
        })
    }
    viewProductDetails = (item) => {
        let { navigation } = this.props;
        // navigation.navigate('ProductDetailts',{param:{item}});       
        navigation.navigate('ProductDetailts',{item});        
    }
    state={
        maSP:0,
        tenSP:'',
        gia:0,
        hinhAnh:require('../assets/img/bitis.jpg'),
        moTa:''
    }
    danhSachSanPham = [
        {maSP:1,tenSP:"Bitis hunter x3 xám",gia:859000,hinhAnh:require('../assets/img/bitis.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45], dsSanPhamLienQuan:[2,3,4]},
         {maSP:2,tenSP:"Giày Thể Thao Nam Biti's Hunter Core Black Line (Trắng)",gia:650000,hinhAnh:require('../assets/img/bitis1.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45], dsSanPhamLienQuan:[1,4,5]},
         {maSP:3,tenSP:"Giày Thể Thao Nam Biti's Hunter Street Black Line (Trắng)",gia:569000,hinhAnh:require('../assets/img/bitis2.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[3,2,6]},
         {maSP:4,tenSP:"Giày Thể Thao Nam Biti's Hunter BKL Black Line  (Trắng)",gia:999000,hinhAnh:require('../assets/img/bitis3.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[3,7,5]},
         {maSP:5,tenSP:"Giày Thể Thao Cao Cấp Nam Biti’s Hunter X - Summer 2K19 - Orange (Cam)",gia:760000,hinhAnh:require('../assets/img/bitis4.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[6,7,9]},
         {maSP:6,tenSP:"Giày Thể Thao Nam Biti's Hunter X (Xám Đậm)",gia:899000,hinhAnh:require('../assets/img/bitis5.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[5,8,9]},
         {maSP:7,tenSP:"Giày Thời Trang Nam Biti's Hunter Hương Giang Go For Love (Trắng)",gia:890000,hinhAnh:require('../assets/img/bitis6.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[3,7,5]},
         {maSP:8,tenSP:"Giày Thể Thao Nam Biti's Hunter Core (Xanh Nhớt)",gia:680000,hinhAnh:require('../assets/img/bitis7.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[10,11,6]},
         {maSP:9,tenSP:"Giày Thể Thao Nam Biti's Hunter BKL Tết Edition 2020 (Đỏ)",gia:1059000,hinhAnh:require('../assets/img/bitis8.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[10,12,13]},
         {maSP:10,tenSP:"Biti's Hunter BKL Tết Edition 2020",gia:859000,hinhAnh:require('../assets/img/bitis9.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[9,11,12]},
         {maSP:11,tenSP:"Biti's Hunter Core Tết Edition 2020 (Đỏ)",gia:749000,hinhAnh:require('../assets/img/bitis10.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[8,7,5]},
         {maSP:12,tenSP:"Biti's Hunter X - Summer 2k19 BKL (Trắng)",gia:999000,hinhAnh:require('../assets/img/bitis11.jpg'),moTa:"Công nghệ LiteFlex độc quyền. Co dãn 4 chiều, thoáng khí tối đa. Định hình và trợ lực gót chân. Đế lót kháng khuẩn và massage. Phần đế phylon siêu nhẹ kết hợp cùng đế tiếp đất cao su. Mũi giày được bọc cứng, có lớp đệm cao su bảo vệ đầu ngón chân .Trọng lượng siêu nhẹ, đàn hồi và ma sát tốt, chống trơn trượt. Thích hợp sử dụng khi chơi thể thao, dã ngoại, đi học, đi làm",size:[36,37,38,39,40,41,42,43,44,45],dsSanPhamLienQuan:[2,7,6]},
    ]
     renderListShoes=()=>{
         return this.danhSachSanPham.map((item,index)=>{
             return  <Col key={index}  style={[cssCol]}>            
                 <TouchableOpacity onPress={() => this.viewProductDetails(item)}>
                     <Image style={[cssImage]} source={item.hinhAnh} resizeMode='contain' />
                 </TouchableOpacity>
                 <View style={{ backgroundColor: '#F5F5F5', position: 'absolute', bottom: 0, left: 0 }}>
                     <TouchableOpacity>
                         <Text style={[cssTextLabel]}>{item.tenSP}</Text>
                         <Text style={{ fontSize: 17, paddingLeft: 15, color: '#FF6600', fontWeight: 'bold' }}>{item.gia} VNĐ</Text>
                     </TouchableOpacity>
                     <View style={{ backgroundColor: '#F5F5F5', width: 150, alignItems: 'center', padding: 5, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                         <TouchableOpacity onPress={()=>{this.TangClick(item.maSP)}}>
                             <Text> <IcomM style={[cssIcon]} name='add-box' size={50}></IcomM></Text>
                         </TouchableOpacity >
                         <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.state.number}</Text>
                         <TouchableOpacity onPress={()=>{this.GiamClick(item.maSP)}}>
                             <Text> <IcomM style={[cssIcon]} name='indeterminate-check-box' size={50}></IcomM></Text>
                         </TouchableOpacity>
                     </View>
                 </View>        
         </Col>

        })
    } 
    render() {      
        return (
            <>
            <View >
                <Text style={[cssTextShoes]}> Shop shoes </Text>
            </View>
            <ScrollView horizontal={false} >
                <Grid style={{ flex: 1,backgroundColor:'#F5F5F5' }}>    
                <Row style={[cssRow]}>    
                        {this.renderListShoes()} 
                                                   {/* <Col  style={{ width: widthdevices / 2, height: 300, backgroundColor: '#F5F5F5' }}>
                                <View style={{ backgroundColor: '#F5F5F5' }}>
                                    <Image style={[cssImage]} source={require('../assets/img/bitis.jpg')} resizeMode='contain' />
                                    <Text style={[cssTextLabel]}>Giày mới</Text>
                                    <Text style={{ fontSize: 17, paddingLeft: 15, color: '#FF6600', fontWeight: 'bold' }}>7000000</Text>
                                    <View style={{ backgroundColor: '#F5F5F5', width: 150, alignItems: 'center', padding: 5, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity>
                                            <Text> <IcomM style={[cssIcon]} name='add-box' size={50}></IcomM> </Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}> 1 </Text>
                                        <TouchableOpacity>
                                            <Text> <IcomM style={[cssIcon]} name='indeterminate-check-box' size={50}></IcomM></Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Col> */}
                 </Row>               
                </Grid>
                </ScrollView>
       </>
        )
    }
}
