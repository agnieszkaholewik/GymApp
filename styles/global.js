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
      },
      button1:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#afeeee',
        borderWidth: 1,
        marginTop:10,
        marginHorizontal:20
      },
      input:{
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
        height:50,
        marginBottom:50,
        marginHorizontal:16,
        fontSize: 18,
        padding:15

      },
      section:{
        
        alignSelf:"stretch"
      },
      header2:{
        justifyContent:'flex-end',
        marginLeft: 64,
        borderBottomWidth:3,
        paddingTop: 16
      },
      title:{
        fontSize:30,
        fontWeight:"800",
        color:'black'
      },
      taskCount:{
        marginTop:4,
        marginBottom: 16,
        color:'gray',
        fontWeight:"600"
      },
      footer:{
        paddingHorizontal:32,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:16
      },
      input2:{
        flex:1,
        height:48,
        borderWidth:StyleSheet.hairlineWidth,
        borderRadius:6,
        marginRight:8,
        paddingHorizontal:8
      },
      addTodo:{
        borderRadius:4,
        padding:16,
        alignItems:'center',
        justifyContent:'center'
      },
      todoContainer:{
        paddingVertical:16,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:32
      },
      todo:{
        color:'black',
        fontWeight:700,
        fontSize:16,
      },
      deleteButton: {
        flex:1,
        backgroundColor: 'red',
        justifyContent:'center',
        alignItems:'center',
        width: 80
      },
      excerciseText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        padding:10
      },

      

    
  });