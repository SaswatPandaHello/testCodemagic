import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import analytics from '@react-native-firebase/analytics';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {
        {
          width: Dimensions.get('window').width,
          height: 300,
          backgroundColor: 'grey',
          position: 'absolute',
          top: 0
        }
      } >
        <Text>
          just checking!!
        </Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('loggingDirectly', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
      <Button
        title="toSend"
        onPress={async () =>
          await analytics().logEvent('toSend', null) 
        }
      />
      <Button
        title="toSendwith PArameter"
        onPress={async () =>
          await analytics().logEvent('toSendParam', {
            toSendData : 'sending data'

          }) 
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
