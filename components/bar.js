import React, { Component, useState } from "react";
import { View, Text } from "react-native";
import { AskBar } from "./askbar";
import CircularSlider from "rn-circular-slider";
import { styles } from "../styles";
import { Icon } from "react-native-elements";
import { mdiArrowRightCircle } from '@mdi/js';

export default class App extends Component {
  state = {
    value: 0,
  };

  render() {
    const { value } = this.state;

    return (
      <View style={styles.containerIn}>
        <View style={styles.mainask}>
          <Text style={styles.head2}>How much do you like to borrow?</Text>

          <AskBar style={styles.askbar} />
        </View>
        <View style={styles.mainaskk}>
            <View style={styles.slideer}>
                 <CircularSlider
            step={2}
            min={0}
            max={10000}
            value={value}
            onChange={(value) => this.setState({ value })}
            contentContainerStyle={styles.contentContainerStyle}
            strokeWidth={35}
            buttonBorderColor="#3FE3EB"
            buttonFillColor="#fff"
            buttonStrokeWidth={10}
            openingRadian={Math.PI / 4}
            buttonRadius={10}
            linearGradient={
              value <= 2000
                ? [
                    { stop: "0%", color: "navy" },
                    { stop: "40%", color: "#7E84ED" },
                  ]
                : [
                    { stop: "40%", color: "black" },
                    { stop: "100%", color: "green" },
                  ]
            }
          >
            
        
            <Text style={styles.value}>{value}$</Text>
            <Text style={styles.maxValue}>max 2000$</Text>
          </CircularSlider>
         </View>
                <View style={styles.minMax}>
                    <View style={styles.min}>
                        <Text style={styles.Val}>0$</Text>
                    </View>
                    <View style={styles.min}>
                        <Text style={styles.Val}>10000$</Text>
                    </View>
                </View>
                
               

            </View>
            <View style={styles.nexticon}>
                     <Icon name='arrow-forward-circle' type="ionicon"  size={75}/>
                </View>
      </View>
    );
  }
}
