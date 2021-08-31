import React from "react"
import { StyleSheet, Text, View } from "react-native"

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 21,
    marginBottom: 20,
    backgroundColor: '#ffcc00'
  },
  text: {
    fontSize: 24,
    color: 'black'
  }
})