---
layout: single
author_profile: true
title: Controle de fluxo
permalink: /ruby-guide/flow
---

[Voltar ao começo do guia](/ruby-guide)

Programar é fazer com que os dados sigam um determinado caminho (podendo sofrer modificações ao longo desse caminho). O controle do fluxo se refere a ordem de como os dados irão ser executados ao longo deste caminho (que é a execução do programa).

Há diversas formas de controlar o fluxo dos dados em um programa, por exemplo:

- Sequencial: *Faça isso, depois isso, depois isso, etc*. Esta é a forma mais básica de controle de fluxo de execução. Ela se refere a realizar avaliações de expressões em sequencia, uma após a outra.
- Condicional: *Se determinada condição for verdadeira, faça isso, do contrário, faça aquilo*. Nessa forma de controle de fluxo, temos pelo menos duas alternativas de execução do nosso programa, uma das quais não deverá executada.
- Iteração: *Faça isso enquanto determinada condição for verdadeira*. Iteração se refere a execução do mesmo trecho de código múltiplas vezes, enquanto uma determinada condição for verdadeira.
- Recursão: *Peça para você mesmo fazer isso*. Recursão acontece quando uma rotinha invoca ela mesma.
- Exceção: *Caso algo dê errado, siga por esse outro caminho*. Exceção são construções que alteram o fluxo de dados na presença de um comportamento excepcional.
- Concorrente: *Faça múltiplas coisas ao mesmo tempo*. Embora as expressões não sejam *exatamente* avaliadas ao mesmo tempo, programação concorrente ajuda para deixar o computador menos ocioso.

Há ainda outras construções de linguagem como o ```goto``` (em C), que alteram o fluxo de dados. Mas esses são tópicos para outro guia 🙃.

Neste capítulo vamos aprender sobre condicionais, iterações e recursão. Mais pra frente no guia também teremos um capítulo sobre exceção.

## Condicionais

Durante a execução do programa, diferentes caminhos (ou trechos de código) podem ser percorridos (ou executados).

Uma condicional é um desvio no caminho. Condicionais necessitam de duas construções de linguagem:

- uma construção que nos ajude a implementar um desvio, e
- um conjunto de operadores de comparação (como ```>```, ```<```, ou ```==```) ou operadores lógicos (como ```&&``` ou ```||```).

A construção de condicionais é frequentemente implementada usando uma estrutura de um ```If–then(–else)```. O else está entre parenteses pois é parte opcional da estrutura. Essa estrutura pode ser melhor entendida quando organizada em blocos:

```
If (condição booleana) Then
    (consequência)
Else
    (alternativa)
End
```

A primeira linha verifica se uma determinada condição é verdadeira (por exemplo, se o usuário e senha estiverem corretos). Se o resultado dessa primeira linha for verdadeiro, a segunda linha, com a ```(consequência)``` é executada . Do contrário (```Else```), a quarta linha, com a ```(alternativa)``` é executada. Lembre-se que o ```Else``` não é obrigatório em um ```if```. Ele existe para tratar casos excepcionais (que nem sempre precisam existir). Por fim, a quinta linha encerra o procedimento.

Diferentes linguagens de programação implementam condicionais de forma ligeiramente diferente. Em Ruby condicionais seguem a seguinte estrutura sintática:

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
end
```

Em vez de executar esse código direto no ```irb```, dessa vez vamos criar um arquivo chamado ```ifs.rb``` e colar e salvar esse conteúdo dentro dele. Pra rodar esse arquivo, basta navegar pela linha de comando até onde o arquivo foi salvo e rodar o comando ```ruby ifs.rb```.

O motivo para usar um arquivo de texto no lugar de colocar o código direto no interpretador é que, nesse momento, vamos começar a fazer várias modificações no nosso programa. A medida que o código for mudando e  crescendo, facilitará a nossa vida se nós tivermos o código salvo em algum arquivo; do contrário, a cada mudança teríamos que escrever todo o codigo novamente no interpretador (chato, heim?).

Voltando ao nosso exemplo. Perceba que sempre que nós abrimos um ```if``` (ou um bloco, de maneira mais geral, como veremos mais para frente neste guia), nós também precisamos fecha-lo. Se fecha um ```if``` (ou um bloco) usando a instrução ```end```. E se não fecharmos um bloco com um ```end```? Algo como o exemplo abaixo. O que aconteceria?

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
```

