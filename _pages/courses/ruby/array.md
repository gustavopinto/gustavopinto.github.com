---
layout: single
author_profile: true
title: Arrays
permalink: /ruby-guide/arrays
---

[Voltar ao começo do guia](/ruby-guide/)

## Arrays

Arrays são tipos de dados que podem armazenar elementos de qualquer tipo. Os elementos de um array são separados por vírgula, e os elementos de um array são delimitados por colchetes (```[]```).

Já trabalhamos com Arrays em vários momentos nesse guia, quando por exemplo utilizamos o método ```char``` de uma ```String```, que retorna um Array ou quando passamos vários parâmetros opcionais para um método, que são agrupados em um Array, ou quando fazemos uma iteração em um ```for```. No entanto, em todos esses casos, estávamos apenas utilizando um Array que foi criado pela linguagem. Chegou o momento de nós criarmos os nossos próprios ```Arrays```.

### Criando arrays

Em Ruby, a maneira mais simples de se criar um Array é da seguinte forma:

```ruby
telefones = [1, 2, 3, 4]
emails = [
  "gustavo@google.com",
  "gustavo@yahoo.com",
  "mail@gustavopinto.org"
]

puts telefones
puts emails
```

Perceba que cada elemento do Array é separado por uma vírgula. Mais acima mencionei que era a forma mais simples, o que deixou entender que existem outras formas. Sim, em Ruby há sempre mais de uma forma de se fazer a mesma coisa. Caso queiramos criar um Array em que cada elemento seja uma única palavra, podemos usar a notação ```%w{}``` que cria um Array de palavras (*word array*):

```ruby
emails =  %w{gustavo@google.com gustavo@yahoo.com mail@gustavopinto.org}

puts emails
```

Embora seja equivalente a notação de colchetes (```[]```), usar o ```%w{}``` pode simplificar a leitura pois não exige que aspas e virgulas sejam fornecidas. Outra forma de criar um Array com valores específicos é usando um Range, junto com o método ```to_a```, que converte um Range em um Array. Por exemplo:

```ruby
(1..5).to_a       #  => [1, 2, 3, 4, 5]
("a".."e").to_a   #  => ["a", "b", "c", "d", "e"]
```

Como Ruby é uma linguagem que emprega fortemente o paradigma orientado a objetos, Arrays também ser criados usando a estrutura ```emails = Array.new(["gustavo@google.com", "gustavo@yahoo.com", "mail@gustavopinto.org"])```. Quais dessas você achou mais simples?

### Acessando elementos do array

No nosso exemplo, criamos um Array com elementos do tipo ```Integer``` e outro Array com elementos do tipo ```String```. No entanto, Arrays podem ser heterogêneos, comportando elementos de tipos diferentes. Por exemplo:

```ruby
dados_pessoais = [
  "Gustavo Pinto",
  "mail@gustavopinto.org",
  00011122233,
  :gustavopinto
]

puts dados_pessoais
```

Para acessar um determinado elemento no Array, usamos também a notação de colchetes (```[]```). No exemplo do Array acima, acessamos o primeiro elemento utilizando: ```dados_pessoais[0]```. A posição zero (0) informada dentro dos colchetes se refere ao primeiro elemento do Array.
<!--Começamos a contar por zero por uma questão de design da linguagem, possivelmente inspirado em C. Em C um array aponta para a localização na memória, portanto a expressão *array[n]*, n não deve ser tratado como um índice, mas como um deslocamento da cabeça do array.-->
Podemos acessar qualquer elemento do Array usando a notação de colchetes (```[]```).

```ruby
dados_pessoais = [
  "Gustavo Pinto",
  "mail@gustavopinto.org",
  00011122233,
  :gustavopinto
]

puts dados_pessoais[0]   # => Gustavo Pinto
puts dados_pessoais[1]   # => mail@gustavopinto.org
puts dados_pessoais[2]   # => 00011122233
puts dados_pessoais[3]   # => gustavopinto
puts dados_pessoais[4]   # => nil
```

