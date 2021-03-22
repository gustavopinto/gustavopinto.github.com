---
layout: single
author_profile: true
title: Expressões e Operadores
permalink: /ruby-guide/exp
---

[Voltar ao começo do guia](/ruby-guide)

Expressões são construídas através de operações e operandos.

Os operadores são construções de linguagem que indicam quais operações podem ser aplicadas nos operandos. Geralmente operadores são usados com um ou dois operandos. Operadores que funcionam somente com um operando são chamados de operadores unários (*unary operators*); aqueles que trabalham com dois operandos são os operadores binários (*binary operators*).

Na expressão ```1 + 3```, os literais ```2``` e ```3``` são operandos e o sinal de adição ```+``` é o operador binário.

Alguns operadores podem ser utilizados em contextos diferentes. Como vimos no capítulo anterior, o operador ```+``` pode também ser utilizado como strings. Logo a expressão ```"UF" + "PA"``` é válida e avalia para ```"UFPA"```.

A capacidade de um operador ter comportamento diferente em contextos diferentes é chamada de sobrecarga (*overloaded*). Sobrecarga também é um conceito utilizado na orientação a objetos, quando queremos que um que um método sobrescreva outro, mudando assim o comportamento do método original.

Pareceu familiar?

## Operadores são métodos

Operadores são utilizados para *processar* operandos. Como sabemos que a  expressão ```1 + 3``` é avaliada para ```4```, faz sentido dizer que um operando é um parâmetro de entrada para um operador? E que o resultado da avaliação é a saída do operador?

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
- ```||``` (ou ```or```) representa a disjunção
- ```!```  (ou ```not```) representa a negação

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

Os operadores ```||``` e ```&&``` implementam o conceito de avaliação mínima (ou avaliação de curto-circuito, *short circuit evaluation*). Isso significa que o segundo operando só será avaliado caso o primeiro não seja suficiente para determinar o resultado da expressão. Mais objetivamente:

- quando utilizamos o operador ```&&``` e primeiro operando da expressão é ```false```, a expressão toda é avaliada para ```false```.

- quando utilizamos o operador ```||``` e primeiro operando da expressão é ```true```, a expressão toda é avaliada para ```true```.

Nos dois casos acima o segundo operador não precisa ser avaliado. A tabela verdade abaixo apresenta o resultado da avaliação dos  operadores lógicos ```&&``` e ```||```.

### Conjunção

| A           | B          | ```&&```    |
|-------------|------------|-------------|
| ```true```  | ```true``` | ```true```  |
| ```true```  | ```false```| ```false``` |  
| ```false``` | ```true``` | ```false``` |
| ```false``` | ```false```| ```false``` |  

### Disjunção

| A           | B          | ```||```    |
|-------------|------------|-------------|
| ```true```  | ```true``` | ```true```  |
| ```true```  | ```false```| ```true```  |  
| ```false``` | ```true``` | ```true```  |
| ```false``` | ```false```| ```false``` |  


Por fim, o operador ```!``` inverte o estado lógico do seu operando. É por isso que se a variável ```a``` recebe um valor ```true```, ela será avaliada para ```false```.


| A           | !A         |
|-------------|------------|
| ```true```  | ```false```|
| ```false``` | ```true``` |


## Outros operadores

Os operadores que discutimos nesse capítulo são os mais comumente utilizados; mas não quer dizer que são os únicos. Há vários outros operadores disponíveis em Ruby. Alguns outros exemplos incluem:

### Operador de intervalo (*range*)

Operadores de range existem para facilmente criar um intervalo de objetos (como números ou letras). Em Ruby existem dois operadores de range: o operador ```..``` que cria um intervalo inclusivo e o operador ```.``` que cria um intervalo exclusivo, no qual o maior valor é excluído.

```ruby
(1..5).to_a      # =>  => [1, 2, 3, 4, 5]
('a'..'e').to_a  # => ["a", "b", "c", "d", "e"]

(1...5).to_a      # =>  => [1, 2, 3, 4]
('a'...'e').to_a  # => ["a", "b", "c", "d"]
```

A expressão ```(1..5)``` é avaliado para um objeto da classe ```Range```. A classe ```Range```, por sua vez, tem um método chamado ```to_a```, que transforma o objeto em um array.

### Operador de atribuição paralela (*parallel assignment*)

Ruby é uma dessas linguagens que sempre há mais de uma forma de realizar a mesma operação, pois a linguagem fornece vários mecanismos que simplificam a codificação. Um desses mecanismos é o operador de atribuição paralela. Como já sabemos fazer nesse momento, podemos fazer atribuições sequenciais:

```ruby
a = 1
b = 2
c = 2
```

Atribuições paralelas nos economizam um pouco de espaço. Podemos re-escrever a mesma atribuição acima da seguinte forma:  ```a, b = 1, 2``` (a variável ```a``` recebe o valor ```1``` enquanto a variável ```b``` recebe o valor ```2```). Em vez de nú,números, poderíamos também usar string, boleanos, e ... Arrays! Por exemplo, a seguinte atribuição é válida e tem o mesmo resultado da atribuição anterior: ```a, b = [1, 2]```.