Neste caso, o interpretador de Ruby não entende que o programa como válido e lança o seguinte erro: ```ifs.rb:3: syntax error, unexpected end-of-input, expecting `end'```.  Esta mensagem é a forma que o interpretador tem de nos ajudar a encontrar o erro. No caso, ele está nos dizendo é que o fim da entrada foi terminada de forma inesperada, e que se esperava uma instrução ```end```.

Poderíamos melhorar um pouco o nosso programa, fazendo com que ele nos avise quando o valor da variável seja diferente de ```10```. A instrução ```else``` é excelente para tratar casos assim. Por exemplo:

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
else
  puts "A idade não é igual 10"
end
```

Note também que embora tenhamos agora duas condicionais (um ```if``` e um ```else```) temos somente um único ```end```. Isso acontece pois o ```end``` está associado ao bloco ```if```, e não ao bloco ```else```.

Vamos continuar evoluindo o nosso programa. Em vez de apensar saber somente se um valor é igual a ```10```, queremos saber se ele é maior, menor, ou igual. Como poderíamos fazer isso? Uma possível solução seria utilizar os operadores que vimos no [último capítulo](/ruby-guide/exp), e adicionarmos um novo ```if``` para fazer as comparações necessárias. Algo como o exemplo abaixo:

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
if idade > 10
  puts "A idade é maior que 10"
else
  puts "A idade é menor que 10"
end
```

Agora é só salvar e rodar novamente o comando ```ruby ifs.rb```.

Mas, calma. Não funcionou. Ao executar, apareceu novamente a mensagem de erro: ```syntax error, unexpected end-of-input, expecting `end'```.

Isso acontece pois temos dois ```if```s no código. Como o segundo ```if``` foi declarado logo após o primeiro ```if```, o interpretador de Ruby entende que o segundo ```if``` está dentro do primeiro ```if```; ou seja, o segundo ```if``` só será executado caso a instrução ```a == 10``` seja avaliada para ```true``` (assim como acontece com o ```puts``` dentro do primeiro ```if```).

No entanto, o que queremos é que o segundo ```if``` seja executado caso a expressão dentro do primeiro ```if``` seja avaliada para ```false```; ou seja, queremos que o segundo ```if``` seja o caso contrário do primeiro ```if```.

Em Ruby, podemos usar a instrução ```elsif``` para indicar *o caso contrário*. Para isso, o ```elsif``` nunca deve existir sozinho; deve-se sempre primeiro ter um ```if``` para que exista algum caso contrário (```elsif```).

Mas, o ```else``` não seria também o caso contrário do ```if```? Qual seria a diferença de um ```elsif``` para um ```else```? A diferença de um ```elsif``` para um ```else``` é que o ```elsif``` trata de casos intermediários enquanto que o ```else``` trata de todos os demais casos.

Voltando ao nosso exemplo anterior, podemos agora corrigi-lo para usar um ```elsif```.

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
elsif idade > 10
  puts "A idade é maior que 10"
else
  puts "A idade é menor que 10"
end
```

Se quisessemos ser mais específicos, poderíamos ter vários encadeamentos de ```elsif``` dentro uma instrução ```if```.  Por exemplo:

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
elsif idade > 10
  puts "A idade é maior que 10"
elsif idade > 30
  puts "A idade é maior que 20"
else
  puts "A idade é menor que 10"
end
```

A estrutra dos ```if```s está certa, mas parece que tem algo de estranho nesse código. Vamos testar com alguns valores. rode o seu programa quatro vezes, cada uma com uma entrada diferente, por exemplo: ```1```, ```10```, ```15``` e ```35```. Testando com ```1```, ```10```, ```15```, o código imprime o que era de fato esperado. Mas quando testamos como ```35```, o código executado é aquele que está dentro da expressão ```idade > 10```. Isso faz sentido, uma vez que ```35``` é maior do que ```10```. No entanto, gostaríamos que o código dentro da expressão ```idade > 30``` fosse executado. Como poderíamos ter essa garantia?

