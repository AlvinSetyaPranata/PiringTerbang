import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from '../screens/Beranda';
import {Path, Svg} from 'react-native-svg';
import Keranjang from '../screens/Keranjang';

function HomeIcon({color, size}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 17.1786V11.1784H12V17.1786H17V9.17835H20L10 0.178101L0 9.17835H3V17.1786H8Z"
        fill={color}
      />
    </Svg>
  );
}

function CartIcon({color, size}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.1666 15C13.2416 15 12.4999 15.7416 12.4999 16.6666C12.4999 17.1087 12.6755 17.5326 12.9881 17.8451C13.3006 18.1577 13.7246 18.3333 14.1666 18.3333C14.6086 18.3333 15.0325 18.1577 15.3451 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666C15.8333 16.2246 15.6577 15.8007 15.3451 15.4881C15.0325 15.1756 14.6086 15 14.1666 15ZM0.833252 1.66663V3.33329H2.49992L5.49992 9.65829L4.36659 11.7C4.24159 11.9333 4.16659 12.2083 4.16659 12.5C4.16659 12.942 4.34218 13.3659 4.65474 13.6785C4.9673 13.991 5.39122 14.1666 5.83325 14.1666H15.8333V12.5H6.18325C6.128 12.5 6.07501 12.478 6.03594 12.4389C5.99687 12.3999 5.97492 12.3469 5.97492 12.2916C5.97492 12.25 5.98325 12.2166 5.99992 12.1916L6.74992 10.8333H12.9583C13.5833 10.8333 14.1333 10.4833 14.4166 9.97496L17.3999 4.58329C17.4583 4.44996 17.4999 4.30829 17.4999 4.16663C17.4999 3.94561 17.4121 3.73365 17.2558 3.57737C17.0996 3.42109 16.8876 3.33329 16.6666 3.33329H4.34159L3.55825 1.66663M5.83325 15C4.90825 15 4.16659 15.7416 4.16659 16.6666C4.16659 17.1087 4.34218 17.5326 4.65474 17.8451C4.9673 18.1577 5.39122 18.3333 5.83325 18.3333C6.27528 18.3333 6.6992 18.1577 7.01176 17.8451C7.32432 17.5326 7.49992 17.1087 7.49992 16.6666C7.49992 16.2246 7.32432 15.8007 7.01176 15.4881C6.6992 15.1756 6.27528 15 5.83325 15Z"
        fill={color}
      />
    </Svg>
  );
}

// function HistoryIcon({color, size}) {
//   return (
//     <Svg
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg">
//       <Path
//         d="M10.0001 1.66663C8.90573 1.66663 7.8221 1.88217 6.81105 2.30096C5.80001 2.71975 4.88135 3.33358 4.10752 4.1074C2.54472 5.67021 1.66675 7.78982 1.66675 9.99996C1.66675 12.2101 2.54472 14.3297 4.10752 15.8925C4.88135 16.6663 5.80001 17.2802 6.81105 17.699C7.8221 18.1177 8.90573 18.3333 10.0001 18.3333C12.2102 18.3333 14.3298 17.4553 15.8926 15.8925C17.4554 14.3297 18.3334 12.2101 18.3334 9.99996C18.3334 8.90561 18.1179 7.82198 17.6991 6.81093C17.2803 5.79988 16.6665 4.88122 15.8926 4.1074C15.1188 3.33358 14.2002 2.71975 13.1891 2.30096C12.1781 1.88217 11.0944 1.66663 10.0001 1.66663ZM13.5001 13.5L9.16675 10.8333V5.83329H10.4167V10.1666L14.1667 12.4166L13.5001 13.5Z"
//         fill="#9D9D9D"
//       />
//     </Svg>
//   );
// }

// function Account({color, size}) {
//   return (
//     <Svg
//       width={size}
//       height={size}
//       viewBox="0 0 22 22"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg">
//       <Path
//         d="M11.0001 3.66663C11.9725 3.66663 12.9052 4.05293 13.5928 4.74057C14.2804 5.4282 14.6667 6.36083 14.6667 7.33329C14.6667 8.30575 14.2804 9.23838 13.5928 9.92602C12.9052 10.6136 11.9725 11 11.0001 11C10.0276 11 9.09499 10.6136 8.40736 9.92602C7.71972 9.23838 7.33341 8.30575 7.33341 7.33329C7.33341 6.36083 7.71972 5.4282 8.40736 4.74057C9.09499 4.05293 10.0276 3.66663 11.0001 3.66663ZM11.0001 12.8333C15.0517 12.8333 18.3334 14.4741 18.3334 16.5V18.3333H3.66675V16.5C3.66675 14.4741 6.94841 12.8333 11.0001 12.8333Z"
//         fill={color}
//       />
//     </Svg>
//   );
// }

export default function Router() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false, tabBarIcon: HomeIcon, tabBarActiveTintColor: 'red'}}
      />
      <Tabs.Screen
        name="Keranjang"
        component={Keranjang}
        options={{headerShown: false, tabBarIcon: CartIcon, tabBarActiveTintColor: 'red'}}
      />
    </Tabs.Navigator>
  );
}
