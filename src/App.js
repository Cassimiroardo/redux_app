import React from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import List from './components/List';
import Main from './components/Main';

import store from './store';

const App = () => {
  return (
    <View style={style.content}>
      {/* <StatusBar barStyle="light-content" backgroundColor="green" /> */}
      <Provider store={store}>
        <List />
        <Main />
      </Provider>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
  },
});

export default App;
