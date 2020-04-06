import React, { Component } from 'react';
import {danhSachSanPham} from '../assets/data/data';
import { Text, View, AppRegistry,Dimensions,StyleSheet,Image,ScrollView,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Grid,Col,Row} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class ProductDetailts extends Component {       
    
    state = {
        productDetail: {mangPhimLQ: []}
    }

    componentDidMount = () => {
        let { item } = this.props.route.params;       
        this.setState({ productDetail: item });        
    }
    renderSanPhamLienQuan=(splQ=[])=>{
    
        let DSSPlienquan=danhSachSanPham.filter((item,index)=>{//duyet toan bo mang data splq
                let i_index=splQ.findIndex(Masp=>Masp==item.Masp);//tim chi so index tuongung ma san pham co trong mang goc khac -1 return item
               
                if(i_index!= -1){
                    return item;
                }       
                
        })
      console.log('dd'+danhSachSanPham);
    
     return DSSPlienquan.map((item,index)=>{
         return       <Row style={{ margintop: 15 }} key={index}>
                 <Col style={{ marginTop: 16, marginRight: 15, width: 'auto', height: 'auto' }}>
                    <Image source={item.hinhAnh} resizeMode='contain' style={{ width: 100, height: 100, transform: [{ rotate: '-25deg' }] }}></Image>
                </Col>
               <Col>
                    <View>
 <Text style={{ paddingTop: 25 }}>{item.tenSP}</Text>
   <Text style={{ fontSize: 15, color: 'red', paddingTop: 5, fontWeight: 'bold' }}>{item.gia}</Text>
                    </View>
              </Col>
           </Row> 
     })     
    }
    render() {
        let { productDetail } = this.state;
         console.log(productDetail);
        return (            
             <Grid>
                <Row style={{ flexWrap: 'wrap', maxHeight: Dimensions.get('window').height / 5 }}>
                    <Image source={ productDetail.hinhAnh } resizeMode='contain' style={{ width: '100%', height: '100%', transform: [{ rotate: '-25deg' }] }} />
               </Row>
                 <View style={{ padding: 5 }}>
                     <Text style={{ fontSize: 20, color: '#0000AA', fontWeight: 'bold' }}>{productDetail.tenSP}</Text>
                     <Text style={{ fontSize: 15, color: '#000' }}>{productDetail.moTa}</Text>
                     <Text style={{ fontSize: 20, color: '#FF3300', fontWeight: '300',fontWeight:'bold' }}>{productDetail.gia ? productDetail.gia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''} VNĐ</Text>
                     <ScrollView horizontal={true}>
                         {
                            productDetail.size?.map((size, index) => {
                               return <TouchableOpacity key={index}>
                                   <View>
                                       <View style={{ backgroundColor: '#808080', marginRight: 5, padding: 10, borderRadius: 5 }}>
                                           <Text style={{ fontSize: 10, color: '#fff', width: 'auto' }}>{size}</Text>
                                       </View>
                                   </View>
                                 </TouchableOpacity>
                             })
                         }
                    </ScrollView>
                     <TouchableOpacity>
                         <View style={{ marginBottom: 5, marginTop: 5, alignItems: 'flex-end' }}>
                             <View style={{ borderRadius: 5, backgroundColor: '#0000AA' }}>
                                <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', padding: 10, paddingTop: 5, width: 'auto' }}> Đặt mua <Icon name='cart-arrow-down' size={20} style={{ color: '#fff' }} /></Text>
                           </View>
                        </View>
                    </TouchableOpacity>
               </View>    
           
                    <Row>
                        <Col>
                            <Text style={{ color: 'red', fontSize: 15, padding: 5, backgroundColor: 'rgba(0,0,0,.1)' }}>SẢN PHẨM LIÊN QUAN</Text>
                        <ScrollView>
                                {this.renderSanPhamLienQuan(productDetail.dsSanPhamLienQuan)}
                        </ScrollView>
                           
                        </Col>
                    </Row>
               
             </Grid>            
        )
    }
}
