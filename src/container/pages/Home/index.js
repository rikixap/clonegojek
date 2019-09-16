import React,{ Component } from 'react';
import { ScrollView,View} from 'react-native';


import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/Goinfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../container/organisms/ScrollableProducts';
import HomeMainFeature from '../../../container/organisms/HomeMainFeature';
import HomeGoPay from '../../../container/organisms/HomeGopay';
import NavBar from '../../../container/organisms/NavBar';


class Home extends Component {
    render (){
        return (
        <View style={{flex: 1}}>
            <ScrollView style={{flex: 1, backgroundColor:'white'}}>
                <SearchFeature />
                <HomeGoPay />
                <HomeMainFeature />
                <View style={{height:17,backgroundColor:'#f2f2f4',marginTop:20}}></View>
                <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')}/>
                <GoInfo />
                <GoBanner />
                <ScrollableProducts />
            </ScrollView>
            <NavBar/>
        </View>

        )
    }
}

export default Home;