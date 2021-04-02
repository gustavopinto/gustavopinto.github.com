---
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


## Funções

Funções são blocos de código que englobam um determinado comportamento de forma que este seja reutilizado em outro local, sem necessidade de duplicar código. Código duplicado, na realidade, é um dos grandes problemas do desenvolvimento de software moderno. Funções com escopo bem definido são são excelentes para evitar código duplicado. Ao longo desse guia nós já utilizamos diversas funções como ```puts```, ```to_s```, ```gets```, como muitas outras. Imagina se nós precisássemos escrever código para imprimir texto na tela? Ou converter uma variável para string, ou para receber dados do usuário? Que bom que já existem essas funções! Nós apenas reutilizamo-as. Reuso é um termo chave em programação em geral e, em particular, quando falamos de funções. Como reveremos nesse capítulo, podemos resolver problemas mais complexos, compondo funções menores, bem definidas.

Para declarar uma função em ruby, devemos seguir a seguinte estrutura:

```ruby
def nome_da_funcao (argumentos)
  return algum_valor
end
```

Há alguns conceitos-chave aqui. Primeiro, usamos a palavra reservada ```def``` para definir o início de uma função. De forma similar, a palavra reserva ```end``` define o fim de uma função.w Após nomear a função (no caso do nosso exemplo, usamos o nome ```nome_da_funcao```), temos a opção de passar argumentos para a função. Opção pois podemos criar funções sem argumentos. Argumentos são variáveis que devem ser manipuladas dentro de uma função. Mais concretamente, a função ```puts``` recebe como argumento uma ```String``` que será impressa na tela (que são passadas por parênteses ```()```[^1]). No entanto, a função ```gets``` não recebe nenhum argumento (não passamos nada por parênteses ```()``` pra essa função).

O nome da função junto com seus argumentos são também conhecidos como a assinatura da função. A assinatura da função é utilizada em vários momentos pela linguagem, como por exemplo para resolução de nomes. Uma vez que diferentes funções podem ter o mesmo nome (lembra que ```+``` é um método que existe tanto em ```Integer```s e ```String```s?), a linguagem de programação precisa saber exatamente qual função deve ser executada.

Um outro conceito importante é o escopo da função. O escopo é o contexto que delimita quais valores e expressões que são criados dentro de uma função (entre um ```def``` e um ```end```). Trechos de código que são definidos dentro do contexto de uma função só são visíveis e executáveis dentro da função; ou seja, estes não existem fora da função. Vamos observar isso no nosso programa abaixo:

 ```ruby
def converter_para_dolar (valor_para_converter)
 cotacao_dolar = 5.61

 valor_convertido = valor_para_converter / cotacao_dolar

 return valor_convertido
end

puts converter_para_dolar 100

puts valor_convertido
```

Ao executar esse programa, é impresso na tela o valor ```17.825311942959``` que é o valor armazenado na variável ```valor_convertido``` e após recebemos um ```NameError (undefined local variable or method `valor_convertido' for main:Object)```.  Isso acontece pois a variável ```valor_convertido``` foi definida dentro da função ```converter_para_dolar```, logo ela não existe fora desta função. No entanto, variáveis que definidas antes de uma função podem ser utilizadas dentro de uma função. Por exemplo:


```ruby
cotacao_dolar = 5.61

def converter_para_dolar (valor_para_converter)
  valor_convertido = valor_para_converter / cotacao_dolar
  return valor_convertido
end

puts converter_para_dolar 100
```

A variável ```cotacao_dolar``` é visível dentro da função ```converter_para_dolar``` pois o escopo da variável é global, ou seja, a variável ```cotacao_dolar``` pode ser acessada de qualquer lugar do nosso programa. No entanto, variáveis definidas dentro da função só existem no escopo da função.

Por fim, antes de encerrar a função com um ```end```, podemos no entanto retornar um valor, através da palavra reservada ```return```. O ```return``` deve obrigatoriamente ser a última instrução de uma função. Caso exista alguma instrução após um ```return```, esta instrução não é executada. Vejamos no exemplo a seguir:

```ruby
def converter_para_dolar (valor_para_converter)
 cotacao_dolar = 5.61

 valor_convertido = valor_para_converter / cotacao_dolar

 return valor_convertido
 puts "O valor convertido é " + valor_convertido
end

puts converter_para_dolar(100)
```

Nesse caso, a função ```puts``` não é executada pois foi colocada após o ```return```. Como já vimos em outros locais nesse guia, Ruby é uma linguagem que fornece vários açúcares sintátios aos desenvolvedores. A opcionalidade dos parênteses é um açúcar sintático conhecido. Um outro exemplo de açúcar sintático é a opcionalidade do ```return``` ao fim de uma função. Neste caso, a última instrução é imediatamente retornada. Vejamos no exemplo a seguir:

```ruby
def converter_para_dolar valor_para_converter
 cotacao_dolar = 5.61

 valor_para_converter / cotacao_dolar
end

puts converter_para_dolar 100
```

No caso do exemplo acima, a última instrução é a expressão ```valor_para_converter / cotacao_dolar```. O ```return``` implicito avaliará essa expressão e retornará seu resultado. Sem os parênteses ```()``` (tanto na definição quanto no uso da função) e a ausência de um return deixaram o código mais simples, mais conciso.




## Funções sem nome

### Funções ou métodos? Qual a diferença?



## Escopo de variáveis

O escopo é o que define onde uma variável pode ser acessada. O escopo pode ser pequeno, a nível local, ou pode ser grande, a nível global.

https://stackoverflow.com/questions/11495098/difference-between-various-variables-scopes-in-ruby

https://www.techotopia.com/index.php/Ruby_Variable_Scope

https://www.rubyguides.com/2019/03/ruby-scope-binding/



- Escreva a sua própria função que escreva código na tela do usuário, similar ao ```puts```.


[^1]: Como já discutimos em outros capítulos, os parênteses ```()``` são opcionais tanto na definição quanto no uso de funções em Ruby.
