import   React, {useState,useEffect} from 'react';      
import {StyleSheet,View,Text} from 'react-native';
import {TextInput} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components';


const Pagedados = styled.View`
flex:1;
`;
const Titulo = styled.Text`
font-size:40px;
text-align:center;
margin:30px
color:#BEBEBE;
`;

const AreaCalc = styled.View`
background-color:#98FB98;
`;

const Dados = styled.TextInput`
height:90px;
width:50%;
font-size:40px;
text-align:center;
color:gray;
`;

const Calc = styled.TouchableOpacity`
background-color:#98FB98;

`;

const Textcal = styled.Text`
padding:20px;
font-size:30px;
text-align:center;
color:#BEBEBE;

`;

const Areadados =styled.View`
flex-direction:row;
`;

const IndicImc=styled.View`
align-items:center;

`;
const Valor1 = styled.Text`
font-size:80px;
color:#BEBEBE;
margin-top:10px;
margin-bottom:10px;
`;
const Valor2 =styled.Text`
font-size:20px;
color:#BEBEBE;
`;

export default () => {

const [Alt,setAlt] =useState ('');
const [Pes, setPes]=useState('');
const [Imc,setImc] =useState(0.00);
const [Valor,setValor] =useState();
const [mude,setMude] =useState ('CALCULAR');
 function calc(){

if (calc){
let nPes =parseFloat(Pes);
let nAlt=parseFloat(Alt);
setImc(nPes/ (nAlt * nAlt));

setMude("Clique Novamente")



if (Imc > 0 && Imc < 18.5)
  setValor("magresa")
else if(Imc > 18.6 && Imc < 24.9 )
  setValor("Peso Normal");
else if(Imc > 25 && Imc < 29.9)
  setValor("Sobrepeso");
else if(Imc > 30 && Imc < 34.9)
  setValor("Obesidade Grau 1");
else if (Imc > 35 && Imc < 39.9)
  setValor("Obesidade Grau 2");
else if (Imc >40)
  setValor("Obesidde Grau 3");


if (Imc > 0 && Imc < 18.5)
  setMude("Coma um pouco mais")
else if(Imc > 18.6 && Imc < 24.9 )
  setMude("Parabéns,peso ideal");
else if(Imc > 25 && Imc < 29.9)
  setMude("começe a se cuidar");
else if(Imc > 30 && Imc < 34.9)
  setMude("Entrando em uma zona perigosa");
else if (Imc > 35 && Imc < 39.9)
  setMude("Começe a se exercitar");
else if (Imc >40)
  setMude("Procure ajuda profissional");

}
 }

 return (
 
     <Pagedados>
       <AreaCalc>
          <Titulo>CALCULADORA DE IMC</Titulo>
        </AreaCalc>
        <Areadados>
          <Dados placeholder="PESO" keyboardType ="numeric"
          value={Pes}
          onChangeText ={P =>setPes(P)}

          />

          <Dados placeholder="ALTURA" keyboardType ="numeric"
          value ={Alt}
          onChangeText ={A=>setAlt(A)}
          />
          
        </Areadados> 
      <Calc onPress ={calc}>
      <Textcal>{` ${mude}`}</Textcal>
      </Calc>

      <IndicImc>
        <Valor1>
          {Imc.toFixed(2)}
        </Valor1>
      </IndicImc>

      <IndicImc>
        <Valor2>
          {Valor}
        </Valor2>
      </IndicImc>

      


     </Pagedados>
  );
}
