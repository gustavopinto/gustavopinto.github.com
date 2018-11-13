---
title: Banco de dados II
permalink: /teaching/bd2
---

## Horário

Terça e Quinta, às 16:40 @ MIRANTE-410

## Slack

Todo material de aula será postado no Slack. Para ingressar, clique [aqui](https://join.slack.com/t/bd2-bcc/shared_invite/enQtNDI0MTA5NTI1MTA3LTVmMTRiZTRlMzM1YWNmYjdjZWYxYTliNjQ3ZGQ3ZDdhM2UwY2FiNTU5NzNjYzk3OTIwMDY1ODlhZjk0OTA2NDM).

## Objetivo

A disciplina de Bancos de Dados Avançados cobre vários temas práticos dos sistemas como processamento de consulta, controle de transações, concorrência e segurança.


## Ementa

Revisão dos conceitos básicos de bancos de dados. Aspectos operacionais em sistemas de banco de dados: processamento de consultas, recuperação de falhas, segurança e integridade, controle de concorrência.


## Bibliografia

- Elmasri, R.; Navathe, S. B. Sistemas de Banco de Dados, 6ª Ed, 2010.
- Redmond, E.; Wilson, J.R. Seven Databases in Seven Weeks: A Guide to Modern Databases and the NoSQL Movement, 2012.

### Material extra

- [Deadlocks as Runtime Exceptions](https://sites.google.com/a/cin.ufpe.br/castor/sblp_2015_submitted.pdf)
- [Algorithms Behind Modern Storage Systems](https://cacm.acm.org/magazines/2018/8/229762-algorithms-behind-modern-storage-systems/fulltext)
- [Seeking an efficient algorithm to group identical values](https://lemire.me/blog/2008/05/01/i-am-seeking-an-efficient-algorithm-to-group-identical-values-in-an-array/)
- [The design and implementation of modern column-oriented database systems](https://blog.acolyer.org/2018/09/26/the-design-and-implementation-of-modern-column-oriented-database-systems/)
- [Four security flaws illustrated, all on one conference registration site](http://andreas-zeller.blogspot.com/2016/04/how-i-twice-hacked-conference.html)
- [A Classification of SQL Injection Attacks and Countermeasures](https://pdfs.semanticscholar.org/81a5/02b52485e52713ccab6d260f15871c2acdcb.pdf)

## Avaliação

1. Exercícios em sala: 4 pontos (1pt cada exercício)
2. Prova do primeiro bimestre: 4 pontos
3. Seminário (PD): 5 pontos
3. Projeto de disciplina: 7 pontos
4. Atividade extra (AE): 1 ponto

### Seminário

O seminário é composto de uma atividade, um relatório, e uma apresentação.

O seminário pode ser feito em dupla ou individualmente. Cada dupla deve implementar [esta atividade](/teaching/bd2/exercise) um banco de dados.

O relatório deve conter: configuração da máquina na qual as avaliações foram realizadas, tabelas/gráficos dos resultados, descrição dos SGBDs considerados e dos algoritmos implementados - se for o caso, e discussão sobre os resultados.

A apresentação deve conter: configuração da máquina (HD, memória, cache, SO, etc) e SGBD/s considerado/s, tabelas/gráficos dos resultados, onde cada consulta deve ser explicitada através do comando SQL executado.

A entrega do relatório e a apresentação do trabalho será no dia 23/10. Cada dupla (ou aluno, caso seja individual) terá 15 minutos de apresentação mais 3 minuto para questionamento. Terá penalidade de 1 ponto para quem estourar o tempo (**ENSAIEM!**)

Para garantir que todos apresentem no horário: É necessário enviar o PDF da apresentação e do relatório para o grupo do Slack até às 23:00hs do dia 22/10. Os arquivos devem ser nomeados como "relatorio-nome.pdf" e "apresentacao-nome.pdf", onde "nome" é o nome de *UM* aluno (mesmo para duplas). O não envio do relatório ou da apresentação até a data estipulada acarretará em penalidade de outro 1 ponto.

### Projeto de disciplina (PD)

O PD deverá ser feito em duplas ou trios. O projeto de disciplina utilizará o [SOTorrent](http://sotorrent.org). Teremos uma aula expositiva para apresentação do dataset, e uma aula com hands on no dataset. Durante a aula expositiva, algumas sugestões de trabalhos serão feitas, mas os alunos estão livres para explorar outros trabalhos.  Antes das aulas os alunos já podem ir explorando o dataset (disponível [aqui](https://zenodo.org/record/1434285#.W9pMsFLQ_MI)). ***IMPORTANTE:*** não é recomendado a utilização do SOTorrent via Google Big Query para condução do trabalho (apenas para se familiarizar com a base). Os alunos devem importar e manusear seu próprio banco de dados.

O escopo do projeto será decidido ao longo da disciplina, no entanto, não após 22/11.

Os alunos devem também se ambientar com o material adicional sobre o SOTOrrent:

- [SOTorrent: Reconstructing and Analyzing the Evolution of Stack Overflow Posts](http://empirical-software.engineering/assets/pdf/msr18-sotorrent.pdf)
- [SOTorrent: Studying the Origin, Evolution, and Usage of Stack Overflow Code Snippets](http://empirical-software.engineering/assets/pdf/msr19-sotorrent.pdf)
- [Edit and Comment History of Stack Overflow Threads](http://empirical-software.engineering/blog/sotorrent-edithistory)

O PD constará de: um relatório, uma apresentação, e o código criado. O **relatório** deve conter: introdução (o que foi feito?), metodologia (como foi feito?), resultados (o que foi encontrado?), discussão (o que foi aprendido com os resultados?), trabalhos relacionados (quais são os outros trabalhos?) e conclusão (fim!). O **relatório** deve estar [neste formato](https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/Conference-template-A4.doc), e deve ter de (no mínimo) 3 a (no máximo) 4 folhas.

A **apresentação** deve ser enviada até o dia 17/12, às 23:00, e deve abordar os mesmos tópicos do relatório. No entanto, aperesentações podem acontecer antes, caso a dupla/trio tenha encerrado o trabalho mais cedo. A apresentação não deve demorar mais do que 15 minutos (***ENSAIEM***).

O **código** criado deverá obrigatoriamente estar disponível no Github desde o começo do trabalho.

### Atividade Extra (AE)

- Ler um artigo completo do SBBD de 2018. O resumo deve ter 2 folhas. Entrega no 15/11/2018, até às 18:30, via mensagem privada no Slack.
- Ler o artigo [Deadlocks as Runtime Exceptions](https://sites.google.com/a/cin.ufpe.br/castor/sblp_2015_submitted.pdf) e entregar um resumo de 2 folhas no dia 27/09. Vale 0.5 pontos.
- Fazer uma contribuição a um projeto de software livre durante o mês de outubro (1 ponto). A contribuição precisa ser relacionada a código (documentação não conta) de um projeto (ou parte de um projeto) de banco de dados.

## Nota final

Soma de todas as atividades dividido por dois.

## Cronograma

Passível de alterações.

| # | Data  | Conteúdo de Aula              |
| 1 | 28/08 | Introdução e Revisão SQL      |
| 2 | 30/08 | Transação                     |
| 3 | 04/09 | Transação                     |
| 3 | 06/09 | Exercício em sala (talvez esteja ausente)            |
| 5 | 11/09 | Concorrência                  |
| 6 | 13/09 | Concorrência                  |
| 7 | 18/09 | ***NAO TEREMOS AULA***        |
| 8 | 20/09 | ***NAO TEREMOS AULA***        |
| 8 | 25/09 | Concorrência                  |
| 9 | 27/09 | ***NAO TIVEMOS AULA***        |
| 10 | 02/10 | ***MIRANTE FECHADO***        |
| 11 | 04/10 | Exercício em sala            |
| 12 | 09/10 | Armazenamento                |
| 12 | 11/10 | Recuperação                  |
| 13 | 16/10 | Segurança                    |
| 14 | 18/10 | Exercício em sala            |
| 15 | 23/10 | ***NAO TIVEMOS AULA (Jogos alunos)***       |
| 16 | 25/10 | Seminário parte 1            |
| 17 | 30/10 | Seminário parte 2            |
| 17 | 01/11 | Prova                        |
| 18 | 06/11 | Correção de provas |
| 19 | 08/11 | ***NAO TEREMOS AULA*** |
| 20 | 13/11 | Hands on trabalho final |
| 21 | 15/11 | ***FERIADO*** |
| 22 | 20/11 | Acompanhamento das atividades |
| 23 | 22/11 | Acompanhamento das atividades & Definição de trabalhos |
| 24 | 27/11 | Acompanhamento das atividades |
| 25 | 29/11 | Acompanhamento das atividades |
| 26 | 04/12 | ***NAO TEREMOS ACOMPANHAMENTO*** |
| 27 | 06/12 | ***NAO TEREMOS ACOMPANHAMENTO*** |
| 28 | 11/12 | Acompanhamento das atividades |
| 29 | 13/12 | Acompanhamento das atividades |
| 30 | 18/12 | Apresentação PD |
| 31 | 20/12 | Apresentação PD |


## Entrega atrasada

Entregas de trabalhos após o prazo serão aceitas mas os pontos referentes não serão contabilizados.

## Política de plágio

Todos os trabalhos (a não ser que indicados explicitamentes) devem ser feitos de forma individual. O que você entregar deve ser fruto do seu trabalho. Alunos são permitidos e encorajados para discutir os trabalhos e projetos com outros alunos. Alunos não são permitidos copiar solução ou parte de solução de colegas. Na presença de plágio, os alunos envolvidos não receberão pontos da atividade em questão.

## Pontuação extra

Dado a existência da atividade extra (AE), qualquer pontuação extra não será possível.
