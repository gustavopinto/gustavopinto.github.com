---
layout: single
author_profile: true
title: Expressões e Operadores
permalink: /ruby-guide/exp
---

Expressões são construídas através de operações e operandos.

Os operadores são construções de linguagem que indicam quais operações podem ser aplicadas nos operandos. Na expressão ```1 + 3```, os literais ```2``` e ```3``` são operandos e o sinal de adição ```+``` é o operador.

Antes de começamos a falar sobre os tipos de operadores, eu tenho uma curiosidade para lhe contar.

## Operadores são métodos

Operadores são utilizados para *processar* operandos. Logo, naturalmente, a expressão expressão ```1 + 3``` é avaliada para ```4```. Com base nisso, faz sentido dizer que um operando é um parâmetro de entrada para um operador?

Parece que sim.

E se nós generalizássemos um pouco mais? Poderíamos dizer que um operador é um método que e os operandos são os valores passados por parâmetro para esse método?

Faz sentido também?

E é exatamente assim que operadores são implementados em Ruby: como métodos.

Mas, calma. Se operadores como ```+``` são, na verdade, métodos, eu não deveria usar um ponto (```.```) para invocá-los?

Podemos usar o ponto (```.```), mas ele é opcional, pois o interpretador Ruby adiciona o ponto para você, silenciosamente.

Logo, durante o processo de interpretação do código, a expressão ```1 + 3``` é traduzida para ```1.+(3)```. Agora sim podemos ver claramente que ```+``` nada mais é do que um método que aceita um parâmetro.

Ambas as expressões anteriores são códigos válidos, e avaliam para o mesmo resultado, ```4```.

Embora vários operadores sejam de fato implementados como métodos, isso nem sempre é o caso, logo não podemos generalizar. Leia o capítulo até o final e tente descobrir aqueles que não são métodos.

## Tipos de operadores

Há diversos tipos de operadores; três grupos de operadores bem conhecidos são:

- Operadores aritméticos (como o ```+``` na expressão ```1 + 3```),
- Operadores de comparação (como o ```>``` na expressão ```1 > 3```),
- Operadores lógicos (como o ```&&``` na expressão ```1 && 3```).

## Operadores aritméticos

Para operações matemáticas, Ruby implementa os principais operadores aritméticos. São eles:

| Operador | Descrição                        |
|----------|----------------------------------|
| ```+```  | Adição                           |
| ```-```  | Subtração                        |
| ```/```  | Divisão                          |
| ```*```  | Multiplicação                    |
| ```%```  | Resto da divisão                 |
| ```**``` | Exponenciação                    |

Esses operadores, quando utilizado com operando numérico, tem óbvio resultado de avaliação:

```ruby
1 + 1  # => 2
1 - 1  # => 0
2 ** 2 # => 4
2 % 2  # => 0
```

Talvez mais interessante, porém, é saber que esses operadores podem ser utilizados em outros [tipos de dados](/ruby-guide/types). Por exemplo, o operador de adição pode também ser utilizado com strings ou arrays[^1].

```ruby
"UF" + "PA"  # => UFPA
[1] + [2]    # => [1, 2]
"UFPA" * 2   # => UFPAUFPA
```

Isso acontece pois, como discutiremos ao fim desse capítulo, operadores são métodos. Logo, como métodos, estes podem ter implementações específicas.

## Operadores de comparação

Usamos esses operadores para comparar dois objetos, comumente dentro de uma condicional. Essa são os operadores lógicos implementados em Ruby:

| Operador | Descrição                        |
|----------|----------------------------------|
| ```>```  | Maior que                        |
| ```<```  | Menor que                        |
| ```>=``` | Maior ou igual que               |
| ```<=``` | Menor ou igual que               |
| ```==``` | Igual                            |
| ```!=``` | Diferente                        |
| ```<=>```| Maior, igual ou menor que        |

O resultado da avaliação desses operadores é um literal booleano. A única excessão é o operador "nave espacial" (```<=>```), que retorna 1 (caso maior), 0 (caso igual), ou -1 (caso menor). Alguns exemplos:

```ruby
1 > 1      # => false
1 >= 1     # => true
1 == 1 * 1 # => true
1 != 1     # => false
1 <=> 1    # => 0
```

Da mesma forma que os operadores lógicos podem ser utilizados com strings e arrays, operadores de comparação também podem.

```ruby
"a" == "b" # => false
"a" > "a" # => false
"b" <=> "c" # => -1
```

Precisamos fazer alguns comentários sobre as expressões acima.

