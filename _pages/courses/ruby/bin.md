---
layout: single
author_profile: true
title: Binário
permalink: /ruby-guide/bin
---

[Voltar ao começo do guia](/ruby-guide/)

Computadores não entendem inteiros, strings, booleanos, ou objetos. Toda representação de tipos que vimos até aqui não são inteligíveis, do ponto de vista do computador.

Em algum momento, estas representações de mais alto nível precisam ser convertidas para uma representação de mais baixo nível; a única que o computador possa entender: o binário.

<!-- Programas e dados compartilham o mesmo espaço em uma fita e o computador ler um bit de cada vez nessa fita. Mas o que é um bit? -->

## Bits e bytes

O *bit* (do inglês, *binary digit*) é a menor forma de se representar dados em um computador. O bit pode ter somente um dos seguintes valores: 0 ou 1.

No entanto, como um bit tem somente duas representações, ele é muito limitante. Só conseguimos representar dois número com um bit. Como fazemos para representar todos os outros números?

### Inteiros em binário

Podemos ir agrupando bits de forma a representar outros números. Com dois bits, já poderíamos representar o número dois (```10```) e o número três (```11```). Vamos usar as operações abaixo para entender como isso seria possível.

```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10
10 + 1 = 11
```

A expressão ```1 + 1``` em binário é avaliada para ```10``` pois precisamos de dois bits para armazenar o número ```2```. Com três bits conseguimos representar o número quatro (```100```), cinco (```101```), seis (```110```) e sete (```111```). Para representar o número oito precisaríamos de quatro bits.

A medida que vamos acrescentando mais bits, conseguimos representar um quantidade maior de números. Com oito bits já é possível armazenar 256 dígitos (2^8 = 256).

<!--Mas, ainda assim, estamos muito longe de armazenar um inteiro muito grande, como a massa da terra.  suficiente para representar os dígitos de 0 até 9, todas as letras do alfabeto, e mais alguns caracteres especiais, como ```"!"```, ```"@"```, ou ```"#"```. -->

Com tantos bits pra armazenar, facilitaria  nossa vida se tivéssemos representações de mais alto nível pra armazena-los. A primeira representação mais alto nível de um bit é o *byte*, um grupo de 8 bits. Embora pouco conhecido, um há também um grupo de 4 bits, chamado *nibble*. Os mesmos dígitos de 1 a 4 do exemplo acima poderiam ser representados como abaixo:

```
0000 0000
0000 0001
0000 0010
0000 0011
```

Mas esses números são todos positivos. Como fazemos pra representar números negativos?

Como sabemos, inteiros podem ser *signed* (com sinal) ou *unsigned*  (sem sinal). Inteiros de oito bytes sem sinal podem ser representados entre 0 a 256, enquanto que inteiros de oito bytes com sinal podem representar os números de -127 a 128 (zero incluso). Nesse caso, representamos o sinal pelo bit mais significativo, que geralmente é representado pelo primeiro dos oito bits. Se o primeiro bit for 0, o número é positivo; se for 1, o número é negativo. Por exemplo, o número 15, em binário, é representado como ```1000 1111```.

### Strings em Binário

Nesse momento torna-se fácil perceber que precisamos de muitos bits para armazenar dados ligeiramente mais complexos. Uma string como ```"UFPA"``` precisa de 32 bits para ser representada. Em Ruby, cada caracter de uma string precisa de 8 bits (ou um byte) para ser armazenado. Como a string ```"UFPA"``` tem quatro caracteres, precisamos de quatro bytes (ou 32 bits).

Logo, poderíamos generalizar que uma string de tamanho *n* ocupa *n* bytes?

Vamos responder com um exercício: quantos bits precisamos pra armazenar a string ```"Olá mundo"```? A string tem 9 caracteres, mas precisamos de 10 (!) bytes para representa-la. Rode a instrução ```"Olá mundo".bytesize``` para checar você mesmo (o método ```bytesize``` conta a quantidade de bytes de uma string). Como pode?

Isso acontece pois caracteres como ```"a"```, ```"b"```, ou ```"c"``` necessitam de apenas um byte para serem representados (```"a".bytesize # => 1```), enquanto que caracteres especiais como o ```"ç"``` do Português e o ```"¿"``` do Espanhol precisaram de dois bytes para serem representados (```"ç".bytesize # => 2```).

