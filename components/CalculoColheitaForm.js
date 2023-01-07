import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';

const CalculoColheitaForm = () => {
    const [textTempoColhedora, onChangeTextTempoColhedora] = useState('');
    const [textTempoTransbordo, onChangeTextTempoTransbordo] = useState('');
    const [textTma, onChangeTextTma] = useState('');
    const [textQtdColhedoras, onChangeTextQtdColhedoras] = useState('');
    const [textQtdTransbordos, onChangeTextQtdTransbordos] = useState('');
    const [textDensidade, onChangeTexDensidade] = useState('');
    const [textQtdReboques, onChangeTextQtdReboques] = useState('');
    const [producaoCdMediaHora, setProducaoCdMediaHora] = useState('');
    const [producaoCdTotal, setProducaoCdTotal] = useState('');
    const [producaoTtTotal, setProducaoTtTotal] = useState('');
    const [entregaCamHora, setEntregaCamHora] = useState('');


    const changeProducaoCdMediaHora = () => {
        setProducaoCdMediaHora(calcularproducaoCdMediaHora());
    }

    const changeProducaoCdTotal = () => {
        setProducaoCdTotal(calcularProducaoCdTotal());
    }

    const changeProducaoTtTotal = () => {
        setProducaoTtTotal(calcularProducaoTtTotal());
    }

    const changeEntregaCamHora = () => {
        setEntregaCamHora(calcularEntregaCamHora());
    }


    function calcularproducaoCdMediaHora() {
        if(textTempoColhedora != '' && textTempoTransbordo != '' && textTma != '' && textQtdColhedoras != '' && textQtdTransbordos != '' && textDensidade != '' && textQtdReboques != '') {
            let resultproducaoCdMediaHora;
            let tma = textTma.replace(',', '.');
            let tempo = textTempoColhedora.replace(',', '.');
            resultproducaoCdMediaHora = ((tma * 60) / tempo);
            return 'Prod. CD média ton/hora: ' + resultproducaoCdMediaHora.toFixed(1);
        }else{
            return 'Preencha todos os campos'
        }
    }

    function calcularProducaoCdTotal() {
        if(textTempoColhedora != '' && textTempoTransbordo != '' && textTma != '' && textQtdColhedoras != '' && textQtdTransbordos != '' && textDensidade != '' && textQtdReboques != '') {
            let tma = textTma.replace(',', '.');
            let tempo = textTempoColhedora.replace(',', '.');
            let QtdColhedora = textQtdColhedoras.replace(',', '.');
            let resultCalcularProducaoTtTotal;
            resultCalcularProducaoTtTotal = ((tma * 60) / tempo) * QtdColhedora;
            return 'Prod. CD total ton/hora: ' + resultCalcularProducaoTtTotal.toFixed(1);
        }else{
            return '';
        }
    }

    function calcularProducaoTtTotal() {
        if(textTempoColhedora != '' && textTempoTransbordo != '' && textTma != '' && textQtdColhedoras != '' && textQtdTransbordos != '' && textDensidade != '' && textQtdReboques != '') {
            let tma = textTma.replace(',', '.');
            let tempo = textTempoTransbordo.replace(',', '.');
            let QtdTransbordos = textQtdTransbordos.replace(',', '.');
            let resultCalcularProducaoTtTotal;
            resultCalcularProducaoTtTotal = ((tma * 60) / tempo) * QtdTransbordos;
            return 'Prod. TT total ton/hora: ' + resultCalcularProducaoTtTotal.toFixed(1);
        }else{
            return '';
        }
    }

    var producaoColhedora = calcularProducaoCdTotal();
    var producaoTransbordo = calcularProducaoTtTotal();

    function calcularEntregaCamHora(){
        producaoColhedora = producaoColhedora.replace('Prod. CD total ton/hora: ', '');
        producaoTransbordo = producaoTransbordo.replace('Prod. TT total ton/hora: ', '');
        if(textTempoColhedora != '' && textTempoTransbordo != '' && textTma != '' && textQtdColhedoras != '' && textQtdTransbordos != '' && textDensidade != '' && textQtdReboques != '') {
            let limitante;
            let resultLimitante;
            producaoColhedora = parseFloat(producaoColhedora);
            producaoTransbordo = parseFloat(producaoTransbordo);
            if(producaoColhedora < producaoTransbordo){
                limitante = producaoColhedora;
            }else if(producaoColhedora > producaoTransbordo){
                limitante = producaoTransbordo;
                }else{
                    limitante = producaoColhedora;
                }
                resultLimitante = (limitante/(textDensidade * textQtdReboques));
            return 'Entrega cam/h: ' + resultLimitante.toFixed(1);
        }else{
            return '';
        }
    }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.containerInput}>
            <View style={{width: '48.5%'}}>
                <Text style={styles.labelInput}>Tempo de CD (min): </Text>
                <TextInput 
                    style={styles.inputForm}
                    onChangeText={onChangeTextTempoColhedora}
                    value={textTempoColhedora}
                    placeholder=""
                    keyboardType="decimal-pad"
                    maxLength={20}
                    autoCapitalize="none"
                />
            </View>
            <View style={{width:'48.5%'}}>
                <Text style={styles.labelInput}>Tempo TT (min): </Text>
                <TextInput 
                    style={styles.inputForm}
                    onChangeText={onChangeTextTempoTransbordo}
                    value={textTempoTransbordo}
                    placeholder=""
                    keyboardType="decimal-pad"
                    maxLength={20}
                    autoCapitalize="none"
                />
            </View>
        </View>
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
        <View style={styles.containerInput}>
            <View style={{width:'48.5%'}}>
                <Text style={styles.labelInput}>Qtd CD na frente: </Text>
                <TextInput 
                    style={styles.inputForm}
                    onChangeText={onChangeTextQtdColhedoras}
                    value={textQtdColhedoras}
                    placeholder=""
                    keyboardType="numeric"
                    maxLength={20}
                    autoCapitalize="none"
                />
            </View>
            <View style={{width:'48.5%'}}>
                <Text style={styles.labelInput}>Qtd TT na frente: </Text>
                    <TextInput 
                        style={styles.inputForm}
                        onChangeText={onChangeTextQtdTransbordos}
                        value={textQtdTransbordos}
                        placeholder=""
                        keyboardType="numeric"
                        maxLength={20}
                        autoCapitalize="none"
                    />
            </View>
        </View>
        <View style={styles.containerInput}>
            <View style={{width:'48.5%'}}>
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
            <View style={{width: '48.5%'}}>
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
        <View style={styles.containerResult}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Resultados: </Text>
            <View style={styles.result}>
                <Text 
                    style={styles.textResult}>
                    {producaoCdMediaHora}
                </Text>
                <Text style={styles.textResult}>
                    {producaoCdTotal}
                </Text>
                <Text style={styles.textResult}>
                    {producaoTtTotal}
                </Text>
                <Text style={{fontSize: 20, fontWeight: '700', color: '#2d6035', marginBottom: '2%'}}>
                    {entregaCamHora}
                </Text>
            </View>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {changeProducaoCdMediaHora() ,changeProducaoCdTotal(), changeProducaoTtTotal(), changeEntregaCamHora()}}
        >
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 18}}>CALCULAR</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            setProducaoCdMediaHora('')
            setProducaoCdTotal('')
            setProducaoTtTotal('')
            setEntregaCamHora('')
            onChangeTextTempoColhedora('')
            onChangeTextTempoTransbordo('')
            onChangeTextTma('')/
            onChangeTextQtdColhedoras('')
            onChangeTextQtdTransbordos('')
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
    justifyContent: 'space-between',
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
    marginBottom: 2,
  },

  result: {
    marginVertical: '1%'
  },

  textResult: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: '1%',
    color: '#2d6035',
  },

  containerResult: {
    width: '100%',
    height: '28%',
    backgroundColor: '#dffae1',
    borderRadius: 8,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    marginTop: '2%',
    marginBottom: '5%',
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