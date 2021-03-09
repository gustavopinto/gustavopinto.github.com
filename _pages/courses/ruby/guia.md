---
layout: single
author_profile: true
title: Ruby Guide
permalink: /ruby-guide
---

Esse é um guia para o ensino de Ruby em uma turma de programação de computadores.

Esse guia cobre os seguintes pontos:

1. [Atribuição de variáveis](/ruby-guide/vars)
2. [Tipos de dados básicos](/ruby-guide/data-types)
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

Ruby é uma linguagem de programação de propósito geral, de alto nível e interpretada (e não compilada). Ela foi desenhada pelo Japones Yukihiro "Matz" Matsumoto na década de 90. O código fonte da linguagem está disponível como software livre, licenciado pela licença BSD.

Ruby é uma linguagem multi-paradigma, ou seja, programas escritos em Ruby podem ser feitos no paradigma procedural, orientado a objetos ou funcional. No entanto, Ruby é mais conhecida por ser uma linguagem que leva orientação a objetos a sério. Como vamos ver ao longo desse guia, **tudo são objetos**.

Ruby também é dinamicamente tipada, ou seja, o sistema de tipos é capaz de inferir qual o tipo de dados sem que o programador precise explicitamente colocá-lo.

Ruby também conta com um coletor de lixo, ou seja, não é necessário desalocar variáveis (assim como se é feito com C). A desalocação de variáveis que não estão sendo mais utilizadas são feitas de maneira automática, por esse software chamado garbage collector.

Essas características colocam Ruby como uma linguagem moderna, que está em constante evolução (a sua versão 3.0 foi lançada em 25 de Dezembro de 2020).

Embora hoje em dia existam dezenas de outras alternativas para o ensino e prática de programação (como Swift, Elixir, Kotlin, etc), ainda acredito que o uso de Ruby se destaca perante as demais. Algumas razões:

- A sintaxe de Ruby é ligeiramente diferente da sintaxe de outras linguagens de programação de nicho similares, como Python ou Perl. A sintaxe de Ruby pode parecer menos intuitiva que a sintaxe de Python; no entanto, é muito mais agradável que a sintaxe de Perl. Dessa forma, Ruby pode ser considerada uma excelente opção para aqueles que já conhecem uma linguagem e gostariam de entender um pouco mais sobre outros formas de desenvolvimento de programas.

- Ruby é uma excelente opção para desenvolvimento web. Parte disso é devido a popularidade do framework "Rails", que não só introduziu mas também revolucionou muitas práticas de desenvolvimento web. Ademais, a integração com frameworks JavaScript é facilitada, fazendo com que Ruby (e o Rails) sejam facilmente utilizados no backend do desenvolvimento web.

- Ruby não é mais hipster. Ruby passou no teste do tempo e da euforia da novidade. Programar Ruby não é mais tão *cool* como programar em Node.js ou aquela nova linguagem que acabou de aparecer. Hoje Ruby é uma linguagem madura e se mantém como uma das linguagens mais usada no mundo.

## Instalação

Para instalações de versões mais recentes (durante a escrita deste guia, recomendo a instalação da versão 3.0+), sugiro o download direto do site oficial da linguagem: [https://www.ruby-lang.org/en/documentation/installation/](https://www.ruby-lang.org/en/documentation/installation/).

Após a instalação, abra o terminal e rode os commandos ```ruby -v``` (que mostrará a versão instalada) e ```irb``` (que abrirá o interpretador interativo da linguagem; Interactive Ruby).

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

Para fechar o ```irb```, digite ```exit``` no terminal  ou pressione ```CTRL+D```.

### Mas o que significa exatamente 'avaliar uma expressão'?

Uma expressão é uma entidade que combina constantes, variáveis, funções e operadores. Uma entidade é interpretada e, após computada, retorna o valor avaliado.

Em um nível mais elementar, poderíamos dizer que programação consiste basicamente em aplicar operadores a operandos. Operadores podem ser coisas simples como ```+``` e  ```-```.

Logo, se executássemos a expressão ```2 + 3``` no interpretador, teríamos a seguinte saída esperada:

```ruby
2 + 3 # => 5
```

Vamos entender um pouco mais sobre expressões no capítulo sobre expressões e operadores desse guia.

Por hora, encerramos a primeira parte do nosso guia. No próximo capítulo falaremos sobre [atribuição de variáveis](/guide/ruby/vars).

## Exercícios de fixação

- Em vez de executar direto do interpretador, crie um arquivo chamado ```hello.rb```. Coloque nesse arquivo o comando que imprime o texto ```"Hello world!"```. Para executar, faça ```ruby hello.rb```.

- Quais são os operadores mais conhecidos em Ruby?

- Um mesmo operador pode ser usado em contexto diferente? Se sim, cite um exemplo.