Agora sabemos que um charactere precisa de um byte para ser representado e caracteres especiais precisam de dois (ou mais) bytes. Mas como sabemos o binário dessa string? Podemos usar o método ```"a".bytes```, que no caso da string ```"a"``` retorna ```[97]```, ou seja, um array de um único elemento, o ```97```. Mas o que seria esse número 97? Vamos testar com outros caracteres.

```ruby
"a".bytes   # => [97]
"b".bytes   # => [98]
"c".bytes   # => [99]
"d".bytes   # => [100]

"A".bytes   # => [65]
"B".bytes   # => [66]
"C".bytes   # => [67]
"D".bytes   # => [68]
```

Cada caracter é representado por um código de um byte (ou oito bits) diferente e, aparentemente, estes códigos seguem uma determinada ordem. Os caracteres também são diferenciados entre maiúsculos e minúsculos. Curiosamente, os caracteres maiúsculos são representados com códigos menores que os caracteres minúsculos. Cada caracter retorna um código diferente. Por exemplo, ```"a"``` retorna ```[97]``` enquanto que ```"b"``` retorna ```[98]```. Por hora, vamos abstrair os colchetes (```[]```) e focar nos códigos.

Mas que códigos são esses?

Estes códigos advêm de uma tabela de conversão, no caso, a famosa [tabela ASCII](https://en.wikipedia.org/wiki/ASCII) (abreviação de *American Standard Code for Information Interchange*). A tabela ASCII foi inicialmente desenvolvida para trabalhar com 7 bits (ou 2^7 = 128). Embora suficiente para época (década de 70), essa tabela deixava de fora vários caracteres especiais, como o ```"ç"``` e o ```"¿"```,que já mencionamos anteriormente.

---
**Curiosidade**

Na época da sua criação, 7 bits eram suficiente para armazenar muitos dos principais caracteres necessários da língua inglesa com folga (mais exatamente, 1 bit de folga). Esse 1 bit de folga fez com que localidades que não tinham todo seu alfabeto contemplado pela tabela ASCII (Português e o Espanho, já mencionados, mas também o Chinês, Grego, Árabe, dentre tantos outros) criassem seu próprio mapa de caracteres. A consequência? Esse 1 bit extra resultou em dezenas de variações de mapas de código. Não é necessário mencionar que essa diversidade de mapas de código criou uma verdadeira dor de cabeça para internacionalização de textos que necessitam de mais de uma tabela de conversão. Uma das primeiras tentativas de organizar essa bagunça foi o Unicode, tanto que hoje em dia, utilizamos unicode para representar textos humanamente legíveis. Mas isso é assunto pra outro guia.

---

Os códigos de retorno do método ```bytes``` são, na realidade, a representação decimal de um determinado binário. Por exemplo, o código ```97``` é a representação decimal para o binário ```01100001```, enquanto o código ```98``` é a representação decimal para o binário ```01100010```, e assim por diante.

Esse processo de tradução caracter -> código -> binário é chamado de *encoding*. Há diversos tipos de *encoding*; um caracter com um byte em um determinado *encoding* pode ter dois ou mais em outro. Encodings de um byte por caracter são extremamente limitados (e, como vimos na caixa acima, também causam boa dor de cabeça), mas encodings de dois bytes (16 bits) já são mais plausiveis, pois podem representar 2^16 (65.536) caracteres. Em Unicode, temos UTF-8 (que representam 8 bits por caracter) e o UTF-16 (que representam 16 bits por caracter). Embora utilizar mais bytes por caracter resolva o problema da representação de caracteres de localidades específicas (pense nos símbolos Japoneses), eles aumentam a chance de desperdício de espaço em arquivos de texto.

Até agora estamos fazendo tradução de caracter por caracter, mas a tradução de textos mais longos seguem o mesmo raciocínio. A expressão ```"UFPA".bytes``` é avaliada para ```[85, 70, 80, 65]```, que nada mais é do que um array em que cada posição é a representação decimal de cada caracter da string ```"UFPA"```.

## Por que 0.1 + 0.2 != 0.3?

Entendemos como representar números inteiros e strings em binário, mas como poderíamos representar números com ponto flutuante?

Caso estejamos trabalhando com moeda (salário, impostos, valores de porudo), em que o número de casa decimais é pequeno e conhecido, basta transformar o número fracionado para inteiro (multiplicando por ```100```) e, após a operação, transformar de volta para a fração (dividindo por ```100```). A principal vantagem dessa abordagem é a rapidez, pois o hardware tem circuitos para lidar com números inteiros. No entanto, essa abordagem tem pouca precisão. Mas poucas pessoas se queixam de 0.001 faltando no troco. Esta baixa precisão se torna um problema, por exemplo, em aplicações matemáticas que fazem uso de números irracionais como o PI (3.141592...).

O PI é diferente de outros número irracionais, como o resultado da divisão ```1/3```, o qual se conhece os decimais, mas não se sabe quantos são. No PI não se conhece (todos) os decimais, e estes também não seguem nenhum padrão. Também não faz sentido armazenar o número PI na memória. Simplesmente não temos memória pra isso. O que poderíamos fazer então?

A saída foi flexibilizar; ao invés de armazenar o número PI completo, o que é inviável, podemos armazenar uma versão menor, *aproximada*.

O tipo de dado ```Float``` é a implementação dessa aproximação. Considerando um ```Float``` de 64 bits, o primeiro bit é reservado para o sinal (assim como nos números inteiros). Os próximos 11 bits representam o número do expoente, enquanto os 52 restantes representam a mantissa, que é a notação científica na base dois.

Para representar um número como ```12.000``` na base dez, poderíamos usar a notação científica ```1.2 * 10^4```. O número ```1.2``` é a mantissa e o número ```4``` é o expoente na base dez.

Para representar o mesmo número como ```Float```, teríamos: o primeiro bit para o sinal (positivo ou negativo) * 2^expoente (número armazenados nos próximos 11 bits) * mantissa (numero armazenados nos últimos 53 bits). O número inteiro máximo que pode ser armazenado na mantissa é ```2^53``` (que pode ser checado com ```Float::MAX_EXP```).

O problema é que não conseguimos representar um número de base dez da mesma forma na base dois.

A primeira vista isso pode parecer um pouco estranho, pois o comando ```puts 0.1``` retorna```0.1```. No entanto, se usarmos o comando ```sprintf("%0.50f", 0.1)``` temos a seguinte saída: ```"0.10000000000000000555111512312578270211815834045410"```. O comando ```sprintf``` retorna uma string formatada, no caso, um ```Float``` (representado pelo ```f```) de 50 caracteres após o ponto (representado pelo ```0.50```).

Voltando a saída do comando ```sprintf```, essa *sujeira* que aparece após sete zeros é exatamente o nosso problema de aproximação. Logo, enquanto que a expressão ```0.1 + 0.2``` é avaliado para ```0.30000000000000004440892098500626161694526672363281```, somente a expressão ```0.3``` é representado como ```0.29999999999999998889776975374843459576368331909180```. Mais objetivamente: os decimais da expressão ```0.1 + 0.2``` são individualmente convertidos para base dois *antes* da operação de soma, enquanto que ```0.3``` é convertido somente uma vez.

Em resumo: abordagens de arredondamento se fazem necessárias uma vez que temos uma limitação de espaço de 64 bits, embora números irracionais precisem de muito mais.

## Exercícios de fixação

- Qual sistema de *encoding* o seu sistema operacional utiliza? Qual a capacidade de representação desse *encoding*?

- Quantos bytes são necessários para armazenar um caracter em um nintendinho?

- Estude sobre como funciona algorimos de ordenação de palavras em Chinês. Se preciso, estude primeiro como fazer ordenação de caracteres em Português.

- Explique por que a expressão ```"A" > "a"``` é avaliada para ```false```.

- Por qual razão algumas linguagens de programação fornecem diveros tipos inteiros primitivos, como byte, short, int, ou long?

- Em Ruby não existe tipos numéricos específicos porém de tamanho variável. Por que isso acontece?

- Faça um programa em C que calcule o produtório um array com 2^16 elementos e retorne o tempo da operação. Faça implementações com elementos do tipo byte, short, int e long.

- Descreva o passo a passo da subtração binária da expressão ```15 - 5```. Pesquise sobre "Two's complement".

- Crie um programa para fazer conversão de um número integer qualquer para sua forma binária em Ruby. Não use o método ```to_s```.