Uma possível solução seria determinar uma faixa de valores para cada condição ```elsif```? Algo como *se idade entre x e y, faça alguam coisa*. Perceba que fizemos uso de um conector *e* na nossa expressão em Português acima. Como podemos traduzir essa expressão em Português para Ruby? Podemos usar os operadores lógicos que vimos no [há algunas capítulos](/ruby-guide/exp)! A mesma expressão em Ruby seria algo como: ```idade < 20 or idade > 30```. A versão com operadores lógicos do nosso programa seria algo como:

```ruby
idade = gets.to_i

if idade == 10
  puts "A idade é igual 10"
elsif idade > 10 && idade <= 20
  puts "A idade é maior que 10"
elsif idade > 20
  puts "A idade é maior que 20"
else
  puts "A idade é menor que 10"
end
```

Agora sim conseguimos resolver o problema anterior!

---
**IMPORTANTE**

Perceba que a medida que o programa cresce, a complexidade de entender o que acontece com o programa também cresce. Em poucas linhas de código, estamos usando cinco operadores e quatro caminhos diferentes. Raciocinar qual caminho uma determinada entrada vai percorrer necessita de um esforço cognitivo maior, mesmo embora o nosso programa tenha somente 11 linhas de código. Condicionais (e iterações como veremos mais pra frente) rapidamente adicionam complexidade no código. No entanto, é muito díficil programar sem utilizar essas construções. Toda vez que você for adicionar um ```if``` no código, tenha em mente que não é somente um ```if```, e sim um novo degrau de complexidade no código. Programa é tomar decisões.

---

### Unless

Ruby conta ainda com alguns particularidades para trabalhar com condicionais. Por exemplo, toda vez que temos uma instrução como ```if a > b ```, o ```if``` avalia se o resultado da expressão é ```true```. No entanto, há casos em que gostaríamos de saber se o resultado da expressão é ```false```. Por exemplo:

```ruby
if not idade > 18
  puts "Você não pode ter acesso a esse conteúdo"
end
```

Usamos o operador lógico ```not``` para representar a negação de uma expressão. Como vimos no capítulo anterior, ```not true # => false```. Porém, em Ruby, existe ainda a instrução ```unless```. A instrução ```unless``` é apenas um atalho para o ```if not```. Alguns consideram quem ela facilita o entendimento de uma expressão. Logo, o mesmo código escrito acima poderia ser re-escrito usando ```unless```:

```ruby
unless idade > 18
  puts "Você não pode ter acesso a esse conteúdo"
end
```

### If em uma linha

Por fim, caso você queira fazer somente uma única condição, Ruby ainda fornece outros atalhos. Por exemplo, o mesmo código acima poderia ser escrito usando um ```if``` de uma única linha:

```ruby
puts "Você não pode ter acesso a esse conteúdo" if not idade > 18
puts "Você não pode ter acesso a esse conteúdo" unless idade > 18
```

Por fim, caso você precise de um ```if```/```else``` de uma linha, você pode se apoiar no operador ternário.

```ruby
idade > 18 ? "Bem vindo!" : "Você não pode ter acesso a esse conteúdo!"
```

## Iterações

Iteração é a forma em que um program tem de repetir uma determina operação, até que uma determinada condição seja atendida.

### Interando com métodos

Como vimos no capítulo sobre tipos de dados, os tipos numéricos fornecem o método ```times```, que itera em um bloco ```int``` vezes. Em outras palavras, a expressão ```5.times``` chama o método ```times``` do objeto ```5``` da classe  ```Integer```. Apenas executar a instrução ```5.times``` não retorna nada interessante -- um estranho ```#<Enumerator: 5:times>```, que nada mais é do que outro tipo de dado, chamado ```Enumerator```. Precisamos passar um bloco para o método executar. Um exemplo de bloco seria uma instrução delimitada por chaves ```{}```, algo como: ```5.times{|i| puts "Eu sei iterar até #{i}"}```. Mesmo para aqueles que já estudaram uma linguagem de programação, esse trecho de código pode parecer confuso. Vamos então olhar o passo a passo dessa instrução no microscópio:

- Nós criamos um objeto inteiro de valor ```5```.
- Nós chamamos o método ```times``` que existe dentro da classe ```Integer```.
- Nós passamos as instruções dentro do bloco ```{}``` como parêmetro para o método ```times```.
- Agora o método ```times``` chama o bloco que passamos por parâmetro.
- Na primeira chamada ao bloco, é passado o valor ```0``` para a variável ```i``` que foi definida localmente, dentro do bloco.
- Dentro do bloco, o comando ```puts``` é executado. Como essa é a única instrução dentro do nosso bloco, após a execução o bloco retorna com o valor ```0``` para o método ```times```.
- O método times chama novamente o bloco, agora passando o valor ```1``` par aa variável ```i``` dentro do bloco.
- O passos se repetem até que seja passado o último valor para o bloco.
- Por fim, o método ```times``` retorna o inteiro inicialmente fornecido.

O método times não é o único método de tipos básicos da linguagem que fornece comportamento similar. Por exemplo, ```Range``` e ```Arrays``` contam com o método ```map```. O método ```map``` executa um bloco para cada objeto enumerável. Por exemplo, poderíamos converter um array de inteiros para sua representação binária usando o código a seguir: ```[8, 6, 7, 10, 4].map {|i| i.to_s(2)}```. Nesse exemplo, chamamos o método ```to_s(2)``` para cada elemento do array. O retorno desse método é então armazenado em um novo array. No entanto, métodos como o ```times``` e o ```map``` tem várias limitações, pois estes recem como entrada o valor do tipos de dado (por exemplo, o ```times``` recebe o valor ```5``` como entrada e o ```map``` recebe o array ```[8, 6, 7, 10, 4]```). Como poderíamos receber outros valores de entrada do usuário?

### Iterando com estruturas de repetição

Há diversas estruturas de repetição em Ruby, como o ```for```, ```while``` e o ```do/while```. No entanto, talvez a forma mais simples de se fazer uma repetição em Ruby é o método ```loop```.

#### Loop

Um ```loop``` recebe um bloco e executa o código dentro do bloco até que haja uma intevenção manual (como um control+c). Como vimos anteriormente, um bloco que pode ser executado em uma única linha pode ser delimitado por chaves ```{}```.


No entanto, o caso um bloco tenha mais de uma linha, podemos escrever usando a estrutura ```do ... end```. No caso da estrutura de repetição, podemos escrever o mesmo procedimento acima usando a estrutura de múltiplas linhas:

```ruby
loop do
  puts "Minha primeira repetição usando 'loop'."
end
```

No entanto, faz pouco sentido o nosso programa ficar imprimindo essa string indefinidamente. Pedir para um usuário do nosso programa encerra-lo manualmente também não parece uma boa opção. Outra forma mais interessante de encerrar a execução de um ```loop``` é através da instrução ```break```. O ```break``` força que a repetição se encerre.

```ruby
loop do
  puts "Minha primeira repetição usando 'loop'."
  break
end
```

Nesse exemplo conseguimos perceber que a instrução dentro do ```loop``` é executada somente uma única vez, até alcançar o ```break``` e então encerrar a execução do ```loop```. Parece que os dois exemplos usando ```loop``` são extremos. No primeiro caso, nós iteramos indefinidamente, até que o usuário manualmente encerre a operação. Já no segundo exemplo, não conseguimos iterar nem uma segunda vez. Como poderíamos fazer para ter um pouco mais de controle no nosso código, e decidir quantas vezes nós queremos iterar um trecho de código? Poderíamos usar um ```if``` pra decidir quando devemos encerrar a execução do ```loop```? Vejamos o próximo exemplo.

