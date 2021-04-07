---
layout: single
author_profile: true
title: Atribuição de variáveis
permalink: /ruby-guide/funcs
---

[Voltar ao começo do guia](/ruby-guide/)

Até o momento, os programas que criamos foram escritos de forma a resolver um problema uma única vez. Mas e se quisermos resolver o mesmo problema duas vezes? Três vezes? Temos que escrever novamente o mesmo código?

Considere o programa que faz conversão de valores entre moedas do [capítulo anterior](/ruby-guide/flow):

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

Perceba que nesse exemplo, o valor da cotação das moedas estão fixos no nosso código, mas nós sabemos que a cotação é flutuante, muda o tempo todo! E se quiséssemos usar o serviço do Google para


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

Por fim, perceba também que podemos confirmar a mudança do escopo usando novamente o comando ```defined?```, como abaixo:


```ruby
$cotacao_dolar = 5.61
defined? $cotacao_dolar  => "global-variable"
```

Há ainda outros escopos diferentes para variáveis em Ruby, mas vamos deixar pra comentar sobre eles mais pra frente neste guia.

## Tipos de parâmetros

Em Ruby há diversas opções de parâmetros para utilizar na definição de métodos. Além do parâmetro obrigatório, guia vamos discutir duas outras formas: os parâmetros *default* e os parâmetros opcionais.

### Parâmetros *default*

No exemplo que trabalhamos acima, o nosso método ```converter_para_dolar``` recebia um único parâmetro, o ```valor_para_converter```. Toda vez que chamamos o método ```converter_para_dolar```, precisamos obrigatoriamente passar um valor para o parâmetro; do contrário, recebemos um erro com a seguinte mensagem ```ArgumentError (wrong number of arguments (given 0, expected 1))```. Isso acontece pois o parâmetro é *obrigatório*.

No entanto, em Ruby é possível fornecer um valor padrão para um parâmetro (do Inglês, *default parameters*), ou seja, caso um valor não seja passado para o método, a variável definida no parâmetro receberá um valor previamente definido. Podemos alterar nosso ```converter_para_dolar``` para receber um valor padrão da seguinte forma:

```ruby
def converter_para_dolar valor_para_converter, cotacao_dolar=5.61
 valor_para_converter / cotacao_dolar
end

puts converter_para_dolar 100
```

Nesse exemplo, a variável ```cotacao_dolar``` passou a ser um parâmetro *default* do método ```converter_para_dolar```, e o usuário deste método ganhou a opcionalidade de passar esse parâmetro ou não (veja que na chamada do método passamos somente o valor a ser convertido).

Como o valor padrão só será atribuído caso o usuário não passe o valor desejado, nada impede que informe outro valor como parâmetro. Neste caso, o valor que o usuário informa será utilizado, enquanto que o valor *default* não será utilizado. Experimente fazendo a seguinte chamada de método ```converter_para_dolar 100, 5.8```.

Por fim, perceba também que no método ```converter_para_dolar``` há ainda um parâmetro obrigatório. Se executarmos novamente o método ```converter_para_dolar``` sem passar nenhum parâmetro, temos a seguinte mensagem de erro: ```ArgumentError (wrong number of arguments (given 0, expected 1..2))```. Diferente da mensagem de erro que tivemos anteriormente, que sabíamos exatamente quantos valores eram esperados, agora o Ruby nos avisa que é esperado um ```Range``` que varia de 1 até 2.


### Parâmetros opcionais

Um outro recurso interessante em métodos são os parâmetros opcionais. Diferente dos parâmetros *default*, em que um valor vai ser passado para uma variável, independentemente se o usuário fornecer esse valor ou não, nos parâmetros opcionais, podemos contar ou não com os parâmetros para execução do nosso método. Ou seja, o método não sabe quantos parâmetros serão providos a cada chamada de método. Declaramos que um parâmetro é opcional através do operador splat ```*``` utilizado *antes* do nome do parâmetro.

Para entender um pouco mais, consider o caso em que nós temos várias cotações de dólar, mas nem todas estão disponíveis ao mesmo instante. Logo, podemos fazer a nossa conversão para dólar somente com as cotações que estão disponíveis em um determinado momento. Vejamos o exemplo abaixo:

```ruby
def converter_para_dolar valor_para_converter, *cotacoes_dolar
  for cotacao in cotacoes_dolar do
    puts valor_para_converter / cotacao
  end
end

puts converter_para_dolar 100, 5.61, 5.6, 5.65, 5.58
```

Algumas observações sobre o uso do parâmetro opcional:

- Usamos o ```*``` somente na declaração da variável, e não no seu uso (diferente do ```$``` que usamos para declarar variáveis globais, que precisamos utilizar tanto na declaração quanto no uso).

- O nosso método ```converter_para_dolar``` recebeu cinco parâmetros, mas poderia ter recebido três, oito, dez, ...,  ou  somente um. Ou seja, poderíamos passar somente o parâmetro obrigatório e não passar nenhum parâmetro opcional. Caso nenhum parâmetro opcional fosse fornecido, o ```for``` não seria executado. Faz sentido usar parâmetros opcionais nesse caso, então?

- Quando passamos um ou mais valores para um parâmetro opcional, esses valores são armazenados em um ```Array```. Logo, a chamada de método ```converter_para_dolar 100, 5.61, 5.6, 5.65, 5.58``` é equivalente a ```converter_para_dolar 100, [5.61, 5.6, 5.65, 5.58]```.

### Podemos combinar parâmetros obrigatórios, default e opcionais?

Sim! Podemos usar todos os três tipos de parâmetros na definição da assinatura de um único método. Mas note que, assim como os operadores tem diferentes graus de precedência sobre outros operadores (por exemplo, o operador ```*``` é avaliado antes do operador ```+```).

Caso seja de interesse utilizar os três tipos de parâmetros no mesmo método, uma boa prática é utilizar primeiro os parâmetros obrigatório, depois os *default* e por fim os opcionais. Algo como:

```ruby
def converter_para_dolar valor_para_converter, cotacoes_dolar=5.61, *outras_cotacoes
  puts "Eu quero converter o valor #{valor_para_converter} usando a cotação #{cotacoes_dolar} e, se possível, usando também as cotações #{outras_cotacoes}"
end

converter_para_dolar 100, 5.80, 5.66, 5.26, 5.63, 5.72
converter_para_dolar 100, 5.80, 5.66
converter_para_dolar 100, 5.80
```

## Tipos de retorno

Como já discutimos no começo deste capítulo, todo método em Ruby retorna algum valor, mesmo que não exista um ```return``` explícito no código. Neste caso, o método retorna a última linha. No entanto, caso mais de uma expressão seja fornecida, um ```Array``` agrupando os valores das expressões é retornado. Poderíamos observar esse comportamento se colocássemos um ```return``` com mais de um valor, separado por vírgulas:

```ruby
def converter_para_dolar valor_para_converter, cotacoes_dolar=5.61, *outras_cotacoes
  # ...

  return valor_para_converter, valor_convertido
end
```

Por fim, e embora não recomendado, podemos também retornar ```nil```, caso a últimas instrução do método senha somente um ```return``` sem valor. Por exemplo:

```ruby
def converter_para_dolar valor_para_converter, cotacoes_dolar=5.61, *outras_cotacoes
  # ...

  return
end
```


## Métodos ou blocos?

Como já vimos em outros capítulos, bloco são uma forma de agrupar expressões. Embora blocos sejam comumente delimitados entre um ```do..end```, blocos de uma única linha podem ser delimitados por chaves ```{}```. Blocos, assim como métodos, podem conter seus próprios argumentos. Diferente de métodos, blocos não tem nome (e também não são associados a nenhum objeto). Os exercícios que fizemos usando ```loop``` e ```1.times``` no capítulo anterior foram usando blocos.

Mas qual a relação de um método e um bloco? Considere o trecho de código abaixo.

```ruby
def bloco_metodo
  puts "Estou dentro de um método"
end

bloco_metodo { puts "Um bloco foi chamado"}
```

Nas três primeiras linhas do exemplo acima nós declaramos o método ```bloco_metodo``` enquanto que na última linha nós chamamos esse método passando um bloco para ele.

Sem executar esse programa, você saberia dizer qual é a saída?

A saída é a ```String``` contendo ```Estou dentro de um método```. Isso acontece pois o bloco não foi invocado. Para invocar um bloco, podemos fazer uso da palavra reservada ```yield```.  Por exemplo:

```ruby
def bloco_metodo
  puts "Estou dentro de um método"
  yield
  puts "Estou de volta para o método"
end

bloco_metodo { puts "Um bloco foi chamado"}
```

A palavra reservada ```yield``` vai procurar e invocar o bloco no método que foi invocado. Ou seja, o ```yield``` vai até a chamada do método e executa o bloco e depois retorna ao método para terminar sua execução. Perceba que não estamos passando o bloco por parâmetro do método e, sim, estamos chamando o bloco de dentro do método. Não passamos o bloco como parâmetro pois, como dissemos no começo desta seção, um bloco não é um objeto.

