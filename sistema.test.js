// require carrega as funções exportadas por sistema.js.
const sistema = require('./sistema');

// describe agrupa testes relacionados; aqui, todos testam verificarMaioridade.
describe('verificarMaioridade', () => {
  // test define um caso individual. A função () => {...} é o código executado pelo Jest.
  test('retorna false para 15 anos', () => {
    // expect recebe o resultado real; toBe verifica igualdade exata com o esperado.
    expect(sistema.verificarMaioridade(15)).toBe(false);
  });

  test('retorna true para 18 anos', () => {
    expect(sistema.verificarMaioridade(18)).toBe(true);
  });

  test('retorna true para 21 anos', () => {
    expect(sistema.verificarMaioridade(21)).toBe(true);
  });
});

// Testa o cálculo do IMC.
describe('calcularIMC', () => {
  test('calcula o IMC de 70 kg e 1.75 m', () => {
    // toBeCloseTo compara números decimais permitindo pequena diferença de arredondamento.
    expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86);
  });
});

// Testa a formatação do nome completo.
describe('formatarNome', () => {
  test('formata o sobrenome antes do nome', () => {
    expect(sistema.formatarNome('Lucas', 'Silva')).toBe('Silva, Lucas');
  });
});

// Testa os casos par, ímpar e zero.
describe('ehPar', () => {
  test('retorna true para um número par', () => {
    expect(sistema.ehPar(4)).toBe(true);
  });

  test('retorna false para um número ímpar', () => {
    expect(sistema.ehPar(5)).toBe(false);
  });

  test('retorna true para zero', () => {
    expect(sistema.ehPar(0)).toBe(true);
  });
});

// Testa a conversão de três temperaturas Celsius.
describe('celsiusParaFahrenheit', () => {
  test('converte 0°C para 32°F', () => {
    expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
  });

  test('converte 100°C para 212°F', () => {
    expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
  });

  test('converte -40°C para -40°F', () => {
    expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
  });
});

// Testa se adicionarHobby cria a lista esperada.
describe('adicionarHobby', () => {
  test('retorna uma lista maior que contém o novo hobby', () => {
    // const declara uma variável que não será reatribuída.
    const lista = ['leitura', 'música'];
    const resultado = sistema.adicionarHobby(lista, 'natação');

    // toHaveLength verifica o tamanho de uma string ou coleção, como um array.
    expect(resultado).toHaveLength(3);
    // toContain verifica se o array inclui o item indicado.
    expect(resultado).toContain('natação');
  });
});

// Testa uma divisão válida e o tratamento da divisão por zero.
describe('dividir', () => {
  test('divide dois números normalmente', () => {
    expect(sistema.dividir(10, 2)).toBe(5);
  });

  test('lança erro ao dividir por zero', () => {
    // A função é passada dentro de outra função para que Jest possa executá-la
    // e observar o erro. toThrow verifica se ela lança o erro esperado.
    expect(() => sistema.dividir(10, 0)).toThrow(
      'Divisão por zero não permitida'
    );
  });
});

// Testa se o objeto retornado tem as propriedades e valores esperados.
describe('criarAluno', () => {
  test('retorna o objeto do aluno com os dados esperados', () => {
    // toEqual compara objetos e seus conteúdos (comparação profunda).
    expect(sistema.criarAluno('Ana', 'Desenvolvimento de Sistemas')).toEqual({
      nome: 'Ana',
      curso: 'Desenvolvimento de Sistemas',
      ativo: true,
    });
  });
});

// Testa um desconto de 10% e a ausência de desconto (0%).
describe('aplicarDesconto', () => {
  test('aplica desconto de 10%', () => {
    expect(sistema.aplicarDesconto(100, 10)).toBe(90);
  });

  test('aplica desconto de 0%', () => {
    expect(sistema.aplicarDesconto(100, 0)).toBe(100);
  });
});

// Testa senhas abaixo do mínimo e exatamente no mínimo de oito caracteres.
describe('validarTamanhoSenha', () => {
  test('retorna false para senha com 5 caracteres', () => {
    expect(sistema.validarTamanhoSenha('abcde')).toBe(false);
  });

  test('retorna true para senha com 8 caracteres', () => {
    expect(sistema.validarTamanhoSenha('abcdefgh')).toBe(true);
  });
});
