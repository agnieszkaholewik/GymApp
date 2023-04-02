import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#afeeee',
        borderWidth: 1,
        marginTop:30,
        marginHorizontal:20
        
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
      header: {
        backgroundColor:"#008b8b"
      },
      stoper:{
        flex:1,
      }

    
  });