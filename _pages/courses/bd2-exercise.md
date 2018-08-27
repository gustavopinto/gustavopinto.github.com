---
title: Banco de dados II -- Exercício
permalink: /teaching/bd2/exercise
---

Deve ser realizado em dupla ou individualmente. Todo código gerado deve estar disponível no GitHub.

Entrega e apresentação do trabalho (texto/apresentação com: configuração da máquina na qual as avaliações foram realizadas, tabelas/gráficos dos resultados, descrição dos SGBDs considerados e dos algoritmos implementados - se for o caso, discussão sobre os resultados).

Este trabalho visa medir o desempenho de um banco de dados relacional considerando o espaço necessário para armazenar os dados e o tempo para processar consultas. Especificamente, o trabalho requer a implementação de um banco de dados em dois formatos, a medição de espaço utilizado para armazenar os dados em cada formato e o tempo utilizados para responder às consultas, conforme a especificação a seguir.

## Aplicação

A aplicação considerada será um censo global fictício de seis (6) bilhões de pessoas. Os dados considerados são: sexo (F/M), idade (0-127), renda mensal (0- 1023) * US$1000/ano, escolaridade (0-3), idioma (0-4095), país (0-255), localizador (coordenadas geográficas da pessoa responsável pelo censo). Os dados serão gerados aleatoriamente respeitando os intervalos definidos.


### Sistema de arquivos binários

O sistema de arquivos binários é basicamente o que vocês tiveram de utilizar nas disciplinas
de AEDS. É criado um programa em C /C++/Java/etc que define uma estrutura em registro
utilizando de preferência campos binários e inteiros. Por exemplo, sexo não será um campo
char que registra 'F' e 'M', mas sim um bit 0 ou 1 (o qual será interpretado pelo programa
como feminino ou masculino). O banco de dados pode ser um arquivo binário com todos os registros armazenados da seguinte maneir a: 1 bit sexo, 7-bits idade, 10-bits renda, 2-bits escolaridade, 12
-bits idioma, 8-bits país, 24-bits localizador. O processo de consulta será igualmente através do programa C/C++/Java, o qual pode apresentar um menu com as consultas fixas que podem ser realizadas.

### Banco de dados relacional

O banco de dados relacional será definido utilizando uma modelagem simples com todos os
dados em uma única tabela -- seguindo o estilo do arquivo binário cuja interpretação dos
dados é realizada pelo programa que o utiliza (até para permitir uma comparação mais justa).
O processo de consulta será realizado via SQL através da interface do próprio SGBD. Sugere-se utilizar os SGBDs free MySQL ou PostgreSQL.

### Espaço

Após c
riar os dados aleatoriamente
para todas as pessoas, o espaço utiliz
ado pelo arquivo
binário e pelo bancos de dados deve ser informada.


### Tempo


Para cada consulta, deverá ser medido o tempo para processar cada uma pela primeira vez, e o tempo médio para processar cada três (3) vezes seguidas. O tempo pode ser informado em *ms* ou *s*. Ao final, deve-se apresentar os resultados tabulados [#consulta, t_binario, t_sgbd] ou em gráficos.

### Consultas

```SELECT país, sexo, count(*)
FROM pessoas
GROUP BY país, sexo;

SELECT país, sexo, idade, count(*)
FROM pessoas
GROUP BY país, sexo, idade;

SELECT país, sexo, avg(salario)
FROM pessoas
GROUP BY país, sexo;

SELECT país, sexo, avg(idade)
FROM pessoas
GROUP BY país, sexo;

SELECT país, sexo, count(*)
FROM pessoas
WHERE país = 15
GROUP BY país, sexo;

SELECT país, sexo, count(*)
FROM pessoas
WHERE país = 15 AND sexo = 1;

SELECT país, sexo, count(*)
FROM pessoas
WHERE país >=0 AND país <=15
GROUP BY país, sexo;
```

### Consulta avançada

Crie três consultas quais quer utilizando os demais dados em conjunto com país.


### Finalmente

Analise seus resultados. Por consulta ou por grupos de consultas, por que uma
implementação foi melhor/pior que as demais?
