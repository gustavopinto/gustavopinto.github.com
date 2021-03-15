---
layout: single
author_profile: true
title: Controle de fluxo
permalink: /ruby-guide/flow
---

[Voltar ao começo do guia](/ruby-guide/)

Programar é fazer com que os dados sigam um determinado caminho (podendo sofrer modificações ao longo desse caminho). O controle do fluxo se refere a ordem de como os dados irão ser executados ao longo deste caminho (que é a execução do programa).

Há diversas formas de controlar o fluxo dos dados em um programa, por exemplo:

- Sequencial: *Faça isso, depois isso, depois isso, etc*. Esta é a forma mais básica de controle de fluxo de execução. Ela se refere a realizar avaliações de expressões em sequencia, uma após a outra.
- Condicional: *Se determinada condição for verdadeira, faça isso, do contrário, faça aquilo*. Nessa forma de controle de fluxo, temos pelo menos duas alternativas de execução do nosso programa, uma das quais não deverá executada.
- Iteração: *Faça isso enquanto determinada condição for verdadeira*. Iteração se refere a execução do mesmo trecho de código múltiplas vezes, enquanto uma determinada condição for verdadeira.
- Recursão: *Peça para você mesmo fazer isso*. Recursão acontece quando uma rotinha invoca ela mesma.
- Exceção: *Caso algo dê errado, siga por esse outro caminho*. Exceção são construções que alteram o fluxo de dados na presença de um comportamento excepcional.
- Concorrente: *Faça múltiplas coisas ao mesmo tempo*. Embora as expressões não sejam *exatamente* avaliadas ao mesmo tempo, programação concorrente ajuda para deixar o computador menos ocioso.

Há ainda outras construções de linguagem como o ```goto``` (em C), que alteram o fluxo de dados. Mas esses são tópicos para outro guia 🙃.

Neste capítulo vamos aprender sobre condicionais, iterações e recursão. Mais pra frente no guia também teremos um capítulo sobre exceção.

## Condicionais

Durante a execução do programa, diferentes caminhos (ou trechos de código) podem ser percorridos (ou executados).

Uma condicional é um desvio no caminho. Condicionais necessitam de duas construções de linguagem:

- uma construção que nos ajude a implementar um desvio, e
- um conjunto de operadores lógicos (como ```>```, ```<```, ou ```==```).

A construção de desvio é frequentemente implementada usando a estrutura de um ```If–then(–else)```, sendo o else uma parte opção da estrutura. Essa estrutura pode ser melhor entendida quando organizada em blocos:

```
If (condição booleana) Then
    (consequência)
Else
    (alternativa)
End
```

A primeira linha verifica se uma determinada condição é verdadeira (por exemplo, se o usuário e senha estiverem corretos). Se for, a segunda linha, com a ```(consequência)``` é executada . Do contrário (```Else```), a quarta linha, com a ```(alternativa)``` é executada. Na quinta linha se encerra o procedimento.

Diferentes linguagens de programação implementam condicionais de forma ligeiramente diferente. Em Ruby condicionais segue a seguinte estrutura sintática:

```ruby
if a == 10
  puts "o valor de a é 10"
else
  puts "o valor de a não é 10"
end
```

---
**Curiosidade**

Curiosidade: a linguagem de programação ```bash``` talvez seja a linguagem que implemente mecanismos condicionais da maneira mais sintaticamente semelhante a da estrutura de alto nível (exceto pelo uso do ponto e vírgula ```;```):

```bash
if e1; then
  s1
else
  s2
fi
```
---



## Iteração

There seem to be 5 kinds of loops:

loop forever
loop n times
loop while/until a condition is true
loop through a range of numbers, optionally with a step
loop through each item in a collection (or each char in a string, or each node in a linked list...)



## Exercícios de fixação

- O uso de recursão lhe parece natural como o uso de iteração? Explique.
-