Diferente de outras linguagens de programação, acessar uma posição sem que exista um elemento armazenado nele não retorna um erro; em Ruby, isto retorna um ```nil```. Uma outra forma de acessar os elementos de um Array é através do método ```at```, que funciona de forma análoga a notação de colchetes (```[]```).

```ruby
puts dados_pessoais.at(0)   # => Gustavo Pinto
puts dados_pessoais.at(3)   # => gustavopinto
```

Para conveniência, podemos acessar o primeiro elemento usando o método ```first``` e o último elemento usando o método ```last```.

```ruby
puts dados_pessoais.at(0)   # => Gustavo Pinto
puts dados_pessoais.at(3)   # => gustavopinto
```

Perceba também que estamos acessando os elementos do Array de forma crescente, do primeiro elemento ao último elemento (ou da esquerda para a direita). Mas e se quiséssemos acessar os elementos do Array da forma inversa, do último ao primeiro (ou da direita para a esquerda)? Ruby também conta com açúcares sintáticos para lidar com esses casos. Para isso, basta fornecer um índice negativo. Por exemplo:

```ruby
dados_pessoais = [
  "Gustavo Pinto",
  "mail@gustavopinto.org",
  00011122233,
  :gustavopinto
]

puts dados_pessoais[-1]   # => gustavopinto
puts dados_pessoais[-2]   # => 00011122233
puts dados_pessoais[-3]   # => mail@gustavopinto.org
puts dados_pessoais[-4]   # => Gustavo Pinto
puts dados_pessoais[-5]   # => nil
```

Logo, o índice ```-1``` acessa a última posição do Array, enquanto que o ```-2``` acessa a penúltima, e assim por diante. Novamente, se passarmos um índice sem elemento na posição, Ruby retorna um ```nil```.

Assim como aprendemos a utilizar o operador de Range em Strings, podemos também usar o mesmo operador com Arrays.

```ruby
dados_pessoais = # ...

dados_pessoais[1..2]     # => ["mail@gustavopinto.org", 2401435]
dados_pessoais[-3..-1]   # => ["mail@gustavopinto.org", 2401435, :gustavopinto]
dados_pessoais[1..-2]    # => ["mail@gustavopinto.org", 2401435]
dados_pessoais[-3..-1]   # => []
```

Como já discutimos em capítulos anteriores, vários operadores em Ruby são, na realidade, métodos. O operador ```[]``` é outro exemplo. Logo, quando fazemos uma chamada como ```dados_pessoais[1..2]```, é o equivalente a fazer ```dados_pessoais.[](1..2)```. Como também já discutimos no capítulo sobre tipos de dados, o operador ```..``` é implementado pela classe Range. Logo, a expressão ```1..2``` é equivalente a ```Range.new(1,2)```. Logo, a nossa chamada ```dados_pessoais[1..2]``` nada mais é do que um açúcar sintático da expressão ```dados_pessoais.[](Range.new(1,2))```.

### Manipulando arrays

Podemos também usar a notação de colchetes para manipular elementos no Array. Por exemplo, a instrução ```dados_pessoais[0] = "Gustavo"``` altera o valor que estava na posição zero para o novo valor que foi passado, no caso a String ```Gustavo```. Podemos também fazer [atribuições paralelas](/ruby-guide/exp) em Arrays. Nesse caso, ao invés de passar um índice específico, podemos passar um Range. Por exemplo:

```ruby
dados_pessoais = [
  "Gustavo Pinto",
  "mail@gustavopinto.org",
  00011122233,
  :gustavopinto
]

dados_pessoais[0..1] = "Gustavo", "gpinto@ufpa.br"

puts dados_pessoais
```

Até agora estamos trabalhando em um Array pre-definido. E se quiséssemos adicionar outros elementos no Array *ao longo* da execução do programa? Podemos usar o operador shovel (```<<```) que utilizamos para concatenar Strings também para adicionar novos elementos em um Array.

```ruby
[1,2,3] << 4          # => [1,2,3,4]
```

