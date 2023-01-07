import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CalculoColheitaTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forneça os dados abaixo: </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '3%',
        marginVertical: '3%',
    },

    title:{
        fontSize: 20,
        color: '#2d6035',
        fontWeight: '700',
    }
})

export default CalculoColheitaTitle