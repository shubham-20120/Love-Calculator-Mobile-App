import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TextInput, Appbar, Button } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DisplayLove from './compenents/DisplayLove';

export default function App() {
  const [fname, setFName] = useState("");
  const [sname, setSName] = useState("");
  const [apiData, setApiData] = useState(null);
  const [display, setDiaplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPercent = () => {
    if (fname == "") {
      alert("Please enter your name!");
      return;
    }
    if (sname == "") {
      alert("Please enter your Partner's name!");
      return;
    }
    setIsLoading(true);
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "6110fdd2a8msh688c6b4e0b3a5a9p1104e8jsnf9449e82164c"
      }
    }).then(res => res.json()).then(data => {
      setApiData(data);
    })
    setIsLoading(false);
    setDiaplay(true);
    setFName("");
    setSName("");
  }

  return (
    <View style={styles.container}>
      <Appbar style={styles.bottom}>
        <Appbar.Content
          title="Patel's Love Calculator"
          style={{ alignItems: 'center' }}
        />
      </Appbar>
      <TextInput
        label="Your Name"
        value={fname}
        style={{ marginTop: 20 }}
        onChangeText={text => setFName(text)}
      />
      <TextInput
        label="Partner's Name"
        value={sname}
        onChangeText={text => setSName(text)}
      />
      <Button loading={isLoading} icon="heart" mode="contained" onPress={fetchPercent}>
        Calculate Love
      </Button>
      {
        display ? <DisplayLove data={apiData} /> : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