```ruby
i = 0
loop do
  i = i.succ
  puts "Repetição de número #{i} usando 'loop'."

  if i == 5
    puts "Vou encerrar essa repetição agora."
    break
  end
end
```

Nesse exemplo, usamos uma variável chamada ```i``` para controlar a quantidade de vezes que nosso ```loop``` deve iterar. A cada nova iteração do ```loop```, a variável ```i``` é incrementada (através do método ```succ```). A quantidade de vezes que o ```loop``` é executado é controlado pela condição ```if i == 5```.

### while

Uma outra estrutura de repetição muito similar ao ```loop``` é o ```while```. A primeira instrução de ```while``` é na realidade uma condição de verifica se o ```while``` deve ser executado. Enquanto o resultado da condição seja ```true```, o bloco é executado; caso o resultado da condição seja ```false```, o ```while``` não é mais executado. O mesmo programa do exemplo anterior poderia ser escrito usando um ```while```:


```ruby
i = 0
while i < 5
  i = i.succ
  puts "Repetição de número #{i} usando 'loop'."
end
```

O exemplo com ```while``` é mais conciso que o exemplo usando ```loop```, pois no ```while``` não foi preciso utilizar um ```if``` que testa a quantidade de vezes o laço foi executado; essa execução é feita na primeira chamada do ```while```. Como não precisamos do ```if```, também não precisamos do ```break```, pois o ```while``` não será mais executado quando o resultado da expressão ```i < 5``` for ```false```.

Além de ser mais conciso, o ```while``` também é muito utilizado quando queremos que nosso programa rode indefinidamente. Vamos voltar ao nosso exemplo do cálculode imposto do [capítulo sobre variáveis](/ruby-guide/vars). No exemplo daquele capítulo, nós calculavamos o imposto de somente um produto. Poderíamos agora avançar nesse exemplo, fazendo o cálculo para mais de um produto. Como a princípio não sabemos quantos produtos vamos calcular, usamos um ```while true``` que vai petir o procedimento de calculo indefinidamente, até o usuário nos avisar que não precisa mais calcular o imposto.

```ruby
icms = 0.18
ipi = 0.07

while true
  puts "Digite o valor do produto (ou digite 0 para sair)"

  produto = gets.to_i

  if produto == 0
    break
  end

  produto_com_imposto = produto + (produto * icms) + (produto * ipi)

  puts "O valor do produto com imposto é: #{produto_com_imposto}"
end
```


### do/while

A do/while loop works in a similar way to a while loop; one important difference is that the code within the loop gets executed one time, prior to the conditional check to see if the code should be executed. In a "do/while" loop, the conditional check is placed at the end of the loop as opposed to the beginning

<!--

There seem to be 5 kinds of loops:

loop forever
loop n timesloop
loop while/until a condition is true
loop through a range of numbers, optionally with a step
loop through each item in a collection (or each char in a string, or each node in a linked list...)


-->

## Exercícios de fixação

- Escreva um programa que receba um ano e calcule se ele é bissexto ou não.
- Escreva um convertor de moeadas que funcione para Real, Dolar e Euro. O usuário deve fornecer o valor a ser convertido, a moeda origem e a moeda destino. O programa deve retornar o valor convertido na moeda escolhida.
- Faça um programa que calcule o conceito de um aluno da UFPA. O programa deve receber quatro números de entrada (entre 0 e 10), tirar uma média desses números, e retornar apenas o conceito. Lembrando que: 9--10 -> Excelente; 7--8,9 -> Bom; 5--6,9 -> Regular; Menor que 5 -> Insuficiente.
- Faça um programa para determinar se um número é divisível por 3 ou por 5, mas não simultaneamente divisível pelos dois.
- Faça um programa que leia a data de nascimento de uma pessoa no formato DD-MMM-AAAA. Verifique se cada parte da data informada é válida (por ex, o dia 33 não é válido, assim como o dia 30 não é válido em fevereiro, bem como o mês zero não é válido, etc.). Ao final das verificações, imprima se a data é válida ou inválida.  
- O uso de recursão lhe parece natural como o uso de iteração? Explique.
