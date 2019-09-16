import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGopay extends Component {
	render(){
		return(
			<View style={{marginHorizontal:17,marginTop:8}}>
              <View style={{flexDirection:'row',justifyContent: 'space-between',backgroundColor:'#2C5fb8',borderTopLeftRadius:4, borderTopRightRadius:4, padding:14}}>
                <Image source={require('../../../assets/icon/gopay.png')} />
                <Text style={{fontSize:17,fontWeight:'bold',color:'white'}}>Rp.50.000</Text>  
              </View> 
              <View style={{flexDirection:'row',paddingTop:20,paddingBottom:14,backgroundColor:'#2F65BD',borderBottomLeftRadius:4,borderBottomRightRadius:4}}>
                
                <GopayFeature title="pay" img={require('../../../assets/icon/pay.png' )} />
                <GopayFeature title="Nearby" img={require('../../../assets/icon/nearby.png' )}  />
                <GopayFeature title="Top UP" img={require('../../../assets/icon/topup.png' )} />
                <GopayFeature  title="More" img={require('../../../assets/icon/pay.png' )} />
            
              </View>
            </View>

			)
	}
}

export default HomeGopay;