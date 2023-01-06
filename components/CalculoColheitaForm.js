import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';

const CalculoColheitaForm = () => {
    const [textTempo, onChangeTextTempo] = useState('');
    const [textTma, onChangeTextTma] = useState('');
    const [textQtdColhedoras, onChangeTextQtdColhedoras] = useState('');
    const [textDensidade, onChangeTexDensidade] = useState('');
    const [textQtdReboques, onChangeTextQtdReboques] = useState('');
    const [producaoPorColhedoraHora, setProducaoPorColhedoraHora] = useState('');
    const [producaoDaFrente, setProducaoDaFrente] = useState('');
    const [producaoCaminhaoPorHora, setProducaoCaminhaoPorHora] = useState('');

    var producaoFrente = calcularProducaoDaFrente();


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
        if(textTempo != '' & textTma != '' && textQtdColhedoras != '' && textDensidade != '' && textQtdReboques != '') {
            let resultProducaoPorColhedoraHora;
            let tma = textTma.replace(',', '.');
            let tempo = textTempo.replace(',', '.');
            resultProducaoPorColhedoraHora = ((tma * 60) / tempo);
            return 'Produção colhedora ton/hora: ' + resultProducaoPorColhedoraHora.toFixed(1);
        }else{
            return 'Preencha todos os campos'
        }
    }

    function calcularProducaoDaFrente() {
        if(textTempo != '' & textTma != '' && textQtdColhedoras != '' && textDensidade != '' && textQtdReboques != '') {
            let tma = textTma.replace(',', '.');
            let tempo = textTempo.replace(',', '.');
            let QtdColhedora = textQtdColhedoras.replace(',', '.');
            let resultcalcularProducaoDaFrente;
            resultcalcularProducaoDaFrente = ((tma * 60) / tempo) * QtdColhedora;
            return 'Produção frente ton/hora: ' + resultcalcularProducaoDaFrente.toFixed(1);
        }else{
            return '';
        }
    }

    function calcularProducaoCaminhaoPorHora() {
        if(textTempo != '' & textTma != '' && textQtdColhedoras != '' && textDensidade != '' && textQtdReboques != '') {
            let resultcalcularProducaoCaminhaoPorHora;
            let densidade = textDensidade.replace(',', '.');
            let qtdReboques = textQtdReboques.replace(',', '.');
            let resultDensidade = densidade * qtdReboques;
            producaoFrente = producaoFrente.replace('Produção frente ton/hora: ', '');
            resultcalcularProducaoCaminhaoPorHora =   producaoFrente / resultDensidade;
            return 'Quantidade caminhão cam/hora: ' + resultcalcularProducaoCaminhaoPorHora.toFixed(1);
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
            value={textTempo}
            placeholder=""
            keyboardType="decimal-pad"
            maxLength={20}
            autoCapitalize="none"
        />
        <Text style={styles.labelInput}>Capacidade do TMA em(ton): </Text>
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextTma}
            value={textTma}
            placeholder=""
            keyboardType="numeric"
            maxLength={20}
            autoCapitalize="none"
        />
        <Text style={styles.labelInput}>Quantidade de colhedora na frente: </Text>
        <TextInput 
            style={styles.inputForm}
            onChangeText={onChangeTextQtdColhedoras}
            value={textQtdColhedoras}
            placeholder=""
            keyboardType="numeric"
            maxLength={20}
            autoCapitalize="none"
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
                    autoCapitalize="none"
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
                    autoCapitalize="none"
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