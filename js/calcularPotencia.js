var variableN = document.getElementById('txtVariableN');
var variableM = document.getElementById('txtVariableM');
var variableQ = document.getElementById('txtVariableQ');
var variableK = document.getElementById('txtVariableK');
var resultadoX = document.getElementById('txtResultadoX');

function calcularPotencia(){
    var resultadoDeLaOperacion;

    resultadoDeLaOperacion = ((3 * Math.pow(variableN.value, 8) + Math.pow(variableM.value, 7)) / Math.pow(Math.sqrt((3 * variableN.value + 8 * variableQ.value) /2 * variableM.value) , 1/4))
    + ((1 / (Math.pow(Math.pow(variableN.value, 8) + variableK.value, 1/3) - Math.log(3 * Math.pow(variableN.value, variableK.value + 3)))) / ((3 * Math.pow(variableM.value, 7) - 4 * Math.pow(variableK.value, 6)) 
    / (2 * Math.pow(variableN.value, 5) + Math.pow(Math.pow(variableN.value, 3), 1/7))));

    resultadoX.value = resultadoDeLaOperacion;
}