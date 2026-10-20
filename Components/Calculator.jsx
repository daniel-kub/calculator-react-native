import { StyleSheet,Text, View, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { Color } from "../utils/Color";
import Button from "../Components/Button";
const Calculator = () =>{
    const [firstValue,setFirstValue] = useState('');
    const [displayValue,setDisplayValue] = useState(0);
    const [operator,setOperator] = useState('');

    const handleInputNumber = (num) =>{
        if(displayValue == '0'){
            setDisplayValue(num);
        }
        else{
            setDisplayValue(displayValue+num);
        }
    }

    const HandleOperationInput = (operator) =>{
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    }
    const handleCalc = (firstValue, displayValue, operator) =>{
        switch (operator){
            case "+":
                setDisplayValue((parseFloat(firstValue)+parseFloat(displayValue)).toString());
                setOperator('');
                setFirstValue('');
                break;
            case "-":
                setDisplayValue(parseFloat(firstValue)-parseFloat(displayValue));
                setOperator('');
                setFirstValue('');
                break;
            case "*":
                setDisplayValue(parseFloat(firstValue)*parseFloat(displayValue));
                setOperator('');
                setFirstValue('');
                break;
            case "/":
                setDisplayValue(parseFloat(firstValue)/parseFloat(displayValue));
                setOperator('');
                setFirstValue('');
                break;
        }

        
    }
            const ClearAll = () =>{
            setDisplayValue(0);
            setFirstValue('');
            setOperator('');
        }

    return(
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={{fontSize:30, fontWeight:300}}>{firstValue+operator}</Text>
                <Text style={{fontSize:72, fontWeight:300}}>{displayValue}</Text>
            </View>
            <View style={styles.keypad}>
                    <Button title="C" click={()=>ClearAll()}/>
                    <Button title="+" click={()=>HandleOperationInput("+")}/>
                    <Button title="-" click={()=>HandleOperationInput("-")}/>
                    <Button title="7" click={()=>handleInputNumber('7')}/>
                    <Button title="8" click={()=>handleInputNumber('8')} />
                    <Button title="9" click={()=>handleInputNumber('9')}/>
                    <Button title="4" click={()=>handleInputNumber('4')}/>
                    <Button title="5" click={()=>handleInputNumber('5')}/>
                    <Button title="6" click={()=>handleInputNumber('6')}/>
                    <Button title="1" click={()=>handleInputNumber('1')}/>
                    <Button title="2" click={()=>handleInputNumber('2')}/>
                    <Button title="3" click={()=>handleInputNumber('3')}/>
                    <Button title="*" click={()=>HandleOperationInput("*")}/>
                    <Button title="0" click={()=>handleInputNumber(0)}/>  
                    <Button title="=" click={()=>handleCalc(firstValue,displayValue,operator)}/> 
            </View>
        </View>
    )
}

export default Calculator;

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: Color.dark
    },
    display:{
        flex:1,
        backgroundColor: Color.gray,
        paddingVertical:20,
        paddingHorizontal:40,
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    keypad:{
        flex:2,
        backgroundColor:Color.light,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        gap:30,
        padding:30
    }
})