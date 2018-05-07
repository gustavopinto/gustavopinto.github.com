---
title: Banco de Dados 1
permalink: /teaching/bd1
---

## Horário

Segunda e Quarta, às 16:40

## Slack

Todo material de aula será postado no Slack. Para acessar: http://bit.ly/2G5OIqX

## Objetivo

Introduzir os fundamentos que permitam ao aluno adquirir o domínio básico da tecnologia de banco de dados.


## Ementa

Conceitos básicos de banco de dados. Modelos de dados e linguagens. Projeto de bancos de dados. Novas tecnologias e aplicações de banco de dados.


## Bibliografia

- HEUSER, Carlos Alberto. Projeto de Banco de Dados. 2a edição. Porto Alegre: Sagra - Luzzato, 1999.
- SILBERSCHATZ, A.; KORTH, H.; SUDARSHAN, S. Sistema de Banco de Dados. 3a edição. São Paulo: Markon Books, 1999.

### Material extra

- [Smelly Relations: Measuring and Understanding Database Schema Quality](http://www.tusharma.in/preprints/dbSchemaQuality_Preprint_ICSE2018.pdf)
- [Search-Based Test Data Generation for SQL Queries](https://pure.tudelft.nl/portal/en/publications/searchbased-test-data-generation-for-sql-queries(90a6431f-f78f-4ac3-bf87-c052cd9cd5d4).html)
- [Database smell detector](https://github.com/tushartushar/DbDeo)
- [How to get a data science position after academia with no previous industry experience](https://medium.com/@skyetetra/getting-out-of-the-academic-trap-6c40d92ab436)
- [A growing collection of what I know about analyzing GitHub with BigQuery and other tools](https://github.com/fhoffa/analyzing_github)
- [How to Perform Set Operations on Terabyte Files](https://www.spinellis.gr/blog/20180403/)
- [Data Science at the command line](http://www.gousios.gr/courses/bigdata/ds-cmd-line.html)
- [Apostila sobre SQL (Alura)](http://blog.alura.com.br/liberada-a-apostila-gratuita-de-sql-do-alura/)


<!-- http://15445.courses.cs.cmu.edu/fall2017/schedule.html -->
## Avaliação

1. Exercícios em sala: 3 pontos (1pt cada exercício)
2. Projeto sobre modelagem de dados: 4 pontos
3. Prova sobre modelagem de dados: 4 pontos
4. Projeto de disciplina (PD): 10 pontos
5. Atividade extra (AE): 2 pontos

### Projeto sobre modelagem de Dados

Os alunos devem criar o modelo entidade relacionamento de um sistema de software **não trivial**. Os alunos devem apontar o sistema escolhido no Slack. O critério de escolha é first come, first served. O trabalho é em dupla. Cada dupla deve descrever em profundidade o sistema escolhido. No entanto, entidades e relacionamentos que não são vitais para o domínio da aplicação não precisam ser descritos. A dupla deve saber justificar as escolhas e implementações feitas. A dupla deverá apresentar o trabalho na data marcada. Na apresentação, a dupla deve descrever o domínio do problema da aplicação escolhida (o que ela faz), as entidades e seus relacionamentos. A riqueza de detalhes (atributos e seus tipos, relacionamentos e seus tipos) é importante para as principais entidades do sistema. Os modelos devem conter, no mímimo, as seguintes características: (1) cardinalidade mínima e máxima, (2) atributo simples, identificador e multivalorado, (3) relacionamento com atributo, (4) relacionamento unário, (5) relacionamento ternário, (6) entidade fracas. Não é necessário descrever essas características para todas entidades e relacionamento; somente para aquelas que representam o core da aplicação. A não apresentação de uma das características acarretará na redução de 0.50 pontos da atividade (somado para cada característica pendente).  Se a dupla optar por usar um software de modelagem que não implemente as características mencionadas anteriormente, certifiquem-se de modificar os diagramas para que essas características sejam cobertas. No mímimo de 3 horas antes da apresentação, a dupla deve enviar os slides bem como o diagrama para o slack (o não envio no prazo estipulado acarretará na redução de 2 pontos da atividade). As duplas que apresentarem no segundo dia serão mais cobradas. Apresentação de até 25 minutos por dupla.

### Projeto de Disciplina (PD)

No projeto de disciplina, o aluno deverá abordar na prática alguns dos conceitos vistos em sala de aula. Um exemplo de PD: Configure a ferramenta [DbDeo](https://github.com/tushartushar/DbDeo) e execute-a em vários bancos de dados existentes (no seu estágio, de software livre, etc). O professor é responsável por apresentar vários PDs, mas o aluno poderá sugerir um PD do seu interesse. No entanto, o PD deve ser uma atividade que justifique o tempo dedicado para sua execução (em torno de 3 semanas).  O projeto de disciplina deve ser feito em dupla.

Algumas outras possíveis atividades para o projeto de disciplina:

- Rodar algum algoritmo de aprendizado de máquina em alguma base de dados (exemplo [aqui](https://github.com/jubins/MachineLearning-Detecting-Twitter-Bots))
- Importar CSVs de algum projeto (como o o [dadosbr](http://dados.gov.br/)) para um banco de dados e extrair informações relevantes
- Utilizar alguma biblioteca de visualização (exemplo [aqui](https://altair-viz.github.io/)) de dados em algum banco de dados
- Aplicar alguma ferramenta de análise de performance em algum banco de dados já existente
- Exportar dados de algum banco de dados relacional, e utilizar alguma biblioteca de análise de dados (por exemplo, [pandas](https://pandas.pydata.org/)) (exemplo [aqui](https://codeburst.io/how-to-rewrite-your-sql-queries-in-pandas-and-more-149d341fc53e))
- Rodar alguma ferramenta de mapeamento objeto relacional em algum banco de dados já existente (exemplo [aqui](http://guides.rubyonrails.org/active_record_querying.html))
- Realizar um processo de limpeza de dados em alguma base de dados já existente (por [exemplo](http://openrefine.org/))
- Implementar o trabalho do seminário em algum bando de dados relacional

#### Base de dados abertas

- StackOverflow: http://data.stackexchange.com/stackoverflow/queries
- Github: https://cloud.google.com/bigquery/public-data/github e http://ghtorrent.org/ (exemplos [aqui](https://github.com/fhoffa/analyzing_github))
- Wikipedia: https://bigquery.cloud.google.com/dataset/fh-bigquery:wikipedia?pli=1 (exemplos [aqui](https://www.reddit.com/r/bigquery/comments/3dg9le/analyzing_50_billion_wikipedia_pageviews_in_5/?st=jgq90t8u&sh=3d541169))


### Atividade Extra (AE)

Alunos interessados em fazer a atividade extra devem entrar em contato com o professor, avisando o interesse, até o dia 16/04. As instruções da atividade extra será passada para o aluno interessado. A atividade extra é individual.


### Nota final
Soma de todas as atividades dividido por dois.

## Cronograma

Passível de alterações.

| # | Data  | Conteúdo de Aula                |
| 1 | 19/03 | Apresentação                    |
| 2 | 21/03 | Conceitos e Arquitetura de SGBD |
| 3 | 26/03 | Modelo ER  (Definir trabalhos)  |
| 4 | 28/03 | Modelo ER                       |
| 5 | 02/04 | Modelo ER                       |
| 6 | 04/04 | **Exercícios (em sala)**        |
| 7 | 09/04 | Revisão Entidades-Relacionamentos       |
| 8 | 11/04 | NÃO TEREMOS AULA                |
| 9 | 16/04 | Modelo ER                       |
| 9 | 18/04 | **Apresentação de trabalhos**  (Parte 1)  |
| 9 | 23/04 | GREVE DOS RODOVIARIOS  |
| 10 | 25/04 | **Apresentação de trabalhos**  (Parte 2) |
| 11 | 30/04 | **Prova 1**                    |
| 13 | 02/05 | SQL SELECT                     |
| 12 | 07/05 | SQL CREATE, INSERT             |
| 14 | 09/05 | SQL COMPLEXO                   |
| 15 | 14/05 | SQL DELETE, UPDATE             |
| 16 | 16/05 | **Exercícios (em sala)**       |
| 17 | 21/05 | Mapeamento SQL                 |
| 18 | 23/05 | Normalização                   |
| 19 | 28/05 | **Exercícios (em sala)**       |
| 20 | 28/05 | Definição de projetos (em sala)|
| 21 | 25/06 | Apresentação de projetos de disciplina (Parte 1)  |
| 22 | 27/06 | Apresentação de projetos de disciplina (Parte 2)  |
| 23 | 02/07 | Atividade Extra                |


## Entrega atrasada

Entregas de trabalhos após o prazo serão aceitas mas os pontos referentes não serão contabilizados.

## Política de plágio

Todos os trabalhos (a não ser que indicados explicitamentes) devem ser feitos de forma individual. O que você entregar deve ser fruto do seu trabalho. Alunos são permitidos e encorajados para discutir os trabalhos e projetos com outros alunos. Alunos não são permitidos copiar solução ou parte de solução de colegas. Na presença de plágio, os alunos envolvidos não receberão pontos da atividade em questão.
