import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList, SectionList, TouchableOpacity, Dimensions
} from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import IconAnt from 'react-native-vector-icons/AntDesign';
const { imgDanhsach, textdanhsach } = StyleSheet.create({
  imgDanhsach: {
    width: 70, height: 70, borderRadius: 50, marginLeft: 15
  },
  textdanhsach: {
    alignItems: 'center', marginLeft: 30
  }

})
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

const App = () => {
  let { wanda, captain, flash, tony, petter, strange, kara, diana, yasuo, natasha } = {
    wanda: require('./src/assets/imgs/hero/wanda.jpg'),
    captain: require('./src/assets/imgs/hero/captain.jpg'),
    flash: require('./src/assets/imgs/hero/flash.jpg'),
    tony: require('./src/assets/imgs/hero/ironman.jpeg'),
    petter: require('./src/assets/imgs/hero/spiderman.jpeg'),
    strange: require('./src/assets/imgs/hero/strange.jpg'),
    kara: require('./src/assets/imgs/hero/suppergirl.jpg'),
    diana: require('./src/assets/imgs/hero/wonderwoman.jpg'),
    yasuo: require('./src/assets/imgs/hero/yasuo.jpg'),
    natasha: require('./src/assets/imgs/hero/blackwidow.jpeg'),
  }
  userList = [
    { name: 'wanda', avatar: wanda },
    { name: 'yasuo', avatar: yasuo },
    { name: 'captain', avatar: captain },
    { name: 'flash', avatar: flash },
    { name: 'tony', avatar: tony },
    { name: 'petter', avatar: petter },
  ]
  userSuggestions = [
    { name: 'strange', avatar: strange },
    { name: 'kara', avatar: kara },
    { name: 'diana', avatar: diana },
    { name: 'natasha', avatar: natasha },
    { name: 'strange', avatar: strange },
    { name: 'kara', avatar: kara },
    { name: 'diana', avatar: diana },
    { name: 'natasha', avatar: natasha },
    { name: 'strange', avatar: strange },
    { name: 'kara', avatar: kara },
    { name: 'diana', avatar: diana },
    { name: 'natasha', avatar: natasha },]
  renderUser = () => {
    return this.userList.map(({ name, avatar }, index) => {
      return <Col key={index}>
        <View >
          <Image source={avatar} style={[imgDanhsach]}></Image>
          <Text style={[textdanhsach]}>{name}</Text>
        </View>
      </Col>
    })
  }
  renderSuggestion = () => {
    return this.userSuggestions.map(({ name, avatar }, index) => {
      return <View key={index} style={{ width: '100%', borderWidth: 1, borderColor: '#DBDBDB', flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={avatar} style={{ width: 70, height: 70, borderRadius: 50, marginLeft: 15 }}></Image>
          <View style={{ paddingTop: 15, paddingLeft: 10 }} >
            <Text style={{ fontWeight: 'bold' }}>{name}</Text>
            <Text style={{ fontStyle: 'italic' }}>15 bạn chung</Text>
          </View>
        </View>
        <TouchableOpacity style={{ alignSelf: 'center' }}>
          <View style={{ backgroundColor: '#6664FE', width: 80, height: 50, paddingTop: 15, borderRadius: 20, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}> Kết bạn </Text>
          </View>
        </TouchableOpacity>
      </View>
    })
  }
  return (
    <>
      <Grid>
        <Row size={1}>
          <Text style={{ color: '#333333', fontSize: 20, paddingLeft: 15, fontWeight: 'bold' }}><IconAnt style={{ color: 'red' }} name='infocirlceo' size={20}></IconAnt> Danh sách tìm kiếm gần đây</Text>
        </Row>
        <Row size={2} style={{ borderBottomWidth: 1, borderColor: '#EEE' }}>
          <ScrollView style={{ flex: 1 }}
            horizontal={true} scrollEventThrottle={10} paddingEnable={true}>
            {this.renderUser()}
          </ScrollView >
        </Row>
        <Row size={1}>
          <Text style={{ color: '#333333', fontSize: 20, paddingLeft: 15, fontWeight: 'bold' }}><IconAnt style={{ color: 'red' }} name='user' size={20}></IconAnt> Gợi ý kết bạn</Text>
        </Row>
        <Row size={8}>
          <ScrollView style={{ paddingLeft: 15, fontSize: 20, fontWeight: 'bold' }}>
            {this.renderSuggestion()}
          </ScrollView>
        </Row>
      </Grid>
    </>
  );
};



export default App;
