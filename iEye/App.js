import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.top}>
    <View style={styles.middle1}>
    <View style={styles.middle2}>
    <View style={styles.bottom}>
      <StatusBar style="auto" />
      </View>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: '#142850',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: 30
  },
  middle1: {
    flex: 0.5,
    backgroundColor: '#27496D',
    width: "100%",
    height: 30
  },
  
  middle2: {
    flex: 0.5,
    backgroundColor: '#0C7B93',
    width: "100%",
    height: 30
  },
  bottom: {
    flex: 0.5,
    backgroundColor: '#00A8CC',
    width: "100%",
    height: 30
  }
});
