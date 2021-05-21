import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'center',
    },

    containerTop:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerBottom:{
      flex:2,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:30
    },

    inputLabel:{
      marginBottom:5,
      color:'gray'
    },

    logo:{
      fontWeight:"bold",
      fontSize:40,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      
      borderRadius:3,
      borderColor:'#808080',
      borderWidth:1,
      height:50,
      marginBottom:10,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"#000000"
    },
    forgot:{
      color:"black",
      fontSize:15
    },
    loginBtn:{
      flex:1,
      borderColor:'#808080',
      borderWidth:1,
      borderRadius:25,
      paddingLeft:10,
      paddingRight:10,
      height:50,
      justifyContent: 'space-evenly',
      alignItems:'center',
      flexDirection: 'row',
    },
    loginText:{
      color:"black",
      textAlign:'left',
    }
  });

export default styles;