function converter(){

    let Celsius, Resultado;
    
    Celsius = document.getElementById('txt_cel').value;

    Celsius = Number (Celsius)

    Resultado = (Celsius * 1.8)+ 32;
    
    document.getElementById('p').innerHTML = (Resultado);
  
    }

    function converter2(){

        let Farenheit, Resultadof;

        Farenheit = document.getElementById('txt_far').value;

        Farenheit = Number (Farenheit)

        Resultadof = (Farenheit - 32) * 5/9;

        document.getElementById('p').innerHTML = (Resultadof);


    }