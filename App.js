import React,{ Component } from 'react';
import Router from './src/config/router';
import { ScrollView,View} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/Goinfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/container/organisms/ScrollableProducts';
import HomeMainFeature from './src/container/organisms/HomeMainFeature';
import HomeGoPay from './src/container/organisms/HomeGopay';
import NavBar from './src/container/organisms/NavBar';

// class Gopayfeature extends Component {
//   render(){return(
//     <View  style={{flex:1, alignItems:'center'}}>
//     <Image source={this.props.img} />
//       <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15}}>{this.props.title}</Text>
//     </View>
//   )
// }}
  

class App extends Component {
  render() {
    return (
            <Router />
      
      );
  }
}


export default App;