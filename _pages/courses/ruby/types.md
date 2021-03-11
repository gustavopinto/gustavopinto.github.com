---
layout: single
author_profile: true
title: Tipos de dados
permalink: /ruby-guide/types
---

[Voltar ao começo do guia](/guide/ruby/)

Tipos de dados (ou simplesmente tipos) são a principal forma de se expressar como dados são interpretados em uma determinada linguagem de programação. Em Ruby há vários tipos de dados. Os mais básicos são:

- Booleans
- Numbers
- Strings
- Symbols

Neste capítulo do Guia Ruby vamos aprender o básico da manipulação de dados em Ruby.

## Booleans

Booleans são tipos de dados que possuem um dos dois possíveis valores: ```true``` ou ```false```. Nenhum outro valor é permitido.

```ruby
a = true
b = false
```

## Numbers

Numbers (ou números) são cadeias de dígitos. Números que representam a forma decimal podem ter um ponto. Em Ruby há basicamente dois tipos de dados para armazenar números: ```Integer```s e ```Float```s. Para descobrir qual é o tipo do seu número, podemos fazer novamente uma chamada ao ```.class```. Por exemplo:

```ruby
34.class # => Integer
3.1415.class # => Float
```

A chamada ao código ```3.1415.class``` torna a discussão um pouco mais interessante, pois há dois pontos (```.```) definidos. O ponto que precede o ```.class``` é, como já sabemos, uma chamada ao método ```class(...)```, enquanto que o ponto no número  ```3.1415``` é apenas uma separação decimal.

Há outras formas de representar pontos flutuantes, como por exemplo:

```ruby
3.1415 # => 3.1415
-3.1415 # => -3.1415
3_1415 # => 31415 (underscore são ignorados; o resultado é um inteiro)
3e2 # => 300 (3.0 x 10e2)
3.1e2 # => 310 (3.1 x 10e2)
3.1E2 # => 310 (3.1 x 10e2)
```

Em Ruby há também vários métodos auxiliares que apoiam a manipulação de tipos de dados numéricos. Por exemplo:

### to_s

O método ```to_s``` converte um número para uma string.

```ruby
34.to_s # => "34"
3.1415.to_s # => "3.1415"
```

### ceil/floor

O método ```ceil``` faz o arredondamento para cima enquanto o método ```floor``` faz o arredondamento para baixo.

```ruby
34.1.ceil # => "35"
34.9.floor # => "34"
```
> **PERGUNTA:** Os métodos ```ceil``` e ```flor``` funcionam com inteiros? Por quê?

### next/pred

O método ```next``` retorna o próximo consecutivo inteiro enquanto o método ```pred``` retorna o predecessor imediato.

```ruby
34.next # => "35"
34.pred # => "33"
```

Além dos métodos acima (e de vários outros, rode ```1.methods``` para ter uma idéia), a linguagem Ruby também implementa alguns operadores aritméticos elementares. Por exemplo:

### adição

```ruby
5 + 5 #=> 10
```

### subtração

```ruby
5 - 5 #=> 0
```

### multiplicação

```ruby
5 * 5 #=> 25
```

### divisão

```ruby
5 / 5 #=> 1
```

### resto

```ruby
10 % 3 #=> 1 # uma vez que o resto da divisão 10/3 é igual a 1
```

### exponencial

```ruby
2 ** 3 #=> 8 # uma vez que  2 a terceira potência, ou 2 * 2 * 2, é igual a 8
```

## Strings

Strings são cadeias de caracteres. String podem ser definidas com uma ou duas aspas.

```ruby
nome = "gustavo"
nome = 'gustavo'
```

Como ruby não contém tipo de dados de caracteres (execute ```'a'.class``` no terminal e veja a saída), toda e qualquer String é instanciada via a classe String.

É possível, no entanto, manipular o conteúdo de uma String. Para receber os caracteres de uma string, faça: ```"teste".chars```. O ```.chars``` é uma chamada ao método ```char()```, que é implementado pela classe String. Similar ao comando ```put``` que vimos no [começo desse guia](/guide/ruby), os parênteses do método char também foram omitidos. Mas, calma. Seria então o ```put``` também um método? Mais sobre métodos e classes em futuras páginas desse guia.

O tamanho máximo de uma string é 2^63 - 1 (em uma instalação 64 bits; 2^31 - 1 caso contrário). Você pode testar o limite de tamanho máximo de uma string no interpretador usando o comando: ```String.new("1" * (2**32))```.

