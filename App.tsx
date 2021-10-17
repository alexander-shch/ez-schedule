import React, { FC } from 'react';

import { SafeAreaView, ScrollView, StatusBar, Text, View, useColorScheme } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View>
          <Text>This is just some text</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
