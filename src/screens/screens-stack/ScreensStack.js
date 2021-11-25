import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Body } from '@reactnativegithubquery/components/typography';

import SearchScreen from '@reactnativegithubquery/screens/search-screen';
import UserScreen from '@reactnativegithubquery/screens/user-screen';

const Stack = createNativeStackNavigator();

const NavigationScreens = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitle: ({ children: title }) => <Body text={title} bold />,
                headerStyle: { backgroundColor: theme.palette.background },
                headerBackTitle: '',
                headerLeft: () => (
                    <Icon.Button
                        name="chevron-left"
                        backgroundColor="transparent"
                        underlayColor={theme.palette.foreground}
                        onPress={() => navigation.goBack()}
                    />
                ),
            }}
        >
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="User" component={UserScreen} />
        </Stack.Navigator>
    );
};

export default NavigationScreens;
