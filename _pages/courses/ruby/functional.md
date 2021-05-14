---
layout: single
author_profile: true
title: Programação Funcional
permalink: /ruby-guide/fp
---

[Voltar ao começo do guia](/ruby-guide)

Principais características do paradigma funcional:

1. Imutabilidade
2. Funções puras
3. Funções de anonimas
3. Funções de alta ordem
3. Transparência referencial
4. Memoização
5. Idepontencia
7. Currying
8. Avaliação preguiçosa


## Imutabilidade

Um dos principais conceitos de programação funcional é a idéia de que estados são imutáveis. Mas o que isso quer dizer? Em princípio, isso significa que uma vez um valor é atribuído a uma variável, não é pode fazer uma reatribuição de valor para esta variável. Logo,

```ruby
x = 5
x = 10 # houve uma mudança no estado da variável x
```

Em uma linguagem de funcional dita como pura, essa re-atribuição de variável lancçaria um erro. No entanto, é possível em Ruby. Como a linguagem não fornece mecanismos para forçar imutabilidade por padrão, fica como uma boa prática para desenvolvedores exercitarem.

## Funções puras

Métodos também podem mudar o estado de variáveis. Por exemplo:

```ruby
a = [1,2,3]
a.reject {|i| i == 1}
puts a   # => [1, 2, 3]

a = [1,2,3]
a.reject! {|i| i == 1}
puts a   # => [1, 2]
```

Podemos perceber que o comportamento do ```reject!``` é diferente do ```reject```, pois o primeiro muda o valor da variável ```a``` enquanto que o segundo não muda (este, na realidade, devolve um novo array com os elementos necessários). Como estudamos no capítulo sobre métodos, em Ruby usamos como convenção uma exclamação (```!```) ao fim do nome do método, quando queremos passar um aviso de *cuidado* ao desenvolvedor. Um dos motivos desse cuidado é que estes métodos alterarem o comportamento da variável a qual eles operam. Mas, novamente, *cuidado*. Há vários métodos em Ruby que mudam estado e não necessáriamente tem uma exclamação no seu nome. Exemplos incluem os métodos, shift, pop, clear, delete (e vários outros) da classe Array.

O primeiro passo para programação funcional em Ruby é conhecer quais métodos manipulam estado de variáveis.

### Quais sãos os problemas de estados mutaveis?

Funções puras são aquelas que não mudam o estado de uma variável. Ou seja, dado uma determinada entrada, uma função pura deve

## Funções anônimas

Funções anônimas, como o nome mesmo sugere, são funções que não tem um nome não foi (nem será) definido. Uma função com nome pode ser descrita da seguinte forma:

```ruby
def ola
  puts "oi pessoal"
end
```

E chamando o nome da função, ```ola```, obtemos como saída a string ```oi pessoal```. Uma função anônima com comportamento similar, pode ser feita da seguinte forma:

```ruby
meu_lambda = lambda { puts "oi pessoal" }
```

Perceba que a declaração da função começa na palavra reservada ```lambda```, e a referência para a função é aramazenada na varíavel ```meu_lambda```. Ou seja, uma chamada ao ```meu_lambda``` retorna somente a referência para a função anômia, e não a executa (como talvez fosse o esperado). Para de fato executa-a, precisamos chamar o método ```call```, da seguinte forma:

```ruby
meu_lambda = lambda { puts "oi pessoal" }

meu_lambda        # => #<Proc:0x00005563f10ec298 (irb):6 (lambda)>

meu_lambda.call   # => oi pessoal
```

Como qualquer função, é possível também passar parâmetros para que sejam executados dentro da função.

```ruby
meu_lambda = lambda {|nome|  puts "oi #{nome}" }

meu_lambda.call "Gustavo"   # => oi Gustavo
```

Percebam que o conteúdo de um lambda é definido por um bloco (note as chaves (```{}```) no começo e no fim do método), e não por um ```def``` e um ```end```.  Isso acontece pois lambdas são implementados como blocos em Ruby. No entanto, não são os mesmos tipos de blocos que vimos no capítulo sobre métodos. Em Ruby, lambdas são implementações do tipo ```Proc```, por isso que recebemos o valor ```Proc:0x00005563f10ec298``` ao imprimir a referência do objeto que guarda nossa variável ```meu_lambda```. Um ```Proc``` difere de um bloco simplesmente pois objetos do tipo ```Proc``` podem ser armazenados em uma variável.

Por fim, perceba que ```lambda```, em Ruby, é apenas um alias para ```proc```:

```ruby
meu_proc = proc { puts "oi pessoal" }
meu_proc.call  # => oi pessoal

meu_proc = proc {|nome|  puts "oi #{nome}" }
meu_proc.call "Gustavo"   # => oi Gustavo
```

## Funções de alta ordem

Com lambdas, linguagens funcionais ganham uma nova características, chamada funções de alta ordem. Essa característica permite que funções possam ser armazenadas em variáveis do programa, que percebemos ao fazermos nosso primeiro exemplo usando o ```meu_lambda```. Se uma função pode ser armazenada em uma variável, podemos também passar a função por parâmetro para outro método. Por exemplo:

```ruby
class Salario

	def initialize
		@salario = 1000
		@bonificacao = lambda {|salario| salario * 0.2}
	end

	def calcular
		  @salario += @bonificacao.call @salario
	end
end

salario = Salario.new
puts salario.calcular
```

Da mesma forma que podemos passar funções como parâmetros, podemos também retornar funções de outras funções.

```ruby
def gerador_de_lambdas(multiplicador)
    lambda {|num| num * multiplicador }
end

vezes_tres = gerador_de_lambdas 3

puts vezes_tres.call 4
```

## Recursão

## Currying

```ruby
greet = lambda {|name| "Hello #{name}" }
greet.call('World')
# => "Hello World"
```

```ruby
generic_greet = lambda {|greeting, name| "#{greeting} #{name}" }
generic_greet.call('Hi', 'SengMing')
# => "Hi SengMing"
```


```ruby
curried_generic_greet = generic_greet.curry
curried_generic_greet.call('Ahoy').call('SengMing')
# => "Ahoy SengMing"
```

```ruby
hi_greet = curried_generic_greet.call('Hi')
hi_greet.call('SengMing')
# => "Hi SengMing"
```
