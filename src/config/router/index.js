import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail,OrderDetail,Orders } from '../../container/pages'


const HomeStack = createStackNavigator(
    {
        Home, 
        NewsDetail,
        },
    {
            headerMode: 'none',
            initialRouterName: 'Home' 
    }
)


const OrdersStack = createStackNavigator(
    {
        Orders, 
        OrderDetail,
        },
    {
            headerMode: 'none',
            initialRouterName: 'Orders'  
    }
)


const Router = createSwitchNavigator (
    {
        HomeStack ,
        OrdersStack
    },
    {
        headerMode: 'none',
        initialRouterName: 'HomeStack' 
    }
);

export default createAppContainer(Router);