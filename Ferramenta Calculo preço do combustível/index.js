function somar() {
    let tipo, litros, preço;

    tipo = document.getElementById("txt_tipo").value;
    litros = parseFloat(document.getElementById("txt_fuel").value);

    if (tipo === "etanol") {
        preço = (litros * 2.53);
        window.alert("Preço: R$ " + preço.toFixed(2));
    }
    else if (tipo === "gasolina") {
        preço = (litros * 6);
        window.alert("Preço: R$ " + preço.toFixed(2));
    }

    else {
        window.alert("Insira o tipo e a litragem corretamente.");
    }
}
