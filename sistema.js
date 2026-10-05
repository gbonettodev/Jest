// Recebe uma idade e devolve um valor booleano: true ou false.
function verificarMaioridade(idade) {
  // >= significa "maior ou igual a"; a partir de 18, considera maior de idade.
  return idade >= 18;
}

// Calcula o Índice de Massa Corporal (IMC) usando peso em kg e altura em metros.
function calcularIMC(peso, altura) {
  // A fórmula do IMC é peso dividido pela altura ao quadrado.
  const imc = peso / (altura * altura);
  // toFixed(2) arredonda para duas casas decimais e produz texto;
  // Number converte esse texto de volta para um número.
  return Number(imc.toFixed(2));
}

// Monta o nome no formato "Sobrenome, Nome".
function formatarNome(nome, sobrenome) {
  // Crases permitem inserir variáveis em um texto com ${...}.
  return `${sobrenome}, ${nome}`;
}

// Informa se um número é par.
function ehPar(numero) {
  // % calcula o resto da divisão; números pares têm resto 0 ao dividir por 2.
  // === compara o valor e o tipo de forma estrita.
  return numero % 2 === 0;
}

// Converte uma temperatura em graus Celsius para Fahrenheit.
function celsiusParaFahrenheit(c) {
  // Fórmula de conversão: (Celsius × 1,8) + 32.
  return (c * 1.8) + 32;
}

// Retorna uma nova lista com o hobby acrescentado ao final.
function adicionarHobby(lista, hobby) {
  // ...lista espalha os itens atuais em um novo array; o array original não é alterado.
  return [...lista, hobby];
}

// Divide a por b, mas impede a divisão por zero.
function dividir(a, b) {
  // Se b for exatamente 0, throw interrompe a função e lança um erro.
  if (b === 0) throw new Error('Divisão por zero não permitida');
  return a / b;
}

// Cria e retorna um objeto representando um aluno.
function criarAluno(nome, curso) {
  // As propriedades nome e curso recebem os valores dos parâmetros;
  // todo aluno criado começa com ativo igual a true.
  return { nome, curso, ativo: true };
}

// Devolve o preço depois de descontar a porcentagem informada.
function aplicarDesconto(preco, porcentagem) {
  // Divide a porcentagem por 100 para transformar, por exemplo, 10 em 0,10.
  return preco - (preco * (porcentagem / 100));
}

// Informa se a senha tem pelo menos oito caracteres.
function validarTamanhoSenha(senha) {
  // length é a quantidade de caracteres; >= 8 verifica o mínimo exigido.
  return senha.length >= 8;
}

// Exporta as funções para que outros arquivos, como sistema.test.js, possam usá-las.
module.exports = {
  verificarMaioridade,
  calcularIMC,
  formatarNome,
  ehPar,
  celsiusParaFahrenheit,
  adicionarHobby,
  dividir,
  criarAluno,
  aplicarDesconto,
  validarTamanhoSenha,
};
