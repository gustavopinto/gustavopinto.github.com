---
layout: single
author_profile: true
title: Arrays
permalink: /ruby-guide/hashes
---

[Voltar ao começo do guia](/ruby-guide/).

Hashes são tipos de dados que são capazes de armazenar grupos de elementos, assim como um Array. Hashes, na verdade, são construídos com base em Arrays, logo muito do que aprendemos em Arrays pode ser reaproveitado para utilização de Hashes.

Diferente de um Array, no entanto, Hashes são mais sofisticados e tem melhor desempenho em várias operações. Vamos discutir mais a frente alguns desses casos. Uma outra característica de um hash é o uso de chaves (```{}```) para delimitar seu escopo.

## Criando hashes

Podemos criar um Hash vazio usando a notação de chaves:

```ruby
puts {}          # => {}
meu_hash = {}    # => {}
```

Hashes são tipos de dados que além de um valor, armazenam também uma chave. A chave é utilizada para buscar o valor armazenado. Podemos definir um Hash em ruby usando a notação ```{chave => valor}```. O símbolo ```=>``` (hash rockets) separa a definição de chave e valor. Veja a seguir:

```ruby
{"um" => "one", "dois" => "two", "três" => "three"}
```

Nesse hash temos três pares de chave e valor. Isto significa que temos três chaves (```um```, ```dois``` e ```três```) que podem ser utilizadas pra acessar três valores (```one```, ```two``` e ```three```). A chave (que marca a posição) aparece ao lado esquedo do ```=>```, enquanto que o valor aparece ao lado direito.

Percba que a ideia de chave é que ela seja capaz de referenciar um determinado valor dentro de um Hash. Logo, não podem existir duas chaves iguais; do contrário, como poderíamos recuperar o valor associado? Todavia, podemos ter o mesmo valor para duas chaves diferentes.

```ruby
chaves_duplicadas = {"um" => "one", "dois" => "two", "um" => "ten"}
puts chaves_duplicadas # => {"um"=>"ten", "dois"=>"two"}

valores_duplicados = {"um" => "one", "dois" => "two", "três" => "two"}
puts valores_duplicados # => {"um"=>"one", "dois"=>"two", "três"=>"two"}
```

Como já é de se imaginar, há várias outras formas de se criar um Hash em Ruby. Uma das quais é utilizando a orientação a objetos:

```ruby
puts Hash.new         # => {}
puts Hash.new == {}   # => true

puts Hash["um" => "one"]   # => {"um" => "one"}w
```

Nos dois exemplos anteriores, criamos um Hash de strings como chave e valor. No entanto, assim como Arrays, podemos criar Hashes com tipos de dados diferentes, como no exemplo abaixo.

```ruby
dados_pessoais = {
  "nome" => "Gustavo Pinto",
  "cpf" => 00011122233,
  "telefones" => ["(91) 99052-0000", "(91) 99052-0001"]
}
```

Note que podemos inclusive usar Arrays como valores de um Hash. No entanto, embora estamo utilizando Strings para as chaves, Symbols são mais comumente utilizados para este propósito, pois símbolos são imutáveis (e, como vimos acima, chaves não podem ser publicadas). Vamos refatorar nosso Array para usar Symbols como chave:

```ruby
dados_pessoais = {
  :nome => "Gustavo Pinto",
  :cpf => 00011122233,
  :telefones => ["(91) 99052-0000", "(91) 99052-0001"]
}
```

## Manipulando Hashes

Para acessar uma determinada chave em um Hash, usamos a mesma notação de colchetes que usamos em Arrays:

```ruby
dados_pessoais = # ...

puts dados_pessoais[:nome]      # => "Gustavo Pinto"
puts dados_pessoais[:rg]        # => nil
```

Você consegue perceber o que está acontecendo? A instrução ```dados_pessoais[:nome]``` busca no Hash por uma chave chamada ```:nome```. Ao encontrar essa chave, o Hash devolve o valor associado a esta chave, no caso, a String ```Gustavo Pinto```. Essa String é então enviada para o método ```puts``` que imprime na tela o resultado.

Poderíamos também recuperar um valor do Hash usando o método ```fetch```.


```ruby
dados_pessoais = # ...

puts dados_pessoais.fetch :nome      # => "Gustavo Pinto"
puts dados_pessoais.fetch :rg        # => KeyError (key not found: :rg)
```

No entanto, diferente do acesso direto a chave, a chamada ao método ```fetch``` retorna um ```KeyError``` caso a chave não existe no Hash.

Assim como nos Arrays, em que um acesso a uma posição inexistente retorna um ```nil```, em Hash, tentar acessar uma chave inexistente também retorna um ```nil```.

Para atribuir um valor a um Hash já existente, podemos usar o mesmo mecanismo de atribuição. Por exemplo: ```dados_pessoais[:nome] = "Gustavo Henrique"```. Caso a chave informada não exista no Hash, um novo registro é criado. Dessa forma, podemos popular um Hash da seguinte forma:

