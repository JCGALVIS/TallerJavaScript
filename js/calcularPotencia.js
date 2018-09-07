var variableN = document.getElementById('txtVariableN');
var variableM = document.getElementById('txtVariableM');
var variableQ = document.getElementById('txtVariableQ');
var variableK = document.getElementById('txtVariableK');
var resultadoX = document.getElementById('txtResultadoX');

function ejecutarFuncion(){    
    var valorVariableN = parseInt(variableN.value); 
    var valorVariableM = parseInt(variableM.value); 
    var valorVariableQ = parseInt(variableQ.value); 
    var valorVariableK = parseInt(variableK.value); 

    resultadoX.value = calcularPotencia(valorVariableN, valorVariableM, valorVariableQ, valorVariableK);
}

function calcularPotencia(valorVariableN, valorVariableM, valorVariableQ, valorVariableK){
    var resultadoDeLaOperacion;
    var resultadoUno;
    var resultadoDos;
    var resultadoTres;

    resultadoUno = ((3 * Math.pow(valorVariableN, 8) + Math.pow(valorVariableM, 7)) / Math.pow(Math.sqrt((3 * valorVariableN + 8 * valorVariableQ) /2 * valorVariableM) , 1/4));
    
    resultadoDos = (1 / (Math.pow(Math.pow(valorVariableN, 8) + valorVariableK, 1/3) - Math.log(3 * Math.pow(valorVariableN, valorVariableK + 3))));
    
    resultadoTres = ((3 * Math.pow(valorVariableM, 7) - 4 * Math.pow(valorVariableK, 6)) / (2 * Math.pow(valorVariableN, 5) + Math.pow(Math.pow(valorVariableN, 3), 1/7)));
    

    resultadoDeLaOperacion = resultadoUno + (resultadoDos/resultadoTres);

    return resultadoDeLaOperacion;
}