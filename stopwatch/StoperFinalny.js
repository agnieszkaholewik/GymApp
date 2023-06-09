import  React, { useState, useRef, useCallback } from "react";
import { StyleSheet, SafeAreaView, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Result from "./Wyniki";
import Control from "./Przyciski";
import { displayTime } from "./Czas";




export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setRunning] = useState(false);
  const [results, setResults] = useState([]);
  const timer = useRef(null);
  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults((previousResults) => [time, ...previousResults]);
    } else {
      setResults([]);
      setTime(0);
    }
  }, [isRunning, time]);
const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
setRunning((previousState) => !previousState);
  }, [isRunning]);
return (
    <SafeAreaView style={styles.container}>
        
      <StatusBar style="light" />
<View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>
<View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
        />
      </View>
<View style={styles.result}>
        <Result results={results} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },
  display: {
    flex: 2 / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    color: "black",
    fontSize: 70,
    fontWeight: "200",
    
  },
  control: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  result: { flex: 2 / 5 },
});