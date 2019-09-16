import React from 'react';
import {View, Image,TouchableOpacity, Text} from 'react-native';

const GoNews = ({onPress}) => {
	return (
			 <View style={{paddingTop:16,paddingHorizontal:16}}>
              <View style={{position:'relative'}}>
                <Image source={require('../../../assets/dummy/sepak-bola.png')} style={{height:170,width:'100%',borderRadius:6}}/>
                <View style={{width:'100%',height:'100%',position:'absolute',top:0,left:0,backgroundColor:'black',opacity:0.2,borderRadius:6}}></View>
                <View style={{height:15,width:60,position:'absolute',top:16,left:16}}>
                  <Image source={require('../../../assets/logo/white.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>                                                                                                                                              
                </View>
              </View>
              <View style={{paddingTop: 16,paddingBottom: 20,borderBottomColor:'#e8e9ed',borderBottomWidth:1,marginBottom:20}}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#1c1c1c'}}>GO-NEWS</Text>
                <Text styele={{fontSize:14, fontWeight:'nolmal',color:'#7a7a7a',marginBottom:11}}>Dimas Derajat Selamatkan Pinalti, Timnas U-23 kalahkan Brunei</Text>
                <TouchableOpacity style={{backgroundColor:'#61A756',paddingHorizontal:12,paddingVertical:11,alignSelf:'flex-end',borderRadius:4}}  onPress={onPress}>
                  <Text style={{fontSize:13,fontWeight:'bold',color:'white',textAlign:'center'}}>READ</Text>
                </TouchableOpacity>
              </View>
            </View>

		)
}

export default GoNews; 