import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screen/home';
import ListNham from '../screen/listNham';
import SafariView from '../screen/listNham/SafariView';
import FilterScreen from '../screen/listNham/FilterScreen';


const HomeRouting = createStackNavigator({

    Home: {
        screen: HomeScreen,
    },

    ListNham: {
        screen: ListNham,
    },

    ViewNham: {
        screen: SafariView,
    },
    Filter: {
        screen: FilterScreen,
    }
}, {
        headerMode: 'none',
        mode: 'modal'
    })


    HomeRouting.navigationOptions = ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
      
        return {
          tabBarVisible,
        };
      };

export default HomeRouting;