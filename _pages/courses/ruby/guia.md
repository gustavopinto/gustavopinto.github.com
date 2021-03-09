---
layout: single
author_profile: true
title: Ruby Guide
permalink: /guide/ruby
---

Esse é um guia para o ensino de Ruby em uma turma de programação de computadores.

Esse guia cobre os seguintes pontos:

1. [Atribuição de variáveis](/guide/ruby/vars)
2. [Tipos de dados básicos](/guide/ruby/data-types)
3. Expressões e operadores
4. Controle de fluxo
5. Funções
6. Arrays
7. Matrizes
8. Hashes
9. Entrada e saída
10. Classes e Objetos
11. Tratamento de excessão
12. Teste de unidade
13. Meta-programação

## Porque Ruby?

Ruby é uma linguagem de programação de propósito geral, de alto nível e interpretada (e não compilada). Ela foi desenhada pelo Japones Yukihiro "Matz" Matsumoto na década de 90.

Ruby é uma linguagem multi-paradigma, ou seja, programas escritos em Ruby podem ser feitos no paradigma procedural, orientado a objetos ou funcional. No entanto, Ruby é mais conhecida por ser uma linguagem que leva orientação a objetos a sério. Como vamos ver ao longo desse guia, **tudo são objetos**.

Ruby também é tipada dinamicamente, ou seja, o sistema de tipos é capaz de inferir qual o tipo de dados sem que o programador precise explicitamente colocá-lo.

Ruby também conta com um coletor de lixo, ou seja, não é necessário desalocar variáveis (assim como se é feito com C). A desalocação de variáveis que não estão sendo mais utilizadas são feitas de maneira automática, por esse software chamado garbage collector.

## Instalação

Para instalações de versões mais recentes (durante a escrita deste guia, recomendo a instalação da versão 3.0+), sugiro o download direto do site oficial da linguagem: [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/).

Após a instalação, abra o terminal e rode os commandos ```ruby -v``` (que mostrará a versão instalada) e ```irb``` (que abrirá o interpretador interativo da linguagem).

Não se surpreenda caso você já tenha o Ruby instalado no seu computador por padrão. Isso pode acontecer caso você use alguma distribuição Linux ou MacOS.

## Hello world

Após terminar a instalação do Ruby, para fazer seu primeiro programa em Ruby, abra o interpretador (```irb```) e digite:

```ruby
puts "Olá mundo!" # => nil
```

Embora esse programa seja incrivelmente pequeno, é possível ainda assim fazer alguns comentários.

Primeiro, a instrução ```puts``` é um comando de Ruby que realiza uma impressão no terminal (similar ao ```printf``` ou ```print``` de outras linguagens de programação).

Segundo, perceba também que não foi fornecido um parênteses. Os parênteses, no entanto, podem ser fornecidos (tente executar com ```puts ("Olá mundo!")```) mas são facultado pois acredita-se que sua omissão torna a leitura do código mais fluída. De toda forma, como eles podem ser fornecidos, fica a cargo do programador e sua equipe a decisão de fornece-los ou não. Neste guia, optaremos por não utilizar parênteses.

Terceiro, note que, após a execução do nosso programa, tivemos duas saídas. A primeira saída foi de fato a impressão do texto ```"Olá mundo!"```, enquanto que a segunda saída foi o estranho ```=> nil```. A seta ```=>``` apenas indica o leitor que houve alguma saída. Já o ```nil``` é o resultado da expressão. O comando ```puts``` sempre avalia para ```nil``` (que é um outro nome para um item nulo).

### Mas o que é exatamente avaliar uma expressão?

Expressões são formas de especificar computação em uma determinada linguagem de computação.

Uma expressão é uma entidade que combina constantes, variáveis, funções e operadores. Uma entidade é interpretada e, após computada, retorna o valor avaliado.

Em um nível mais elementar, poderíamos dizer que programação consiste basicamente em aplicar operadores a operandos. Operadores podem ser coisas simples como ```+``` e  ```-```.

Logo, se executássemos a expressão ```2 + 3``` no interpretador, teríamos a seguinte saída esperada:

```ruby
2+3 # => 5
```

Vamos entender um pouco mais sobre expressões no capítulo sobre expressões e operadores desse guia.

Por hora, encerramos a primeira parte do nosso guia. No próximo capítulo falaremos sobre [atribuição de variáveis](/guide/ruby/vars).

## Exercícios de fixação

- Em vez de executar direto do interpretador, crie um arquivo chamado ```hello.rb```. Coloque nesse arquivo o comando que imprime o texto ```"Hello world!"```. Para executar, faça ```ruby hello.rb```.
