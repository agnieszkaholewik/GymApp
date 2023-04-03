import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import { displayTime } from "./Czas";
function Result({ results }) {
  
  return (
    <ScrollView>
      <View style={styles.resultItem} />
{results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Runda {results.length - index}
          </Text>
<Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  resultItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#313131",
    height: 50,
    paddingHorizontal: 30,
    
  },
  resultItemText: { color: "black" },
});
export default React.memo(Result);