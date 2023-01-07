import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CalculoColheitaHeader = () => {
  return (
    <View style={styles.containerHeader}>
      <Text 
        style={{fontSize: 22, color: '#fff', fontWeight: '700'}}>
            Cálculo de Colheita
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: '#2d6035',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: '3%',
    }
})


export default CalculoColheitaHeader