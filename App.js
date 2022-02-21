import { StatusBar } from 'expo-status-bar';
import { Text, View, Image} from 'react-native';
import {styles} from './styles';
import Circle from './components/bar';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.head}>
        <Image source={{
      require: './assets/lenme.png'
    }} style={styles.logo}/>
        <Text style={styles.borrow}>Borrow</Text>
      </View>
      <View style={styles.Welcome}>
        <Text style={styles.Text}>hello Leola</Text>
      </View>
      
      <View style={styles.inner}>
        <Circle/>
      </View>
      
    </View>
  );
}


