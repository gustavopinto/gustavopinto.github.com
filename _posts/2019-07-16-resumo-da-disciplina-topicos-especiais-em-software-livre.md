---
layout: single
title: Resumo da disciplina de Tópicos Especiais em Software Livre
excerpt: Desafios e lições aprendidas
year: 2019
month: 7
day: 16
published: true
---

No primeiro semestre de 2019, em conjunto com [Filipe Saraiva](filipesaraiva.info/), ministramos a disciplina de
[Tópicos Especiais em Software Livre (TESL)](http://github.com/gustavopinto/tesl) para alunos da graduação e pós-graduação
da UFPA. Como tanto o Filipe quanto eu temos bastante interesse em software
livre, o Filipe com um viés mais prático, e eu no sentido de pesquisa, já
estavamos pensando em ofertar essa disciplina há algum tempo. No entanto, dado
uma necessidade interna da nossa faculdade (alguns professores afastados, outros
recém aposentados, resultando em um défict de professores), decidimos meio que de
último minuto ofertar a disciplina.

Como fizemos isso sem muito planejamento, a disciplina nasceu e cresceu de forma
meio orgânica. Decidimos sobre uma agenda, e fomos produzindo o material sob
demanda. Dentre os tópicos abordados estão: documentação, licenças, gerenciamento
de código e requisitos, boas práticas de codificação, e métricas de código fonte.

Como foi a primeira vez que a disciplina foi ofertada na UFPA, houve um interesse
muito grande por parte dos alunos, tanto que rapidamente as vagas se esgotaram
(tanto para a graduação quanto para a pós-graduação). Tivemos também que abrir vagas
excedentes para alunos especiais (aqueles que não estão regularmente matriculados
em no programa de pós-graduação). Somando graduação e pós, acredito que cerca
de 60 alunos se matricularam para essa disciplina. Para alguns esse número pode
parecer pequeno, mas, para nós, é um número muito grande de alunos (tanto que
tivemos que procurar um espaço externo a nossa faculdade para as aulas). Na nossa
faculdade, turmas grandes tem cerca de 35--40 alunos (e não é incomum turmas de
~15 alunos). Mas isso é história para outo post de blog.

Fiquei bastante feliz pelo interesse dos alunos em se matricular na disciplina
(revelando uma eventual carência na área). Ao longo da disciplina, no entanto,
o número de alunos foi diminuindo rapidamente. A sala, que ficava apertada nas
primeiras aulas, começou a ficar folgada ao longo do semestre. Há vários fatores
que podem explicar a desistência dos alunos, dos quais dois deles valem a pena
pensar um pouco mais. O primeiro é que se trata de uma disciplina optativa, logo
os alunos tem menos resposabilidade em concluir, uma vez que eles poderiam cursar
outra(s) optativa(s) em um outro semestre, e creditar a necessidade dessa matéria.
Outro ponto é dado o material completo da disciplina não estar disponível durante
o período de matrícula (os alunos tinham acesso somente a ementa). Logo, é possível
que alguns alunos estivessem esperando um outro tipo de disciplina. Enfim.

Ao meu ver, o cerne dessa disciplina é que o aluno deveria sair dela com algumas
contribuições feitas em alguns projetos de software livre. Não é necessário somente
usar um software livre, é também necessário entender, usar e modificar. Ao longo
das aulas, os alunos tiveram várias pequenas atividades para entender como funciona
um projeto de software livre, como por exemplo entender a importância das
comunidades, pra que serve uma licença, onde pedir ajuda, etc. Tivemos também
algumas palestras convidadas de membros ativos de projetos de software livre,
como o [Antônio Terceiro](http://softwarelivre.org/terceiro), contribuidor do Debian, e o [George Stavracas](https://feaneron.com), contribuidor
do GNOME. Como no início também pensávamos que os alunos poderiam produzir artigos
científicos ao fim da disciplian (e a vários alunos da pós-graduação estavam
matriculanos), também convidamos o [Igor Steinmacher](www.igor.pro.br), que conduz pesquisa
nesse tópico. Nesse primeiro momento, foi
colocado pouca enfâse na contribuição em sí, e mais no processo de criação e
evolução de um projeto de software livre. Por um lado isso nos pareceu adequado,
já que é muito importante entender o contexto antes de se envolver, de fato. Por
outro lado, isso tardiou a contribuição dos alunos nos projetos.

Na segunda parte da disciplina, os alunos deveriam usar os conhecimentos adquiridos
para procurar um projeto de software livre e fazer uma contribuição. Algumas
contribuições na verdade. Embora não mandatório, era esperado que todos os alunos
fizessem pelo menos uma contribuição de código de código pequena (por exemplo,
uma refatoração), embora outras  atividades estivessem disponíveis para os alunos
(ver lista completa e pontuação sugerarida [aqui](https://github.com/gustavopinto/tesl/blob/master/trabalho-final.md)).
Como tivemos 11 aulas expositivias (somado com duas paralizações e um feriado)
os alunos tiveram em torno de três a quatro semanas para fazer as contribuições
nos projetos. Refletindo agora, é notório que a disciplina ficou bem desbalanceada.
No entanto, embora eu concorde que alguns tópicos poderiam ser removidos da ementa
da disciplina, eu acho que seria muito difícil equalizar o tempo dedicado nas aulas
e nos projetos. Ponto para debate.

De toda forma, mesmo que o tempo para realizar os projetos tenha sido relativamente
curto, acredito que todos os alunos conseguiram realizar alguma contribuição.
Algumas contribuições, inclusive, foram bem significativas, como por exemplo, um
novo algoritmo para o [scikit-learn](https://github.com/scikit-learn/scikit-learn/pull/14239),
criação de nova regra no [ESLint](https://github.com/sindresorhus/eslint-plugin-unicorn/pull/302),
ou um novo layout para o [beautifulhugo](https://github.com/halogenica/beautifulhugo/pull/287).
Vários outros alunos fizeram contribuições menores, mas também bastante interessantes
como [refatorações](https://github.com/GoogleCloudPlatform/oozie-to-airflow/pull/272), parsing de [arquivo JSON](https://github.com/edsu/pymarc/pull/137), além de [traduções](https://github.com/python-gsoc/python-blogs/pull/240), e [bug reports](https://github.com/CiviWiki/OpenCiviWiki/pull/537). No total, os alunos
fizeram mais de 60 contribuições em projetos de software livre. Durante as
apresentações dos projetos, vários alunos mencionaram que a disciplina ajudou
a fazer a primeira contribuição em um projeto de software livre (alguns alunos
estavam inclusive bem felizes por causa disso).

Ao fim da disciplina, lancei um questionário pra avaliar a percepção dos alunos
com relação a disciplina. 17 alunos responderam. Dentre os quais, 65% nunca haviam
contribuido com projetos de software livre antes (apenas um era contribuidor ativo).
88% dos alunos mostraram interesse em continuar contribuindo com software livre
após a disciplina. Quando perguntados quais as chances de realizar as contribuições
feitas se não tivessem cursado a disciplina 71% disseram que era "improvável" ou
"muito improvável". 88% dos alunos recomendariam a disciplina para algum colega.


Ainda sobre o questionário, alguns alunos acharam particularmente interessante
assuntos sobre licenças, sobre o funcionamento das comundiades, ou sobre
engajamento nos projetos. Um aluno mencionou que achou interessante saber  
"Que é possível ganhar dinheiro com software livre". Não sei se foi o mesmo aluno,
mas um aluno da disciplina procurou projetos e issues que eram financiadas. Esse
mesmo aluno comentou comigo que recebeu mais dinheiro contribuindo com os projetos
do que em 2 ou 3 meses de estágio. MASSA!
Sobre os tópicos que deveriam ser abordados (mas que não foram), alguns alunos
mencionaram que é importante falar mais sobre o git e o github durante a disciplina.
Nós simplesmente assumimos que esses assuntos seriam rapidamente absorvidos pelos
alunos, mas não parece ser o caso. Inclusive, logo no começo das aulas, foi
perceptível que vários alunos tiveram problemas em como usar o sistema de
pull-requests nos exercícios.

Com relação as dificuldades para contribuir, alguns alunos
reportaram que tiveram dificuldades para enteder as guideslines do projeto, para
seguir os padrões de código adoados, ou até mesmo no processo de revisão. Vários
alunos reportaram que tiveram dificudlades para encontrar projetos para fazer
contribuições. Isso é particularmente interessante, visto que muito se tem feito
nos últimos anos para fazer com novatos embarquem em projetos de software livre,
mas a barreira de entrada ainda parece ser muito grande. Recentemente, inclusive,
Karl Fogel [questionou no Twitter](https://twitter.com/kfogel/status/1144648353873051649)
quais as ações que as pessoas fazem para se envolver com software liver. Meu, se
até o Karl Fogel tem essa dúvida, o que dirá os meus alunos... Para exemplificar,
usando as palavras de um aluno, coloco aqui as dificuldades por ele encontradas:


"Contribuições de documentações são relativamente simples de encontrar e realizar, reportar bugs também não é uma tarefa tão difícil, visto que no decorrer do dia nos deparamos com pequenos bugs em nossas ferramentas. O grande problema é contribuir com código: Não estar familiarizado com a estrutura de um projeto é uma grande barreira, ao vasculhar o código fonte serão encontradas diversas ferramentas e bibliotecas sendo utilizadas em conjunto com as técnicas de programação (OOP, Data Structures), e para alunos que nunca desenvolveram nenhum projeto fora da universidade pode ser frustrante entender essa junção de utilização de ferramentas + conceitos. Acredito que a melhor forma de contornar essa barreira seria influenciando os alunos a procurarem contribuições a serem feitas desde o inicio da disciplina, isso faz com que eles possam amadurecer ao longo da disciplina."

Para finalizar, gostaria de agradecer o Filipe Saraiva, que foi quem lançou a
proposta e abraçou a causa junto comigo. Agradecer também aos convidados,
Antônio Terceiro, George Stavracas e Igor Steinmacher, que acharam tempo em suas
agendas apertadas para dar uma palestra para os alunos, e também ao [Mauricio Aniche](https://www.mauricioaniche.com/)
que gentilmente disponibilizou algumas cópias de alguns de seus livros que foram
enviadas para os alunos que tiveram excelente desempenho na disciplina. Agradeço
também ao nosso monitor, [Marcos Nazário](https://github.com/felipenazario), que assumiu três aulas (uma delas nem
era de sua responsabilidade). Por fim, agradecer também aos alunos que participaram
da disciplina! Sem dúvida, nada disso teria acontecido se não fosse vocês. Valeu!
