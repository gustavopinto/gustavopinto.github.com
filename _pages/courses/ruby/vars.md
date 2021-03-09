---
layout: single
author_profile: true
title: Atribuição de variáveis
permalink: /ruby-guide/vars
---
[Voltar ao começo do guia](/guide/ruby/)

O conceito de uma variável é um dos mais importantes em programação.

Variáveis são responsáveis por armazenar dados que serão utilizados ao longo da execução do programa.

Digamos que você queira criar um programa que calcule o valor de um produto após a incidência do ICMS. Sabendo que o ICMS é de 18% e produto (a ser incidido o imposto) custou R$ 1,000, poderíamos fazer o cálculo do valor final do produto da seguinte forma:

```ruby
1000 + (1000 * 0.18)
```

O valor final do nosso produto é: R$ 1.180. Tudo certo!

No entanto, e se mais pra frente poderíamos querer adicionar um novo imposto, digamos, o IPI? O percentual do IPI é diferente do ICMS, logo não podemos reaproveita-lo. Sabendo que o IPI é de 7% em cima do valor do produto (sem a incidência dos demais impostos), o nosso produto poderia ser calculado da seguinte forma:

```ruby
1000 + (1000 * 0.18) + (1000 * 0.07)
```

Funcionou de novo! Legal!

Mas, preciso dizer que embora pequeno, esse programa parece estar um pouco confuso. Veja, eu acabei de escrever essa linha, fui beber uma água e já não lembro exatamente o que são esses números. O 0.18 é do IPI ou do ICMS? O 1000 é do que mesmo? Imagina quando eu tiver que calcular o preço de outros produtos juntos com outros impostos. Isso tudo vai virar uma bagunça na minha cabeça.

Variáveis são uma excelente forma para guardar um determinado item de dado. Uma variável consiste basicamente de uma sacola que pode guardar apenas um item. Para que a gente saiba onde vamos guardar nosso item de dado, precisamos colocar um identificador na nossa sacola. O identificador é o nome da variável. No exemplo acima, poderíamos usar ```IPI``` e  ```ICMS``` como identificador. Por exemplo:

```ruby
icms = 0.18
ipi = 0.07
```

As duas instruções acima apresentam duas declarações de variáveis. De agora em diante, toda vez que mencionarmos ```icms``` ou ```ipi``` o Ruby entenderá que estamos querendo usar os *valores* que estão armazenados nessas variáveis. Outros comentários sobre essas duas linhas de código:

- Diferente de outras linguagens de programação, em Ruby não se faz necessário explicitamente definir qual o tipo da variável (por exemplo, se é inteiro ou string). Isso acontece pois a linguagem consegue inferir o tipo da variável dinamicamente, durante a execução do programa. É o que chamamos de *dynamic type checking*.
- Também diferente de outras linguagens de programação, não foi necessário encerrar cada linha com um ponto e vírgula (```;```). O ponto e vírgula, comumente utilizado para indicar o fim de uma operação, tem seu uso facultado em Ruby. Poderíamos coloca-lo ao fim de cada uma das declarações de variáveis acima, mas optamos por não fazê-lo. Como vamos ver ao longo desse livro, em Ruby há sempre mais de uma forma de se obter o mesmo resultado.

> **DICA:** Bons nome de variáveis estão relacionados ao contexto do problema, como ```IPI``` e ```ICMS```. Evite nomes genéricos, como ```var1```, ```var2``` e ```var3```. Usar bons nomes de variável também ajuda na manutenção do programa. É muito mais fácil entender o que uma variável ```ICMS``` deve armazenar do que uma variável ```var3```.

Para confirmar que o valor foi armazenado com sucesso na variável, podemos tentar imprimir o que a variável ```icms``` armazena:

```ruby
puts icms # => 0.18
```

Perfeito, era isso mesmo que estávamos aguardando! Mas, uma dúvida, onde será que o valor ```0.18``` está sendo de fato armazenado. Se você parar pra pensar, uma variável é apenas uma abstração lógica. O valor deveria ser guardado na memória do computador, certo?

