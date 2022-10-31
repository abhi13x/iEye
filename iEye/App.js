import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const bkgcolor = {uri: "https://i.pinimg.com/originals/5f/61/17/5f6117d56f95567f8d86d8bed38e5c9c.jpg"};

export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={bkgcolor} resizeMode="cover" style={styles.image}>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
  },
});