> **_NOTA: O que esse comando faz?_** Vamos quebrar o comando acima em várias pequenas partes. Indo de trás pra frente. Primeiro, nós calculamos 2 elevado a 32a potência. Isso é feito pela operação ```2**32```. Em seguida, nós multiplicamos a string "1" com o valor resultante do cálculo da potência anterior (feito pera operação ```"1" * (2**32)```). O resultado dessa operação é uma string "111111..." de tamanho 2**32. Diferente de outras linguagens, em Ruby o operador ```*``` pode ser utilizado em strings, e seu comportamento é: multiplique a ocorrência da mesma string. Para entender melhor, execute a instrução ```"oi" * 2``` ou similares no seu interpretador. Por fim, a operação ```String.new(...)``` cria um novo objeto string, com o valor resultante.

Alguns métodos comumente empregado em strings incluem, incluem:

### []

Similar a outras linguagens de programação, usa-se colchetes para acessar um determinado caracter em uma string. Por exemplo:

```ruby
"UFPA"[0] # => "U"
"UFPA"[1] # => "F"
"UFPA"[2] # => "P"
"UFPA"[3] # => "A"
"UFPA"[4] # => nil
```

No entanto, diferente de outras linguagens de programação, o operador ```[]``` é implementado como um método, de mesmo nome, dentro da classe String. Logo a mesma chamada pode ser feita de forma análoga usando:

```ruby
"UFPA".[](1) # => "F"
```

Parece estranho, não? No capítulo sobre métodos iremos descrever mais sobre esse tipo de comportamento. Por hora, basta-nos saber que o operador ```[]``` é um método. E por ser um método, pode aceitar parâmetros (no caso do exemplo de código acima, o valor ```1``` foi passado como parâmetro do método ```[]```).

O operador ```[]``` pode também receber dois parâmetros. Nesse acaso, em vez de retornar o caracter armazenado em uma determinada posição, ele retornará uma faixa de caracteres. Por exemplo:

```ruby
"UFPA"[0, 2] # => "UF"
"UFPA"[2, 3] # => "PA"

"UFPA".[](0, 2) # => "UF"
"UFPA".[](2, 3) # => "PA"
```

Em Ruby há sempre mais de uma forma de se fazer a mesma coisa. Alternativamente, poderíamos usar o método ```slice```.

```ruby
"UFPA".slice(0,2) # => "UF"
"UFPA".slice(2,3) # => "PA"
```

Por fim, poderíamos também usar *range operator*, que é o símbolo ``..`` (dois pontos consecutivos) no lugar da virgula.

```ruby
"UFPA".[](0..2) # => "UFP"
"UFPA".[](2..3) # => "PA"

"UFPA"[0..2] # => "UFP"
"UFPA"[2..3] # => "PA"

"UFPA".slice(0..2) # => "UFP"
"UFPA".slice(2..3) # => "PA"
```

Perceba que agora o comportamento foi ligeiramente diferente. O que aconteceu? E por que isso aconteceu?

### size/length

Calcula o tamanho de uma string.

```ruby
"UFPA".size # => 4
"UFPA".length # => 4
```

> **PERGUNTA:_** Por quê existem dois métodos que fazem _exatamente_ a mesma coisa?

### to_i

De forma análoga ao ```to_s```, o método ```to_i``` converte uma string para um inteiro.

```ruby
"3".to_i # => 3
"3.1415".to_i # => 3
```

Como pedimos para passar uma string que continha um número decimal para um formato de número inteiro, o arredondamento para para inteiro (sem ponto) ocorreu naturalmente. No entanto, se quiséssemos manter a precisão do número decimal, teríamos que usar o método ```to_f```.

### << (shovel)

O shovel (``<<``) é um operador (e também um método) que realiza a concatenação de strings. O operador ``<<`` tem um comportamento muito similar ao do operador ``+``, que é mais conhecido em outras linguagens de programação.

```ruby
universidade = "UFPA"
curso = "Ciência da Computação"

string = ""
string << "Estou cursando o curso de "
string << curso
string << " na "
string << universidade
```

Não custa também mencionar que a concatenação usando shovel poderia também ser feita usando o formato de chamada de método: ```string.<<(string)```.

No entanto, o operador ``+`` também é fornecido na linguagem Ruby. Como pode-se imaginar, a concatenação de strings também poderia ser implementada da seguinte forma:

```ruby
universidade = "UFPA"
curso = "Ciência da Computação"

string = ""
string += "Estou cursando o curso de "
string += curso
string += " na "
string += universidade
```
> **PERGUNTA:_** Existe alguma diferença entre usar ```+=``` e ```<<``` para concatenação de strings? Pesquise.

