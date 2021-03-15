---
layout: single
author_profile: true
title: Binário
permalink: /ruby-guide/bin
---

Computadores não entendem inteiros, strings, booleanos, ou objetos. Logo, toda representação de tipos que vimos até aqui não são inteligíveis, do ponto de vista do computador. Precisamos converter não somente os tipos de dados, mas todas as expressões e construções que existem em um programa para um formato que o computador possa entender: o formato binário.

Programas e dados compartilham o mesmo espaço em uma fita e o computador ler um bit de cada vez nessa fita. Mas o que é um bit?

## Bits e bytes

O *bit* (do inglês, *binary digit*) é a menor forma de se representar dados em um computador. O bit pode ter somente um dos seguintes valores: 0 ou 1.

No entanto, como um bit tem somente duas representações, ele é muito limitante. Só conseguimos representar dois número com um bit. Como fazemos para representar todos os outros números?

Podemos ir agrupando bits de forma a representar outros números. Com dois bits, já poderíamos representar o número dois (```10```) e o número três (```11```). Vamos usar a equação abaixo para entender como isso seria possível.

```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 10
10 + 1 = 11
```

A expressão ```1 + 1``` em binário é avaliado para ```10``` pois precisamos de dois bits para armazenar o número ```2```. Com três bits conseguimos representar o número quatro (```100```), cinco (```101```), seis (```110```) e sete (```111```). Para representar o número oito precisaríamos de quatro bits. Com sete bits já é possível armazenar 128 dígitos (2^7 = 128).

A medida que vamos acrescentando mais bits, conseguimos representar um quantidade maior de números. Nesse momento é fácil perceber que precisamos de muitos bits para armazenar dados ligeiramente mais complexos. Uma simples string como ```"UFPA"``` precisa de 32 bits para ser representada.

Com tantos bits pra armazenar, facilitaria  nossa vida se tivéssemos representações de mais alto nível pra armazena-los. A primeira representação mais alto nível de um bit é o *byte*, um grupo de 8 bits. Embora pouco conhecido, um há também um grupo de 4 bits, chamado *nibble*.

Voltando ao nosso exemplo anterior, como sabemos que a string ```"UFPA"``` precisa de 32 bits para ser armazenada?

Em Ruby, da caracter de uma string precisa de 8 bits (ou um byte) para ser armazenado. Como a string ```"UFPA"``` tem quatro caracteres, precisamos de quatro bytes (ou 32 bits). Logo, poderíamos generalizar que uma string de tamanho *n* ocupa *n* bytes?

Vamos responder com um exercício: quantos bits precisamos pra armazenar a string ```"Olá mundo"```? A string tem 9 caracteres, mas precisamos de 10 (!) bytes para representa-la. Rode a instrução ```"Olá mundo".bytesize``` para checar você mesmo. Como pode?

Isso acontece pois as principais letras e os dígitos de zero a nove são mapeadas usando a famosa tabela ASCII (American Standard Code for Information Interchange). Caracteres especiais como o ```"ç"``` no Português e o ```"¿"``` no Espanhol precisaram de adaptações na representação. É por isso que o caractere ```á``` precisa de 2 bytes para ser representado.

## Código binário

O código binário é a representação de *qualquer* dado computacional usando um sistema de dois símbolos, 0 e 1.

## Por que 0.1 + 0.2 != 0.3?


## Exercícios de fixação

- Implemente uma máquina de turing que avalie a expressão ```1 + 1```.

- Explique por que uma máquina de calcular não é um computador.

- Crie um programa para fazer conversão de um número float qualquer para sua forma binária em Ruby. Explique cada pequeno passo do seu programa.
