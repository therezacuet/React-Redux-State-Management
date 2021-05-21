import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },

    container_counter:{
        flex:1,
        alignItems: 'center',
        justifyContent:'space-evenly',
        flexDirection:'row'
    },



    container_todo:{
        flex:3,
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection:'column'
    },

    title: {
        fontSize: 30,
        marginBottom: 30,
        marginTop: 16,
        color: 'blue'
      },
      todoInput: {
        width:'80%',
        marginBottom: 32,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'white'
      },
      image: {
        width: 200,
        height: 150,
    
      }

});

export default styles;