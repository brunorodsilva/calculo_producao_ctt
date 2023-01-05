import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CalculoColheitaHeader from '../components/CalculoColheitaHeader'
import CalculoColheitaForm from '../components/CalculoColheitaForm'
import CalculoColheitaTitle from '../components/CalculoColheitaTitle'

const CalculoColheitaScreen = () => {
  return (
    <View style={styles.container}>
        <CalculoColheitaHeader />
        <CalculoColheitaTitle />
        <CalculoColheitaForm />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(241, 241, 241)',
    }
})

export default CalculoColheitaScreen