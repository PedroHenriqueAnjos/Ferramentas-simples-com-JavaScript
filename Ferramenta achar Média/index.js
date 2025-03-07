function calcular(){

let nota1, nota2, nota3, resultado;

nota1 = document.getElementById('txt_nota1').value;
nota2 = document.getElementById('txt_nota2').value;
nota3 = document.getElementById('txt_nota3').value;

nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);



resultado = (nota1 + nota2 + nota3) / 3;


if(resultado >=6) {
document.getElementById('p').textContent = ('Passou' +""+ resultado);
}


else {document.getElementById('p').textContent = ('Não Passou' +""+ resultado);

}








}