```ruby
livros = {}

livros[:sapiens] = "Sapiens: A Brief History of Humankind"
livros[:mindset] = "Mindset: The New Psychology of Success"
livros[:metrics] = "The tyranny of Metrics"
```

Por fim, para encerrar nosso processo de manipulação de um Hash, falta a capacidade de remover elementos. Hashes possuem o método ```delete```, para que possamos remover valores com base em uma chave. Por exemplo:

```ruby
livros = # ...

livros.delete [:metrics]    # => nil
livros.delete :metrics      # => "The tyranny of Metrics"
```

Algo interessante aconteceu. Por que a primeira chamada ao ```delete``` retornou ```nil``` enquanto que a segunda chamada retornou o nome do livro. Em primeiro lugar, devemos saber que o método ```delete``` ele remove do Hash e retorna o valor removido. Logo, é por isso que o valor removido é impresso na tela. Mas por que a primeira chamada retorna ```nil```?  Isso acontece pois estamos passando por parâmetro um Array de um único elemento como chave (```[:metrics]```), e esta chave não existe dentro do Hash que criamos. O valor dentro do Array (```:metrics```) é o que de fato existe como chave no nosso Hash.


## Percorrendo elementos do Hash

Mas, como podemos manipular os elementos de um Hash sem saber exatamente quais são as suas chaves? Para isso, precisamos percorrer os elementos, verificando cada uma das chaves. Há várias de iterar por um Hash. Umas das formas mais procedurais é utilizando um laço ```for```. Para os dados de entrada do ```for```, podemos informar o Array de chaves do Hash, através do método ```keys```. Como por exemplo:

```ruby
livros = # ...

for key in livros.keys
  puts livros[key]
end
```

No entanto, esse design de iteração pouco utilizado por programadores Ruby, pois há outras formas de iteração que são mais orientadas a objetos. Vimos algumas desas no [capítulo anterior](/ruby-guide/arrays). Podemos utilizar algumas delas aqui também, como o método ```each```.

```ruby
livros = # ...

livros.each {|chave, valor| puts valor }
```

Perceba que no exemplo acima nós tivemos que iterar pelas chaves e pelos valores. Há algumas situações, no entanto, que gostaríamos de iterar somente pelas chaves, como a seguir:

```ruby
livros = # ...

livros.each_key {|chave| puts chave }
```

## Outras operações com Hashes

A classe Hash tem diversos métodos, e [documentação oficial descreve-os em detalhes](https://ruby-doc.org/core-3.0.0/Hash.html). Alguns dos mais comumente utilizados estão a seguir.

```ruby
livros = # ...

livros.size                               # => 3
livros.empty?                             # => false

livros.key?(:mindset)                     # => true
livros.value?("The tyranny of Metrics")   # => true
livros.value?("Metrics")                  # => false

livros.clear                              # => {}
```

. Por exemplo, em um Array, para remover um elemento que não conhecemos, precisamos percorrer todo o Array até encontra-lo. Em um Hash, isso fazemos buscas usando uma *chave*.  

## Sobre a notação de Hash

Até o Ruby 1.8, a notação de hash rockets (```=>```) era a padrão para criação de hashes. No entanto, no Ruby 1.9, foi introduzida a notação de dois pontos (```:```). Um exemplo de um mesmo Hash usando as duas notações pode ser visto a seguir:

```ruby
{"um" => "one", "dois" => "two", "três" => "three"}
{"um": "one", "dois": "two", "três": "three"}
```
A notação de dois pontos tinha dois objetivos principais: um era tornar os Hashes sintaticamente mais próximos de um JSON. A notação de dois pontos também era mais fácil de ser utilizada. Nas atuais versões de Ruby (versão 3.0 incluída), ambas as notações de ```=>``` e ```:``` são válidas para criar Hashes. Mas há um problema.

Quando usamos a notação mais recente (```:```), as chaves do Hash são automaticamente convertidas para um Symbol. Logo, ao invés de esperar pela conversão automática, alguns desenvolvedores utilizam Symbols desde o momento da criação do Hash (o que faz todo sentido). No entanto, para evitar que uma chave tenha o formato ```:chave:``` (sendo o primeiro ponto e vírgula para a definição do Symbol e o segundo para a delimitação da chave do Hash), a definição de um Hash passou a ser da seguinte forma:

```ruby
{ um: "one", dois: "two", tres: "three" }
```

Perceberam que os dois pontos da definição do Symbol sumiram? Curiosamente, isto não é tudo. Ao defini-lo no interpretador, o Hash assume o seguinte formato.

```
{:um=>"one", :dois=>"two", :tres=>"three"}
```

## Exercícios de fixação

<!--http://ruby-for-beginners.rubymonstas.org/built_in_classes/hashes.html-->

- Crie um método que receba um array de inteiros com valores duplicados e imprima como saída um hash com a quantidade de ocorrência de cada item do array. Por exemplo, dado o array ```[1,2,2,2,2,3,3,3,4,4]``` como entrada imprima o seguinte hash ```{1 => 1, 2 => 4, 3 => 3, 4 => 2}```.
