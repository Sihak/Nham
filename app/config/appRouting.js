import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeRouting from './stackRouting';
import HomeScreen from "../screen/home";
import {COLORS} from '../module';
import MeRouting from "./meRouting";
import FavouriteScreen from "../screen/favourite";

const color = "rgba(0,0,0,0.3)";
const activeColor = '#333';
const iconSize = 26;

const AppRouting = TabNavigator(
  {  
    Home: {
      screen: HomeRouting,
      navigationOptions: {
        title: "Home",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="dashboard"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialIcons
              name="dashboard"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
   
    Me: {
      screen: MeRouting,
      navigationOptions: {
        title: "Me",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="person"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ): (
            <MaterialIcons
              name="person"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
    Favourite: {
      screen: FavouriteScreen,
      navigationOptions: {
        title: "Favourite",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="favorite"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={COLORS.RED}
            />
          ) : (
            <MaterialIcons
              name="favorite"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
    Menu: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Menu",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MaterialIcons
              name="menu"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={activeColor}
            />
          ) : (
            <MaterialIcons
              name="menu"
              size={iconSize}
              iconStyle={{ paddingBottom: 0, paddingTop: 0 }}
              color={color}
            />
          )
      }
    },
  },
  {
    removeClippedSubviews : true,
    swipeEnabled: false,
    initialRouteName: "Home",
    tabBarPosition: "bottom",
    animationEnabled: true,
    activeTintColor: activeColor,
    inActiveTintColor: color,
    tabBarOptions: {
        showLabel: true,
        showIcon: true,
        labelStyle : {
            fontSize: 13,
            fontWeight: '900'
        },
        activeTintColor : activeColor,
        style: {
            elevation: 0,
            borderTopWidth: 1,
            borderTopColor: '#F0F0F5',
            backgroundColor: '#fff',
            paddingTop: 5,
        },
        indicatorStyle: {
            backgroundColor: '#fff',
        },
    },
  }
);

export default AppRouting;