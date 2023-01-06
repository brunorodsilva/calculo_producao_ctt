import { StatusBar } from 'react-native';
import CalculoColheitaScreen from './screens/CalculoColheitaScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#2d6035' StatusBarAnimation='fade' />
      <CalculoColheitaScreen />
    </>
  );
}
