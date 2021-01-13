import React,{Component}from 'react';
import {createDrawerNavigator}from 'react-navigation-drawer';
import {AppTabNavigator}from './AppTabNavigator';
import Sidebarmenu from './sidebarMenu';
import SettingsScreen from'../screens/SettingScreen';


export const AppDrawerNavigator=createDrawerNavigator({
   Home:{screen:AppTabNavigator},
SettingsScreen:{screen:SettingsScreen},
}, 
    {contentComponent:Sidebarmenu},
    {initialRouteName:'Home'}
)