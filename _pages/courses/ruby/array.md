---
layout: single
author_profile: true
title: Arrays
permalink: /ruby-guide/arrays
---

[Voltar ao começo do guia](/ruby-guide/)

## Arrays

Arrays são tipos de dados que podem armazenar elementos de qualquer tipo. Os elementos de um array são separados por vírgula, e os elementos de um array são delimitados por colchetes (```[]```).

Já trabalhamos com Arrays em vários momentos nesse guia, quando por exemplo utilizamos o método ```char``` de uma ```String```, que retorna um Array ou quando passamos vários parâmetros opcionais para um método, que são agrupados em um Array, ou quando fazemos uma iteração em um ```for```. No entanto, em todos esses casos, estávamos apenas utilizando um Array que foi criado pela linguagem. Chegou o momento de nós criarmos os nossos próprios ```Arrays```

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

Embora seja equivalente a notação de colchetes (```[]```), usar o ```%w{}``` pode simplificar a leitura pois não exige que aspas e virgulas sejam fornecidas.

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

Diferente de outras linguagens de programação, acessar uma posição sem que exista um elemento armazenado nele não retorna um erro; em Ruby, isto retorna um ```nil```. Perceba também que estamos acessando os elementos do Array de forma crescente, do primeiro ao último (ou da esquerda para a direita). Mas e se quiséssemos acessar os elementos do Array da forma inversa, do último ao primeiro (ou da direita para a esquerda)?  Ruby também conta com açucares sintáticos para lidar com esses casos. Para isso, basta fornecer um índice negativo. Por exemplo:

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

dados_pessoais[1..2]     # => => ["mail@gustavopinto.org", 2401435]
dados_pessoais[-3..-1]   # => ["mail@gustavopinto.org", 2401435, :gustavopinto]
dados_pessoais[-3..-1]   # => []
```

Como já discutimos em capítulos anteriores, vários operadores em Ruby são, na realidade, métodos. O operador ```[]``` é outro exemplo. Logo, quando fazemos uma chamada como ```dados_pessoais[1..2]```, é o equivalente a fazer ```dados_pessoais.[](1..2)```. Como também já discutimos no capítulo sobre tipos de dados, o operador ```..``` é implementado pela classe Range. Logo, a expressão ```1..2``` é equivalente a ```Range.new(1,2)```. Logo, a nossa chamada ```dados_pessoais[1..2]``` nada mais é do que um açúcar sintático da expressão ```dados_pessoais.[](Range.new(1,2))```.

### Manipulando arrays

## Exercícios de fixação
- binary search
- Jogo do campo minado
- https://www.khanacademy.org/computing/computer-science/algorithms/intro-to-algorithms/a/route-finding
- crie um método que receba um array de inteiros com valores duplicados e imprima como saída um hash com a quantidade de ocorrência de cada item do array. Por exemplo, dado o array ```[1,2,2,2,2,3,3,3,4,4]``` como entrada imprima o seguinte hash ```{1 => 1, 2 => 4, 3 => 3, 4 => 2}```.

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
