import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile223026Navigator from '../features/UserProfile223026/navigator';
import Settings223025Navigator from '../features/Settings223025/navigator';
import Settings223023Navigator from '../features/Settings223023/navigator';
import SignIn2223021Navigator from '../features/SignIn2223021/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile223026: { screen: UserProfile223026Navigator },
Settings223025: { screen: Settings223025Navigator },
Settings223023: { screen: Settings223023Navigator },
SignIn2223021: { screen: SignIn2223021Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
