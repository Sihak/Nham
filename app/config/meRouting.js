import { createStackNavigator } from 'react-navigation';
import MeScreen from '../screen/me';
import AddPostScreen from '../screen/me/addPost';
import FilterScreen from '../screen/me/FilterScreen';


const MeRouting = createStackNavigator({

    Me: {
        screen: MeScreen,
    },
    AddPost: {
        screen: AddPostScreen,
    },
    SelectLocation: {
        screen: FilterScreen,
    },


}, {
        headerMode: 'none',
        mode: 'modal'
    })


    MeRouting.navigationOptions = ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
      
        return {
          tabBarVisible,
        };
      };

export default MeRouting;