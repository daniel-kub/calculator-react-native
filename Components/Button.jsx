import { StyleSheet,Text, View, TouchableOpacity} from "react-native";
import React from "react";
import { Color } from "../utils/Color";

const Button = ({title,type,click}) =>{
    return(
        <View>
            <TouchableOpacity style={style.button} onPress={()=>{click()}}>
                <Text style={{fontSize:34, color:'white'}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Button;

const style = StyleSheet.create({
    button:{
        height:70,
        width:70,
        borderRadius:10,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Color.btnDark
    }
});
