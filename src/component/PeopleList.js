import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default function Itemlist(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#32cd32',
          flexDirection: 'row',
        }}>
        <Image
          source={{uri: props.item.imageUrl}}
          style={{width: 100, height: 100, margin: 5}}></Image>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.flatItems}>{props.item.title}</Text>
          <Text style={styles.flatItems}>{props.item.description}</Text>
        </View>
      </View>
      <View style={{height: 1, backgroundColor: '#ffff'}}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  flatItems: {
    color: '#ffff',
    padding: 10,
    fontSize: 16,
  },
});