Primeiro, diferente de outras linguagens como Java, em que o operador de igualdade (```==```) faz comparação da referência de memória de uma string, em Ruby, o operador ```==``` faz o que é de fato esperado: compara os valores de duas strings.

Segundo, calma. Como seria possível um ```a``` ser maior que (```>```) outro ```a```? O que de fato a expressão ```"a" > "a"``` estaria avaliando?

No caso de comparações de strings, os operadores ```>```, ```<```, etc, são utilizados para comparar se uma determina string vem *alfabeticamente* antes ou depois de uma outra string.

```ruby
"b" > "a"  # => true
"b" < "c"  # => true
```

## Operadores lógicos

Operadores lógicos são também chamados de operadores booleanos. Existem três tipos de operadores básicos: conjunção, disjunção e negação. Em Ruby, esses três operadores são implementados da seguinte forma:

- ```&&``` (ou ```and```) representa a conjunção
- ```||``` (ou ```or```) representa a disjunção.
- ```!```  (ou ```not```)representa a negação

```ruby
true && false   # => false
true and false  # => false

true || false   # => true
true or false   # => true

!true           # => false
not true        # => false

true && !true   # => true
!true || true   # => false
```

Para que um operador ```&&``` seja avaliada pra ```true``` é preciso que os dois operandos sejam também ```true```.

Por outro lado, o operador ```||``` avalia para ```true```, apenas um dos operandos precisa ser ```true```.

Por fim, o operador ```!``` inverte o estado lógico do seu operando. É por isso que se a variável ```a``` recebe um valor ```true```, ela será avaliada para ```false```.

## Ordem de avaliação

Agora que já entendemos sobre expressão, operadores e operandos que são avaliados e retornam um resultado, precisamos também entender que existe uma ordem de avaliação dos operadores. Considere a seguinte expressão:

```ruby
2 * 8 + 1
```

Qual dos operadores deve ser avaliado primeiro?

Assim como na matemática, em programação há operadores que precisam ser executados antes de outros. A ordem de avaliação é determinada pela *precedência* dos operadores. No caso do exemplo anterior, a expressão ```2 * 6 + 1``` é avaliada para ```13```, pois o operador ```*``` tem precedência sobre o operador ```+```, exatamente como aprendemos na escola.

É possível, no entanto, sobrescrever a precedência dos operadores através do uso de parênteses. Por exemplo, a expressão abaixo:

```ruby
2 * (8 + 1)
```

Que agora é avaliada para ```18```.

Para evitar confusões sobre a ordem de operadores, a tabela abaixo lista a ordem de precedência dos operadores discutidos nesse capítulo. São eles:

| Operador                              |
|---------------------------------------|
| ```**```                              |
| ```!```                               |
| ```*```, ```/```, ```%```             |
| ```+```, ```-```                      |
| ```<=```, ```<```, ```>```, ```>=```  |
| ```<=>```, ```==```, ```!=```         |
| ```&&```                              |
| ```||```                              |
| ```not```                             |
| ```or```, ```and```                   |

Para a ordem de precedência de todos os operadores, acesse o site da documentação da linguagem.

A tabela deve ser lida da seguinte forma: os operadores que estão mais acima tem maior precedência aos operadores mais abaixo. Mais de um operador na mesma linha indica mesma precedência.

## Exercícios de fixação

- Há ainda alguns operadores que não foram cobertos neste guia, como por exemplo: ```===```, ```=~```, ```&.``` e o ```!!!```. Pesquise e descreva o que faz cada um desses operadores.
- Vimos neste capítulo que vários operadores são implementados como métodos. Mas nem todos são métodos. Quais são esses?
- Vimos que alguns operadores como ```+``` e o ```*``` podem ser utilizados em tipos diferentes como strings e arrays. Vimos inclusive que a expressão ```"UFPA" * 2``` é válida. No entanto, a expressão ```2 * "UFPA"``` não é válida (retorna um ```TypeError```). Explique o porquê.
- Explique por que as expressões ```1 || 2 && nil``` e ```1 or 2 and nil``` tem avaliações diferentes.
- Sem rodar no interpretador, tente inferir qual é o resultado de cada uma das expressões abaixo (nota: nenhuma delas lança erro):

```ruby
(3 * 4) >= 12
true != !false
true == -10
false == (10 == 10)
(!true || (!(10 / 2) == 5) || ((12 / 4) == 3)) || false
```
- Sem rodar no interpretador, tente inferir qual o resultado da expressão abaixo:

```ruby
'4' == 4 ? puts("VERDADEIRO") : puts("FALSO")
```

<!-- https://womanonrails.com/operator-precedence-ruby -->

[^1]: Mais sobre Arrays nos próximos capítulos desse guia.