Em outras linguagens, o operador ```+``` é utilizado para adicionar elementos no Array. Como vimos, em Ruby fazemos isso usando o ```<<```. No entanto, podemos também utilizar o operador ```+``` em Arrays. Nesse caso, o seu comportamento é ligeiramente diferente. Ao invés de adicionar um elemento ao Array, o operador ```+``` concatena dois Arrays. Vamos experimentar um pouco com esses dois operadores:

```ruby
[1,2,3] + [4]          # => [1,2,3,4,5]
[1,2,3] + 4            # => TypeError
[1,2,3] << [4]         # => [1,2,3,[4]]
```

Enquanto que usar o operador ```+``` com um Array e um Inteiro retorna um ```TypeError``` (não há conversão clara de Inteiro para Array), usar o ```<<``` com dois Arrays acabou inserindo um elemento do tipo Array dentro do nosso Array.

Existe também o método ```push``` que funciona de maneira similar ao operador shovel (```<<```). No entanto há uma sutil diferença entre os dois: enquanto que o ```<<``` aceita somente um único argumento e o insere ao final do Array, o método ```push``` aceita um ou mais argumentos (mas também insere ao final do Array). Por exemplo:

```ruby
[1,2,3] << 4          # => [1,2,3,4]
[1,2,3].push 4        # => [1,2,3,4]

[1,2,3] << 4,5        # => SyntaxError!
[1,2,3].push 4,5      # => [1,2,3,4,5]

[1,2,3] << [4,5]        # => [1,2,3,[4,5]]
[1,2,3].push [4,5]      # => [1,2,3,[4,5]]
```

Além de acessar, alterar e incluir elementos, podemos também remove-los durante a execução do programa. Há várias formas de remover elementos de um Array. Algumas delas:

```ruby
[1,2,3].shift            # => 1
[1,2,3].pop              # => 3
[1,2,3].delete(1)        # => 1
[1,2,3].delete_at(1)     # => 2
```

Enquanto que o ```shift``` remove o primeiro elemento, o ```pop``` remove o último elemento, o ```delete``` remove um específico, e o ```delete_at``` remove um elemento de uma posição específica. Note que todos os métodos acima retornam o elemento removido, e não o Array modificado.

Por fim, assim como podemos combinar Arrays usando o operador ```+```, podemos fazer subtração de elementos usando o operador ```-```.

```ruby
[1,2,3,4,5] - [1]        #=>  [2,3,4,5]
[1,2,3,4,5] - [1,3,5]    #=>  [2,4]

[1,2,3,4,5] - 1          #=>  TypeError
```

Perceba que o operador ```-``` recebe dois Arrays como operandos. Embora pareça intuitivo tentar remover um elemento sem precisar engloba-lo em um Array, essa operação retorna um ```TypeError```.


### Percorrendo elementos do Array

Para percorrer elementos em um Array, podemos usar um ```for```, como vimos no [capítulo anterior](/ruby-guide/flow). Por exemplo:

```ruby
dados_pessoais = # ...

for i in dados_pessoais
  puts i
end
```

Embora essa seja uma forma muito comum de se percorrer Arrays em algumas linguagens de programação, em Ruby ela é pouco utilizada. Isso pois Ruby conta com várias outras formas (menos procedurais) que são preferidas pela comunidade. Podemos por exemplo utilizar o método ```each```, que recebe um bloco.

```ruby
dados_pessoais = # ...

dados_pessoais.each do |i|
  puts i
end
```

Como esperado, poderíamos escrever blocos de uma única linha usando a notação de chaves ```{}```, como ```dados_pessoais.each {|i| puts i}```.

Na classe Array há diversos outros métodos que podem ser utilizados para iterar por seus elementos. Outro exemplo é o método ```reverse_each```, que itera pela order reversa dos elementos:

```ruby
items = (1..5).to_a
items.reverse_each {|i| puts i}  # => 5, 4, 3, 2, 1
```

