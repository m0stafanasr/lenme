import {styles} from '../styles'
import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import { Switch } from 'react-native-elements';
export const AskBar = ()=>{
    const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

    return(
        <View style={styles.askBox}>
                    <View style={styles.ask}>
                        <Text style={styles.crypto}>
                            Do you own crypto?
                        </Text>
                        <Text style={styles.hint}>
                            Increase your limit up to 10000$
                        </Text>
                    </View>
                    <View style={styles.switch}>
                        <Switch   value={checked} onValueChange={(value) => setChecked(value)} color={'#27d507'} thumbColor={'white'}></Switch>
                    </View>
                </View>
    )
}