É possível também passar parâmetros para dentro de um bloco. Parâmetros de blocos são definidos de forma similar aos parâmetros de métodos. No capítulo anterior usamos o seguinte trecho de código: ```5.times {|i| puts "Eu sei iterar até #{i}"}```, onde ```i``` é uma variável passada por parâmetro para dentro de um bloco, através do método ```times```. Como isso é possível?

Podemos passar parâmetros para o bloco também usando o ```yield```. Por exemplo:

```ruby
def bloco_metodo
  puts "Estou dentro de um método"
  yield 1
  puts "Estou de volta para o método"
  yield
end

bloco_metodo { |i| puts "Imprimindo o parâmetro #{i}"}
```

No exemplo acima, o ```yield``` é chamado duas vezes, cada uma passando uma parâmetro diferente.

Perceba que o uso do bloco junto a chamada de método é opcional. Mas o que aconteceria se nenhum bloco fosse passado? Se fizermos somente a chamada do método ```bloco_metodo```, sem passar o bloco, recebemos um erro do tipo ```LocalJumpError (no block given (yield))```. Isso acontece pois o ```yield```, de fato, aguarda que um bloco seja passado.

Logo, nosso programa precisa estar preparado para lidar com situações em que um bloco não seja passado. Para isso, podemos usar o método ```block_given?```, que verifica que se um bloco foi passado ou não. Assim evitamos erros caso um bloco não seja passado. Por exemplo:

```ruby
def bloco_metodo
  puts "Estou dentro de um método"
  yield if block_given?
  puts "Estou de volta para o método"
end

bloco_metodo { puts "Um bloco foi chamado"}
```

Até o momento, estamos fazendo chamadas *implícitas* de um bloco, ou seja, estamos chamando um bloco sem que este seja passado por parâmetro para o método. No entanto, podemos também fazer chamadas *explicitas* ao bloco. Chamadas explícitas tratam o bloco como um parâmetro do método. Para diferenciar o bloco dos demais parâmetros, se utiliza o símbolo ```&``` antes o nome da variável que armazenará o bloco. Por exemplo:

```ruby
def bloco_metodo &bloco
  puts "Estou dentro de um método"
  bloco.call
  puts "Estou de volta para o método"
end

bloco_metodo { puts "Um bloco foi chamado"}
```

Perceba que precisamos agora fazer uso do método ```call```, que é responsável por executar o trecho de código dentro do bloco. No entanto, quando um bloco é chamado explicitamente, o bloco é convertido para um objeto do tipo ```Proc```, que possibilita que este seja armazenado em uma variável e posteriormente executado.

<!--
## Escopo de variáveis

O escopo é o que define onde uma variável pode ser acessada. O escopo pode ser pequeno, a nível local, ou pode ser grande, a nível global.

https://stackoverflow.com/questions/11495098/difference-between-various-variables-scopes-in-ruby

https://www.techotopia.com/index.php/Ruby_Variable_Scope

https://www.rubyguides.com/2019/03/ruby-scope-binding/

-->


## Exercícios de fixação


<!--
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
-->

- Escreva a seu próprio método que imprima na tela do usuário, similar ao ```puts```.


- Além de métodos e blocos, em Ruby há também uma estrutura chamada ```Proc```. Estude e entenda as diferenças entre estas três estruturas.

- Dissemos ao fim do capítulo que blocos não são objetos, logo não podem ser passados por parâmetros para um método. No entanto, o código abaixo é funcional. Explique o por que.

```ruby
def bloco_como_parametro(&bloco)
  bloco.call
end

bloco_como_parametro { puts "Não é que funciona?!" }
```

- Crie um programa que execute o comando ```times (5) { .. }``` com comportamento similar ao ```5.times { .. }```.

- Métodos tem parâmetros opcionais que são convertidos para um ```Array```. Esses parâmetros são identificados pelo operador splat ```*``` que antecede o nome do parâmetro. No entanto, há também outro tipo de parâmetro opcional que é definido com dois ```**```.  Que tipo de parâmetro é esse?

- Um outro tipo de parâmetro é com um operador *ampersand* (```&```). Em que caso um parâmetro com esse operador deve ser utilizado?

- Pesquise se seria possível ter outra ordem de precedência (diferente de obrigatórios, *default* e opcionais) para os tipos de parâmetros de um método.


[^1]: Como já discutimos em outros capítulos, os parênteses ```()``` são opcionais tanto na definição quanto no uso de métodos em Ruby.