Para saber onde o valor da variável foi guardado, podemos consultar um método específico pra isso.[^1]

Para saber qual é o endereço de memória em que a variável está armazenada, usaremos o método ```.object_id```.

```ruby
puts icms.object_id # => -128262517387511726
```

Na execução do seu programa, você deve ter recebido um número igualmente longo, porem diferente. Não tem problema, na verdade isso era esperado. Dificilmente conseguiríamos ter o mesmo endereço de memória :-)

Agora vamos completar o nosso programa, realizando o resto do cálculo do imposto no produto.

```ruby
icms = 0.18
ipi = 0.07
tv = 1000

tv = tv + (tv * icms) + (tv * ipi)
```

Perceba agora que além de declararmos variáveis (nas 3 primeiras linhas do nosso programa), nós estamos também usando essas variáveis (na última linha do programa). Definição e uso são as duas principais operações que podem ser realizadas com variáveis. Enquanto que na *definição* nós armazenamos o valor da variável em algum local da memória, no *uso* nós fazemos uma leitura desse valor para uso posterior. Acertou quem disse que usa-se o ```object_id``` para saber onde a variável foi armazenada.

Nesse nosso pequeno programa há também outro trecho interessante de ser discutido. A variável ```tv``` foi definida na terceira linha e foi re-definida (ou sobrescrita) na última linha. Isso quer dizer que seu valor foi alterado. Mas onde será que o novo valor foi armazenado? Vamos checar. Pra isto, basta colocar algumas instruções de ```puts``` ao longo do programa.[^2]

```ruby
icms = 0.18
ipi = 0.07
tv = 1000

puts tv.object_id # => 2001

tv = tv + (tv * icms) + (tv * ipi)

puts tv.object_id # => 332210841262751746
```

Como podemos perceber, o endereço de memória foi alterado. Isso aconteceu pois o interpretador precisou procurar outro lugar para armazenar o novo valor da variável ```tv```.

> **_PARA PENSAR_:** Poderia o interpretador utilizar o mesmo endereço de memória que estava armazenado o valor antigo de ```tv``` para armazenar o seu valor novo? Nesse caso, o interpretador sobrescreveria o valor que estava armazenado na memória. Mas e essa a variável ```tv``` estivesse sendo utilizada, digamos, por uma thread que estava bloqueada enquanto aguardava uma entrada de usuário? Isso criaria um bug no código?

Agora, vamos elaborar um pouco mais o nosso código. Hoje sabemos que o valor do ICMS varia de estado para estado. Por exemplo, a alíquota de ICMS no Pará é de 17%, enquanto que em Pernambuco é de 18%. Precisamos leva-los em consideração. Para isso, poderíamos ter outras duas variáveis: ```icms_pa``` e ```icms_pe```. Vamos também manter a nossa variável ```icms``` que poderia ser utilizada caso o estado da compra não fosse Pará ou Pernambuco.

```ruby
icms = 0.18
icms_pa = 0.17
icms_pe = icms
ipi = 0.07
tv = 1000

tv = tv + (tv * icms) + (tv * ipi)
```

Uma vez que o valor da alíquota do ICMS em Pernambuco é o mesmo que tínhamos armazenado na variável ```icms```, tomamos a decisão de apenas reaproveita-lo. Mas, calma. Onde será que o valor da variável ```icms_pe``` foi armazenado? Vamos checar:

```ruby
icms = 0.18
icms_pa = 0.17
icms_pe = icms

puts icms.object_id # => 128262517387511726
puts icms_pe.object_id # => 128262517387511726
```

