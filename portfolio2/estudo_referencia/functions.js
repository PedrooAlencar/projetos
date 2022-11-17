//Declaração da função / function / Agrupo ou dá significado a uma quantidade de códigos dentro da função para chamá-los depois

function createNomes() {
    console.log('João')
    console.log('Pedro')
    console.log('Lucas')
}

//Executar a função ou inovacar. chamar, rodas / invoke, run, call, execute
createNomes()


//function expression
//funcion anonymous

//parametros (parameters) / Posso declarar uma variável com uma função
const sum = function(number1, number2){
    console.log(number1 + number2)
    console.log(number1 * number2)
    console.log(number2 - number1)
    
}
sum (4, 5) //Atribuiu valor aos parâmetros, numer1 e number2

//Outro exemplo declarando os valores fora da function
const exemplo1 = function(n1, n2){
    let soma = n1 + n2 
    return soma
}
let n1 = 23
let n2 = 92
console.log(` A soma de ${n1} + ${n2} é ${exemplo1(n1, n2)}`)

//function scope
let subject = 'Video' //Esse subject tem outro siginificado, pois está fora do escopo

function createThink(subject){ //Se tirar o parâmetro, ele se iguala ao valor da variável DENTRO do escopo
    subject = 'study' //Esse subject tem um significado
    return subject
}

console.log(createThink(subject))
console.log(subject)
