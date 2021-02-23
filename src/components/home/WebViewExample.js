import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native'

const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView 
            source={{ uri: "file:///android_asset/index.html" }} 
            onMessage={event => {
               alert(event.nativeEvent.data);
          }}
            />
      </View>
   )
}
export default WebViewExample;

const styles = StyleSheet.create({
   container: {
      height: 737,
   }
})