Outro método bastante utilizado é o ```map```. O ```map``` não somente itera pelos elementos de um Array, também é capaz de fazer manipulações nesses elementos. Por exemplo, poderíamos converter um Array dos primeiros 50 inteiros positivos para sua representação binária usando um ```map```:

```ruby
items = (1..50).to_a
items.map {|i| puts i.to_s(2)}
```

Além do ```map```, o select também é outro método muito útil. O ```select``` filtra elementos do Array baseado em alguma condição. Por exemplo, poderíamos remover todos os elementos ímpares de um Array da seguinte forma:

```ruby
items = (1..50).to_a
items.select {|i| i.even? }  # => [2, 4, 6, 8, ..., 50]
```

Podemos também usar os métodos em conjunto. Por exemplo, se quiséssemos saber a representação binária somente dos números pares, poderíamos fazer:

```ruby
items = (1..50).to_a
items.select {|i| i.even? }.map {|i| puts i.to_s(2)}
```

Há diversos outros métodos que valem a pena ser estudados na documentação oficial da linguagem.

## Matrizes

A capacidade de criar um Array dentro de outro é fundamental para que possamos manipular matrizes. Um exemplo de matriz 3x3 (ou seja, três linhas por três colunas) pode ser visto abaixo:

```ruby
a = [0,0,0]
b = [1,1,1]
c = [0,1,0]

matriz = [a,b,c] # => [[0, 0, 0], [1, 1, 1], [0,1,0]]
```

Imprimir o objeto ```matriz``` em uma única linha não ajuda a entender o seu formato. Vamos quebra-lo em várias linhas apenas para fins de facilitar a visualização:
```
[
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
]
```

## Exercícios de fixação

- Crie um algoritmo de [busca binária](https://en.wikipedia.org/wiki/Binary_search_algorithm).

- Quantos bytes são necessários para armazenar o seguinte array: ```[1,2,3,4]```. Justifique sua resposta.

- Explique o resultado das seguintes expressões:

```ruby
[1] == [1]       # => true
[1].equal? [1]   # => false
```

- Implemente o jogo do campo minado. No jogo do campo minado, é criado um mapa (representado por uma matriz), em que o usuário deve informar uma determinada posição. A posição pode tanto ter 1) uma bandeira, e o usuário ganha o jogo, 2) uma bomba, e o usuário perder o jogo, ou nenhum item. A quantidade de bombas deve ocupar aproximadamente 50% da matriz. Ou seja, em uma matriz 4x4, haverão 12 posições, das quais 6 delas com bomba, 1 com a bandeira, e as outras 5 sem item.
- Implemente o jogo da velha. No jogo da velha, dois jogadores devem preencher com zeros ou uns uma matriz 3x3. Ganha o jogador que primeiro uma coluna, uma linha, ou uma diagonal com os mesmos elementos. Há um empate caso nenhum jogador ganhe o jogo.

<!-- - https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/route-finding -->

- Justifique a saída para cada uma das entradas a baixo:

```ruby
letters = %w{a b c d e f} # => ["a", "b", "c", "d", "e", "f"]
>> letters[0..1]          # => ["a", "b"]
>> letters[0, 2]          # => ["a", "b"]
>> letters[0...2]         # => ["a", "b"]
>> letters[0..-5]         # => ["a", "b"]
>> letters[-6, 2]         # => ["a", "b"]
```
<!-- https://www.sitepoint.com/guide-ruby-collections-part-arrays/ -->

- Crie um método que receba um array de inteiros com valores duplicados e imprima como saída um hash com a quantidade de ocorrência de cada item do array. Por exemplo, dado o array ```[1,2,2,2,2,3,3,3,4,4]``` como entrada imprima o seguinte hash ```{1 => 1, 2 => 4, 3 => 3, 4 => 2}```.

- Crie um programa que leia um arquivo de texto (```.txt```) de um diretório, separe as palavras pelo espaço em branco, e converta as palavras para minúsculo. Imprima o total de palavras do arquivo, e o número de vezes cada palavra foi utilizada.
