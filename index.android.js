import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './configureStore'
// import App from './app'
import TeamMembers from './components/TeamMembers'
import AddMember from './components/AddMember'
import {
  Scene,
  Reducer,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';
const store = configureStore()

const onExitApp = () => {
  Alert.alert(
    'Exit',
    'Are you sure you want to exit this app',
    [
      { text: 'Cancel', onPress: () => {} },
      { text: 'YES', onPress: () => BackAndroid.exitApp() },
    ]
  );
  return true;
};

const Team = () => (
    <Provider store={store}>
      <Router onExitApp={onExitApp}>
    <Scene key="root" navigationBarStyle={{backgroundColor:'#944dff'}} titleStyle={{color:'white'}} backButtonImage={require('./images/back.png')} >
      <Scene key="teamMembers" initial={true} component={TeamMembers} title="Team Members" onRight={() => Actions.addMember()} rightButtonImage={require('./images/plus.png')} />
      <Scene key="addMember" component={AddMember} title="add a team member" onRight={() => Actions.teamMembers()} rightButtonImage={require('./images/close.png')} />
    </Scene>
    </Router>
    </Provider>
)

AppRegistry.registerComponent('Team', () => Team)
