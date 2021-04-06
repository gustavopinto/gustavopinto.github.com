Métodos---
layout: single
author_profile: true
title: Atribuição de variáveis
permalink: /ruby-guide/funcs
---
[Voltar ao começo do guia](/ruby-guide/)

Até o momento, os programas que criamos foram escritos de forma a resolver um problema uma única vez. Mas e se quisermos resolver o mesmo problema duas vezes? Três vezes? Considere o programa que faz conversão de valores entre moedas do [capítulo anterior](/ruby-guide/flow):

```ruby
puts "Digite o valor para ser convertido (em Real)"
valor_para_converter = gets.chomp.to_f

puts "Digite a moeda para converter (D para Dólar ou E para Euro)"
moeda_para_converter = gets.chomp.upcase

if moeda_para_converter == "D"
  cotacao_dolar = 5.61
  puts "A conversão em dolár será:" , (valor_para_converter / cotacao_dolar).round
else
  cotacao_euro = 6.64
  puts "A conversão em euro será:", (valor_para_converter / cotacao_dolar).round
end
```

Perceba que nesse exemplo, o valor da cotação das moedas estão fixos no nosso código, mas nós sabemos que a cotação é flutuante, muda o tempo todo! E se quisessemos usar o serviço do Google para


## Métodos

Métodos são blocos de código que englobam um determinado comportamento de forma que este seja reutilizado em outro local, evitando código duplicado. Código duplicado, na realidade, é um dos grandes problemas do desenvolvimento de software moderno. Métodos com escopo bem definido são são excelentes para evitar código duplicado. Ao longo desse guia nós já utilizamos diversas métodos como ```puts```, ```to_s```, ```gets```, como muitas outras. Imagina se nós precisássemos escrever código para imprimir texto na tela? Ou converter uma variável para string, ou para receber dados do usuário? Que bom que já existem essas métodos! Nós apenas reutilizamo-as. Reuso é um termo chave em programação em geral e, em particular, quando falamos de métodos. Como reveremos nesse capítulo, podemos resolver problemas mais complexos, compondo métodos menores, bem definidas.

## Definição de métodos

Para declarar um método em ruby, devemos seguir a seguinte estrutura:

```ruby
def nome_da_funcao (argumentos)
  return algum_valor
end
```

Há alguns conceitos-chave aqui. Primeiro, usamos a palavra reservada ```def``` para definir o início de um método. De forma similar, a palavra reserva ```end``` define o fim de um método. Após nomear o método (no caso do nosso exemplo, usamos o nome ```nome_da_funcao```), temos a opção de passar argumentos para o método. Opção pois podemos criar métodos sem argumentos. Argumentos são variáveis que devem ser manipuladas dentro de um método. Mais concretamente, o método ```puts``` recebe como argumento uma ```String``` que será impressa na tela (que são passadas por parênteses ```()```[^1]). No entanto, o método ```gets``` não recebe nenhum argumento (não passamos nada por parênteses ```()``` pra esse método).

O nome do método junto com seus argumentos são também conhecidos como a assinatura do método. A assinatura do método é utilizada em vários momentos pela linguagem, como por exemplo para resolução de nomes. Uma vez que diferentes métodos podem ter o mesmo nome (lembra que ```+``` é um método que existe tanto em ```Integer```s e ```String```s?), a linguagem de programação precisa saber exatamente qual método deve ser executado.

Um outro conceito importante é o escopo do método. O escopo é o contexto que delimita quais valores e expressões que são criados dentro de um método (entre um ```def``` e um ```end```). Trechos de código que são definidos dentro do contexto de um método só são visíveis e executáveis dentro do método; ou seja, estes não existem fora do método. Vamos observar isso no nosso programa abaixo:

 ```ruby
def converter_para_dolar (valor_para_converter)
 cotacao_dolar = 5.61

 valor_convertido = valor_para_converter / cotacao_dolar

 return valor_convertido
end

puts converter_para_dolar 100

puts valor_convertido
```

Ao executar esse programa, é impresso na tela o valor ```17.825311942959``` que é o valor armazenado na variável ```valor_convertido``` e após recebemos um ```NameError (undefined local variable or method `valor_convertido' for main:Object)```.  Isso acontece pois a variável ```valor_convertido``` foi definida dentro do método ```converter_para_dolar```, logo ela não existe fora deste método. No entanto, variáveis que definidas antes de um método podem ser utilizadas dentro de um método. Por exemplo:

```ruby
cotacao_dolar = 5.61

def converter_para_dolar (valor_para_converter)
  valor_convertido = valor_para_converter / cotacao_dolar
  return valor_convertido
end

puts converter_para_dolar 100
```

A variável ```cotacao_dolar``` é visível dentro do método ```converter_para_dolar``` pois o escopo da variável é global, ou seja, a variável ```cotacao_dolar``` pode ser acessada de qualquer lugar do nosso programa. No entanto, variáveis definidas dentro do método só existem no escopo do método.

