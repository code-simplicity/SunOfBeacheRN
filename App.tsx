/**
 * App的入口文件，这里作为渲染系统入口和登录的一个占位
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>首页</Text>
      <Button title="去登录页面" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>登录页面</Text>
      <Button title="去首页" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

// 创建一个路由栈
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={DetailsScreen} options={{ title: '登录' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
