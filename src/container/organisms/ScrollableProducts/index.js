 import React,{Component} from 'react';
 import {View,Image,Text, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/Scrollableitem'

class ScrollableProducts extends Component { 
	render() {
    return ( 
        <View>
          <View style={{height:15,width:60,marginLeft:16}}>
          <Image source={require('../../../assets/logo/go-food.png')} style={{width:undefined,height:undefined,resizeMode:'contain',flex:1}}/>  
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:16,paddingHorizontal:16}} >
                  <Text style={{fontSize:17,fontWeight:'bold',color:'#1c1c1c'}} >Nearby Restaurant</Text>
                  <Text style={{fontSize:17,fontWeight:'bold',color:'#61a75a'}}>See All</Text>
          </View>
          <ScrollView horizontal style={{flexDirection:'row',paddingLeft:16}}>
              <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
              <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-gm.jpg')} />
              <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-orins.jpg')} />
              <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-banka.jpg')} />
              <ScrollableItem title="KFC Aeon Mall" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
          
          </ScrollView>
        </View>
		)		
	}
}


export default ScrollableProducts;