Além da vantagem da economia de espaço, há outros recursos interessantes. Por exemplo, é possível alterar o valor de duas variáveis em uma única linha de código, por exemplo: ```a, b = b, a```.

É possível, no entanto, fazer atribuições mais complexas. Por exemplo, a expressão ```a = 1, 2, 3``` é válida e o valor de ```a```, após atribuição, será de ```[1, 2, 3]```. Isso acontece pois, caso uma atribuição paralela tenha somente um valor a esqueda (*lvalue*) e dois ou mais valores a direita (*rvalue*), os valores a direita serão convertidos para um array (esta mesma atribuição poderia também ser feita usando o operador range (```..```),  por exemplo: ```a = (1..3).to_a```). Caso o *lvalue* seja maior do que um, porém menor do que o *rvalue*, por exemplo: ```a, b = 1, 2, 3```, os valores excedentes do *rvalue* serão descartados (no caso, o valor ```3``` será descartado). Por fim, se uma atribuição paralela tiver mais valores a esquerda (*lvalue*) do que a direita (*rvalue*), por exemplo, ```a, b, c = 1, 2```, será atribuído ```nil``` para as variáveis excedentes (no caso, ```c``` receberá ```nil```).

Podemos ainda atribuir expressões em vez de literais. Por exemplo, a atribuição ```a, b, c =  (x=1), (x+=1), (x+=1)```. Nesse caso, ```a```, ```b``` e ```c``` receberiam os valores ```1```, ```2``` e ```3```, respectivamente.

### Operadores binário

- TDB

## Ordem de avaliação

Agora que já entendemos sobre expressão, operadores e operandos que são avaliados e retornam um resultado, precisamos também entender que existe uma ordem de avaliação dos operadores. Considere a seguinte expressão:

```ruby
2 * 8 + 1
```

Qual dos operadores deve ser avaliado primeiro?

Assim como na matemática, em programação há operadores que precisam ser executados antes de outros. A ordem de avaliação é determinada pela *precedência* dos operadores. No caso do exemplo anterior, a expressão ```2 * 6 + 1``` é avaliada para ```13```, pois o operador ```*``` tem precedência sobre o operador ```+```, exatamente como aprendemos na escola.

É possível, no entanto, forçar que uma expressão seja avaliada em uma ordem particular através do uso de parênteses. Por exemplo, a expressão abaixo:

```ruby
2 * (8 + 1)
```

Agora é avaliada para ```18```.

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

A tabela acima deve ser lida da seguinte forma: os operadores que estão mais acima tem maior precedência aos operadores mais abaixo. Mais de um operador na mesma linha indica mesma precedência.

Um leitor atento poderia facilmente observar que o operador ```&&``` tem maior precedência do que o operador ```||``` (e ambos tem maior precedência do que seus equivalentes ```and``` e ```or```). No entanto, e curiosamente, os operadores ```and``` e ```or``` tem a mesma precedência.

Por fim, a tabela acima lista somente os operadores discutidos nesse guia. Para conhecer a ordem de precedência de todos os operadores da linguagem, acesse a [documentação oficial](https://ruby-doc.org/core-2.6.2/doc/syntax/precedence_rdoc.html).


<!-- ## Árvore de expressão

https://www.cs.bgu.ac.il/~ppl172/wiki.files/class/presentations/PPL172_L2.pdf -->

## Exercícios de fixação

- Geralmente os operadores funcionam com um ou dois operando. Cite um exemplo de um operador que funciona com três operandos.
- Há ainda alguns operadores que não foram cobertos neste guia, como por exemplo: ```===```, ```=~```, ```&.``` e o ```!!!```. Pesquise e descreva o que faz cada um desses operadores.
- Vimos neste capítulo que vários operadores são implementados como métodos. Mas nem todos são métodos. Quais são esses?
- Vimos que alguns operadores como ```+``` e o ```*``` podem ser utilizados em tipos diferentes como strings e arrays. Vimos inclusive que a expressão ```"UFPA" * 2``` é válida. No entanto, a expressão ```2 * "UFPA"``` não é válida (retorna um ```TypeError```). Explique o porquê.
- Explique por que as expressões ```1 || 2 && nil``` e ```1 or 2 and nil``` tem avaliações diferentes.
- Algumas vezes a precedência não é suficiente para determinar o resultado de uma expressão. Por exemplo, considere a expressão: ```8 / 2 * 4```. O resultado é 16 ou 1? Qual seria o novo critério de avaliação?
- Converta a expressão matemática ```(4+5)(6+(8-1)2)``` para uma notação de linguagem de programação.
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

- Implemente uma máquina de turing que avalie a expressão ```1 + 1```.

<!-- https://womanonrails.com/operator-precedence-ruby -->

[^1]: Mais sobre Arrays nos próximos capítulos desse guia.
