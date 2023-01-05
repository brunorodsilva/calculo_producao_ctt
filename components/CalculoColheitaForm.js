import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';

const CalculoColheitaForm = () => {
    const [texTempo, onChangeTextTempo] = useState('');
    const [textTma, onChangeTextTma] = useState('');
    const [textQtdColhedoras, onChangeTextQtdColhedoras] = useState('');
    const [textDensidade, onChangeTexDensidade] = useState('');
    const [textQtdReboques, onChangeTextQtdReboques] = useState('');
    const [producaoPorColhedoraHora, setProducaoPorColhedoraHora] = useState('');
    const [producaoDaFrente, setProducaoDaFrente] = useState('');
    const [producaoCaminhaoPorHora, setProducaoCaminhaoPorHora] = useState('');

    const changeProducaoPorColhedoraHora = () => {
        setProducaoPorColhedoraHora(calcularProducaoPorColhedoraHora());
    }

    const changeProducaoDaFrente = () => {
        setProducaoDaFrente(calcularProducaoDaFrente());
    }

    const changeProducaoCaminhaoPorHora = () => {
        setProducaoCaminhaoPorHora(calcularProducaoCaminhaoPorHora());
    }

    function calcularProducaoPorColhedoraHora() {
        if(texTempo != '' & textTma != '' && textQtdColhedoras != '' && textDensidade != '' && textQtdReboques != '') {
            let resultProducaoPorColhedoraHora;
            resultProducaoPorColhedoraHora = ((textTma * 60) / texTempo);
            return 'Produção colhedora: ' + resultProducaoPorColhedoraHora.toFixed(2) + ' ton/hora'
        }else{
            return 'Preencha todos os campos'
        }
    }

    function calcularProducaoDaFrente() {
        if(texTempo != '' & textTma != '' && textQtdColhedoras != '' && textDensidade != '' && textQtdReboques != '') {
            let resultcalcularProducaoDaFrente;
            resultcalcularProducaoDaFrente = ((textTma * 60) / texTempo) * textQtdColhedoras;
            return 'Produção frente: ' + resultcalcularProducaoDaFrente.toFixed(2) + ' ton/hora';
        }else{
            return '';
        }
    }

    function calcularProducaoCaminhaoPorHora() {
        if(texTempo != '' & textTma != '' && textQtdColhedoras != '' && textDensidade != '' && textQtdReboques != '') {
            let resultcalcularProducaoCaminhaoPorHora;
            let densidade = textDensidade * textQtdReboques;
            let producaoFrente;
            producaoFrente = producaoDaFrente.replace('Produção frente: ', '');
            producaoFrente = producaoFrente.replace(' ton/hora', '');
            console.log(densidade);
            resultcalcularProducaoCaminhaoPorHora =   producaoFrente / densidade;
            console.log(producaoFrente);
            return 'Quantidade caminhão: ' + resultcalcularProducaoCaminhaoPorHora.toFixed(2) + ' cam/hora';
        }else{
            return '';
        }
    }

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.labelInput}>Tempo de colheita(min): </Text>
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextTempo}
            value={texTempo}
            placeholder=""
            keyboardType="numeric"
            maxLength={20}
        />
        <Text style={styles.labelInput}>Capacidade do TMA em(ton): </Text>
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextTma}
            value={textTma}
            placeholder=""
            keyboardType="numeric"
            maxLength={20}
        />
        <Text style={styles.labelInput}>Quantidade de colhedora na frente: </Text>
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextQtdColhedoras}
            value={textQtdColhedoras}
            placeholder=""
            keyboardType="numeric"
            maxLength={20}
        />
        <View style={styles.containerInput}>
            <View style={{marginRight: '3%', width:'60%'}}>
                <Text style={styles.labelInput}>Densidade de carga: </Text>
                <TextInput 
                    style={styles.inputForm}
                    onChangeText={onChangeTexDensidade}
                    value={textDensidade}
                    placeholder=""
                    keyboardType="numeric"
                    maxLength={20}
                />
            </View>
            <View style={{width: '37%'}}>
                <Text style={styles.labelInput}>Qtd reboques: </Text>
                <TextInput 
                    style={styles.inputForm}
                    onChangeText={onChangeTextQtdReboques}
                    value={textQtdReboques}
                    placeholder=""
                    keyboardType="numeric"
                    maxLength={20}
                />
            </View>
        </View>
        <View style={styles.result}>
            <Text 
                style={styles.textResult}>
                {producaoPorColhedoraHora}
            </Text>
            <Text style={styles.textResult}>
                {producaoDaFrente}
            </Text>
            <Text style={styles.textResult}>
                {producaoCaminhaoPorHora}
            </Text>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {changeProducaoPorColhedoraHora(), changeProducaoDaFrente(), changeProducaoCaminhaoPorHora()}}
        >
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>CALCULAR</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            setProducaoPorColhedoraHora('')
            setProducaoDaFrente('')
            setProducaoCaminhaoPorHora('')
            onChangeTextTempo('')
            onChangeTextTma('')
            onChangeTextQtdColhedoras('')
            onChangeTexDensidade('')
            onChangeTextQtdReboques('')
        }}

        >
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>LIMPAR</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

container:{
    marginLeft: '6%',
    marginRight: '6%',
},

containerInput: {
    flexDirection: 'row',
    width: '100%',
},

inputForm: {
    width: '100%',
    height: 40,
    backgroundColor: '#1A2E35',
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#E8ECF4',
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#8391A1',
    marginRight: '2%',
    marginBottom: '2%',
  },

  labelInput: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  result: {
    marginVertical: '3%'
  },

  textResult: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: '2%',
    color: '#2d6035',
  },

  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#2d6035',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '3%',
  },

})

export default CalculoColheitaForm