Um outro recurso fornecido pela linguagem Ruby para concatenação de strings é a interpolação. Interpolação de strings é a capacidade de combinar duas ou mais strings em uma só. Em Ruby isso pode ser feito através do constructo ```#{}```. Por exemplo:

```ruby
universidade = "UFPA"
curso = "Ciência da Computação"

puts "Estou cursando o curso de #{curso} na #{universidade}"
```

### upcase/downcase

Esses métodos colocam o texto de uma string para caixa alta (```upcase```) ou caixa baixa (```downcase```).

```ruby
universidade = "UFPA".downcase
curso = "Ciência da Computação".upcase

puts "Estou cursando o curso de #{curso} na #{universidade}"
```

### strip/lstrip/rstrip

O ```strip``` remove a quantidade extra de espaço em branco no começo e no final de uma string. Por exemplo:

```ruby
puts "         UFPA         ".strip
```

Os métodos auxiliares (```lstrip``` e ```rstrip```) funcionam da mesma forma, exceto que estes são específicos para retirar o excesso de caracteres em branco na esquerda e na direita da string, respectivamente.


```ruby
puts "         UFPA         ".lstrip
```

### split/join

O método ```split``` quebra uma string em um array. Para identificar o ponto de separação da string (chamado de delimitador), o método ```split``` usa por padrão um espaço em branco como separador. Por exemplo:

```ruby
curso = "Ciência da Computação"
curso.split # => ["Ciência", "da", "Computação"]
```

No entanto, o programador pode fornecer qualquer outro delimitador. Isso é feito através da passagem de um valor por parâmetro do método ```split```. Por exemplo:

```ruby
texto = "Meu primeiro carro"
texto.split "primeiro" # =>  ["Meu ", " carro"]
```

Lembrando que o uso de parênteses é opcional na chamada de métodos.


## Symbols

Um outro tipo de dados que é extremamente importante em Ruby (e não tão frequente encontrado em outras linguagens) é o ```:symbol```, isto é, um identificador que é precedido por um dois pontos (```:```). Símbolos são usados para identificar um recurso específico, seja um método, uma variável, uma chave de um hash, etc.

Símbolos são de certa forma comparáveis a string, o que faz com que programadores novatos em Ruby se confundam em como usa-los. Símbolos tem duas importantes características:

- Símbolos tem sempre o mesmo valor, e
- Símbolos tem sempre o mesmo ```object_id```

```ruby
puts :a

puts "a".object_id  
puts "a".object_id  

puts :a.object_id  
puts :a.object_id  
```

Como símbolos são únicos e não podem ser alterados durante a execução do programa. Seu maior benefício é deixar o código com uma nomenclatura consistente.

Há uma regra simples para saber quando usar uma string ou um símbolo:

- Se o conteúdo (a sequência de caracteres) for mais importante, use uma string.
- Se a identidade do objeto for mais importante, use um símbolo.

Basicamente, um símbolo é utilizado quando você quer referenciar alguma coisa como uma string, mas não tem a intenção de altera-lo ou imprimi-lo.

É possível, no entanto, transformar uma string em um símbolo (e vice-versa).

```ruby
"ufpa".to_sym # => :ufpa
:ufpa.to_s # => "ufpa"
```

Ainda está confuso? Nos próximos capítulos vamos trazer exemplos mais concretos da utilidade de símbolos no dia a dia do desenvolvedor Rubista.

## Exercícios de fixação

- O tipo de dados String contem incríveis 183 métodos (rode ```"".methods.count``` e se surpreenda). Veja se você reconhece algum método familiar? E quais aqueles que você não conheceu? Pesquise e entenda mais sobre eles.

- Método ou operador? Percebemos que alguns operadores são implementados como métodos. Pesquise como foi feita a implementação dos seguintes operadores:
  - Inteiros: +, /, **
  - String: +, *, []

- Percebemos que os operadores podem também ser executados via chamada de método tradicional. Faça a implementação do exemplo do operador shovel usando chamada de métodos. Depois, compare com a solução apresentada aqui. Na sua opinião, qual das versões é mais legível e por quê?

- Além dos tipos básicos mencionados, há também a inexistência de um tipo, o chamado ```nil```. Usamos ```nil``` quando, por exemplo, queremos inicializar uma variável mas não sabemos, no momento da instanciação, qual será seu valor. Usamos ```nil``` nesse caso. No entanto, o uso do ```nil``` é percebidamente uma má prática de programação. Você saberia explicar o por quê?

- Talvez não seja novidade pra você que a expressão ```0.2 + 0.1 == 0.3``` é avaliado para ```false```. Mas, por que isso acontece? Como você poderia criar programas que façam uso de casas decimais e que não exibem esse comportamento?
