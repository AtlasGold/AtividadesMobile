import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:24}}>PARABENS!</Text>
      <Image source={require('./assets/Bored-Ape-Yacht-Club-8331.png')} />
      <Text style={{padding:5}}>
        Você acaba de ganhar esta belissima NFT de macaco de graça, ela deve valer uns 10 milhões e esta ai agora na sua mão. Cuiado a policia já deve estar
        te rastreando depois desse grande feito
      </Text>
      <Text style={{position:'relative', paddingStart:400,marginTop:50}}>ass: luan Vinicius</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
