import React from 'react';
import {View,Image,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBarIcon = (props) => {
return(
    <View style={{flex:1, alignItems:'center' ,justifyContent:'center'}}>
        <TouchableOpacity onPress={props.onPress}>
            <Image style={{height:26,width:26}} source={props.img}/>
            <Text  style={{fontSize:10, color:'#545454', marginTop:4,color: props.active ? '#43ab4a' : '#545454'}} >{props.title}</Text>
        </TouchableOpacity>
    </View>
        )
}

export default NavBarIcon;