Por fim, antes de encerrar o método com um ```end```, podemos no entanto retornar um valor, através da palavra reservada ```return```. O ```return``` deve obrigatoriamente ser a última instrução de um método. Caso exista alguma instrução após um ```return```, esta instrução não é executada. Vejamos no exemplo a seguir:

```ruby
def converter_para_dolar (valor_para_converter)
 cotacao_dolar = 5.61

 valor_convertido = valor_para_converter / cotacao_dolar

 return valor_convertido
 puts "O valor convertido é " + valor_convertido
end

puts converter_para_dolar(100)
```

Nesse caso, o método ```puts``` não é executada pois foi colocada após o ```return```. Como já vimos em outros locais nesse guia, Ruby é uma linguagem que fornece vários açúcares sintáticos aos desenvolvedores. A opcionalidade dos parênteses é um açúcar sintático conhecido. Um outro exemplo de açúcar sintático é a opcionalidade do ```return``` ao fim de um método. Neste caso, a última instrução é imediatamente retornada. Vejamos no exemplo a seguir:

```ruby
def converter_para_dolar valor_para_converter
 cotacao_dolar = 5.61

 valor_para_converter / cotacao_dolar
end

puts converter_para_dolar 100
```

No caso do exemplo acima, a última instrução é a expressão ```valor_para_converter / cotacao_dolar```. O ```return``` implícito avaliará essa expressão e retornará seu resultado. Sem os parênteses ```()``` (tanto na definição quanto no uso do método) e a ausência de um return deixaram o código mais simples, mais conciso.

## Escopo de variáveis

Escopo de uma variável se refere ao tempo de vida em que a variável vai estar visível em um programa. Variáveis que são ditas como fora de escopo não são visíveis, logo não podem ser manipuladas. De maneira geral, existem dois tipos de  escopos: o **escopo local**, em que a variável só pode ser acessada dentro de um método, e o **escopo global**, em que a variável pode ser acessada em qualquer lugar do programa, inclusive dentro de um método. Considere o exemplo anterior novamente:

```ruby
def converter_para_dolar valor_para_converter
 cotacao_dolar = 5.61
 valor_para_converter / cotacao_dolar
end

puts cotacao_dolar
```

O código acima retorna um ```NameError```, pois a variável ```cotacao_dolar``` não é visível fora do método que foi definida. Podemos usar a palavra reservada ```defined?``` para entender um pouco mais do escopo da variável. Vamos mudar um pouco o nosso exemplo anterior pra entender um pouco mais sobre os escopos das variáveis.

```ruby
cotacao_dolar = 5.61
defined? cotacao_dolar # => "local-variable"

def converter_para_dolar
 cotacao_dolar = 5.61
 defined? cotacao_dolar # => "local-variable"
end
```

No exemplo acima, tanto a variável ```cotacao_dolar``` definida fora do método quanto a variável ```cotacao_dolar``` definida dento do método tem escopo local. De fato, embora as variáveis tenham o mesmo nome, estas são duas variáveis diferentes.

De forma similar, uma variável declarada fora do método ```converter_para_dolar``` também não poderia ser acessada dentro do método. Porém, e se quiséssemos extrair a variável ```cotacao_dolar``` para fora do método, e assim utilizássemos em outros métodos? Nesse caso, teríamos que mudar o escopo da variável ```cotacao_dolar``` para global. Em Ruby, variáveis globais começam com o símbolo ```$```. Poderíamos alterar o nosso exemplo anterior da seguinte forma:

```ruby
$cotacao_dolar = 5.61
def converter_para_dolar valor_para_converter
 valor_para_converter / $cotacao_dolar
end

puts converter_para_dolar 100
```

Perceba que tivemos que alterar tanto na definição quanto no uso da variável ```$cotacao_dolar```. No entanto, grandes poderes requerem grandes responsabilidades. Variáveis globais tornam a compreensão de código mais difícil. Ao tornar uma variável global, qualquer método na sua aplicação ganha acesso para manipular tais variáveis. Isso dificulta entendimento e depuração de código, uma vez que se faz necessário investigar *todos* os métodos que fazem uso de variáveis globais.

## Parâmetros opcionais

## Métodos sem nome

## Escopo de variáveis

O escopo é o que define onde uma variável pode ser acessada. O escopo pode ser pequeno, a nível local, ou pode ser grande, a nível global.

https://stackoverflow.com/questions/11495098/difference-between-various-variables-scopes-in-ruby

https://www.techotopia.com/index.php/Ruby_Variable_Scope

https://www.rubyguides.com/2019/03/ruby-scope-binding/




## Exercícios de fixação


- Escreva a seu próprio método que imprima na tela do usuário, similar ao ```puts```.
- Faça um programa que dado um inteiro, retorne o inverso desse inteiro. Por exemplo, o inverso do inteiro ```123``` é o inteiro ```321```. Não use variáveis para armazenar resultados intermediários.

```ruby
x = 0

def foo
    x = 10
    return x
end

bar = foo

def baz
    x = 20
    bar()
end

puts baz
```

[^1]: Como já discutimos em outros capítulos, os parênteses ```()``` são opcionais tanto na definição quanto no uso de métodos em Ruby.
