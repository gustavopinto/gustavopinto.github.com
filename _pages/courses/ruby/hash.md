---
layout: single
author_profile: true
title: Arrays
permalink: /ruby-guide/hashes
---

[Voltar ao começo do guia](/ruby-guide/).

Hashes são tipos de dados que são capazes de armazenar grupos de elementos, assim como um Array. Hashes, na verdade, são construídos com base em Arrays, logo muito do que aprendemos em Arrays pode ser reaproveitado para utilização de Hashes.

Diferente de um Array, no entanto, Hashes são mais sofisticados e tem melhor desempenho em várias operações. Vamos discutir mais a frente alguns desses casos. Uma outra característica de um hash é o uso de chaves (```{}```) para delimitar seu escopo.

### Criando hashes

Podemos criar um Hash vazio usando a notação de chaves:

```ruby
puts {}
meu_hash = {}
```

Hashes são tipos de dados que além de um valor, armazenam também uma chave. A chave é utilizada para buscar o valor armazenado. Podemos definir um Hash em ruby usando a notação ```{chave => valor}```. O símbolo ```=>``` (hash rockets) separa a definição de chave e valor. Veja a seguir:

```ruby
{"um" => "one", "dois" => "two", "três" => "three"}
{"um" => "one", "dois" => "two", "três" => "three", "um" => "ten"}
```

Nesse hash temos três pares de chave e valor. Isto significa que temos três chaves (```um```, ```dois``` e ```três```) que podem ser utilizadas pra acessar três valores (```one```, ```two``` e ```three```). 

. Por exemplo, em um Array, para remover um elemento que não conhecemos, precisamos percorrer todo o Array até encontra-lo. Em um Hash, isso fazemos buscas usando uma *chave*.  



Até o Ruby 1.8, a notação de hash rockets (```=>```) era a padrão para criação de hashes. No entanto, no Ruby 1.9, foi introduzida a notação de dois pontos (```:```). A notação de dois pontos tinha dois objetivos principais: um era tornar os Hashes sintaticamente mais próximos de um JSON. A notação de dois pontos também era mais fácil de ser utilizada. Nas atuais versões de Ruby (versão 3.0 incluída), ambas as notações de ```=>``` e ```:``` são válidas para criar Hashes. Mas há um problema.

http://ruby-for-beginners.rubymonstas.org/built_in_classes/hashes.html
