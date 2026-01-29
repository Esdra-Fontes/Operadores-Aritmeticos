function somar(){
const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value
const soma = Number(n1) + Number(n2)
document.getElementById('resultadoSoma').innerHTML = "A soma dos números é: " + soma
}
function subtrair(){
const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value
const subtrair = Number(n1) - Number(n2)
document.getElementById('resultadoSubtracao').innerHTML = "A subtração dos números é: " + subtrair
}
function multiplicar(){
const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value
const multiplicar = Number(n1) * Number(n2)
document.getElementById('resultadoMultiplicacao').innerHTML = "A multiplicação dos números é: " + multiplicar
}
function dividir() {
const n1 = Number(document.getElementById('n1').value)
const n2 = Number(document.getElementById('n2').value)
    if (n2 === 0) {
        document.getElementById('resultadoDivisao').innerHTML = 'A divisão dos números é: Erro, divisão por zero não existe!'
        return
    }
const resultado = n1 / n2
document.getElementById('resultadoDivisao').innerHTML = "A divisão dos números é: " + resultado
}
function porcentagem(){
const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value
const porcentagem = Number(n1) % Number(n2)
document.getElementById('resultadoPorcentagem').innerHTML = "O módulo dos números é: " + porcentagem
}
function exponencial(){
const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value
const exponencial = Number(n1) ** Number(n2)
document.getElementById('resultadoExponencial').innerHTML = "A exponenciação dos números é: " + exponencial
}
function incremento(){
let n1 = Number(document.getElementById('n1').value)
let n2 = Number(document.getElementById('n2').value)
n1++ ; n2++ ; document.getElementById('resultadoIncremento').innerHTML = "O incremento dos números é: " + n1 + " e " + n2
}
function decremento(){
let n1 = Number(document.getElementById('n1').value)
let n2 = Number(document.getElementById('n2').value)
n1-- ; n2-- ; document.getElementById('resultadoDecremento').innerHTML = "O decremento dos números é: " + n1 + " e " + n2
}