Duas variáveis diferentes estão apontando para o mesmo endereço de memória. Como isso é possível? Quanto decidimos por reaproveitar o valor armazenado em ```icms``` e atribui-lo para ```icms_pe```, nós simplesmente dissemos ao interpretador de Ruby que a variável ```icms_pe``` deve *referenciar* qualquer valor que ```icms``` esteja referenciando. Agora vamos supor que o valor do ```icms``` precisou ser alterado. O que aconteceria com o valor da variável ```icms_pe```? Seria alterado também? Considere o trecho de código abaixo:

```ruby
icms = 0.18
icms_pa = 0.17
icms_pe = icms

puts icms.object_id # => 128262517387511726
puts icms_pe.object_id # => 128262517387511726

icms = 0.19

puts icms.object_id # => 125380213625994606
puts icms_pe.object_id # => 128262517387511726
```

Como podemos perceber, o endereço de memória foi alterado para a variável ```icms``` (o que era esperado), mas se manteve para a variável ```icms_pe``` (o que parece ser surpreendente). Por que isso aconteceu? Quando você re-atribui uma variável para um novo slot de memória, o *valor* original da variável não é afetado, somente o *object_id* é alterado.

<!-- https://blog.emitte.com.br/tipos-de-contribuintes-icms/ -->

## Recebendo dados do usuário

Hoje o nosso programa que calcula imposto sobre o produto está limitado a um único produto. E se nós quiséssemos calcular o imposto de outro produto? Uma vez que sabemos como funciona o cálculo, fica fácil fazer a operação: basta mudar o valor do produto que queremos calcular.

```ruby
icms = 0.18
icms_pa = 0.17
icms_pe = icms
ipi = 0.07
celular = 2000

celular = celular + (celular * icms) + (celular * ipi)
```

Mas esse nosso programa tem um problema. Ele assume que nós sabemos qual é o produto que devemos calcular antecipadamente. E se nós não soubéssemos qual o produto que precisamos calcular o imposto antecipadamente? Se somente o usuário do nosso programa soubesse? Teríamos que, de alguma forma, não deixar fixo o produto que vamos usar; precisamos dinamizar a escolha do produto. Como fazemos isso?

No primeiro capítulo do guia, nós aprendemos como podemos fazer para mostrar os dados para um usuário (através do comando ```puts```). Mas ainda não sabemos como podemos receber dados do usuário.

Uma forma simples de receber dados do usuário é através do comando ```gets``` (que significa "get string"). O uso do comando ```gets``` é simples como:

```ruby
produto = gets
puts produto
```

Excelente! Agora vamos alterar o código do nosso programa para que possamos calcular o imposto de qualquer produto.

```ruby
icms = 0.18
icms_pa = 0.17
icms_pe = icms
ipi = 0.07
produto = gets # recebo o valor do produto pelo usuário

produto = produto + (produto * icms) + (produto * ipi)

puts "O valor do produto com imposto é"
puts produto
```

Mas, calma. Parece que aconteceu algum problema aqui. Se eu passar 1000 para o comando ```gets```, o mesmo 1000 é impresso ao fim do programa. Por algum motivo o calculo do imposto não está mais sendo executado. Por que isso está acontecendo?

Esse capítulo se encerra com esse bug no código. No próximo capítulo nós vamos revisitar esse programa e resolver esse bug.

## Exercícios de fixação

- Por que o tivemos o bug no último trecho de código? Tente resolver esse bug sem passar para o próximo capítulo.
- O uso de ponto e vírgula (```;```) no final de uma declaração de variável é opcional em Ruby. Qual sua opinião a respeito?
- Descreva pelo menos um cenário em que o uso de um ponto e vírgula é obrigatório, mesmo em Ruby.
- Estude sobre passagem por valor e passagem por referência. Qual dessas estratégias é implementada em Ruby?
- Há algumas restrições para nomenclatura de variáveis em Ruby. Quais são elas?


[^1]: Se você ainda não sabe o que é um método, não se preocupe! Vamos falar sobre métodos mais pra frente. Por hora, assuma que é uma funcionalidade especial que nos apoia no desenvolvimento de software.
[^2]: O nome desta técnica é debugging.
