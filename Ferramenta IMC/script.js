//Passo 1: Criar a função imc()

function imc()
{
//Passo 2: Criar as variáveis
let peso, altura, resultado;

//Passo 3: Atribuir para a variavel a caixa de texto
peso = document.getElementById('txt_peso').value;
altura = document.getElementById('txt_alt').value;

//Passo 4: Converter as variaveis para Number()
peso = Number(peso);
altura = Number(altura);

//Passo 5: Apresentar o resultado
resultado = peso / (altura * altura);

//Passo 6: Exibir resultado



document.getElementById('txtresultado').innerHTML = (resultado).toFixed(2);
window.alert('O seu imc é' + resultado).toFixed(2);







}