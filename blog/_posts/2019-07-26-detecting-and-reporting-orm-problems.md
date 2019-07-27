---
layout: single
title: Detecting and Reporting Object-Relational Mapping Problems
excerpt: A summary of an ESEM'19 paper (industry track)
year: 2019
month: 7
day: 26
published: true
---

Developers often take advantage of Object-Relation Mapping (ORM) frameworks to
provide a conceptual abstraction between objects in object-oriented languages
and data stored in the underlying database. These ORM frameworks operate between
object-oriented architecture system and the relational environment, creating a
"virtual object database" that can be handled from within the programming language.

The good thing about these frameworks is that they greatly reduces the effort of
not only communicating with a database but also dealing with basic database
operations (e.g., insert, update, read, and delete), since changes to objects
are automatically propagated to the corresponding database records. As a
consequence, developers do not need to spend time and effort creating operations
to communicate with the database, over and over again.

The bad thing, however, is the fact that developers may underused or overused
these frameworks. For instance, a [study has found](https://petertsehsun.github.io/papers/peter_tse2016.pdf) that when these frameworks are misused, they can deteriorate a performance of a software application.

Although ORM frameworks are widespread in the software development industry, it
may come as a no surprise that developers are facing many problems with them.
A student of mine, who also works in a R&D institute, mentioned to me that they
are dealing with the same ORM problems for many years in a row. After getting
tired of having to fix them manually, my student created a tool that finds an
eventual ORM problem, and highlights it to the developer. The tool searches for 12
kinds of ORM problems, such as:

- Misspelling the names of schemas, tables, or columns (e.g., names with accents);
- Forgetting to create constraints (e.g., did not create a foreign key constraint);
- Mismatching JPA annotations (e.g., using @Column when a @JoinColumn was needed);
- Forgetting to use an important annotation (e.g., a @Temporal annotation in a date
  datatype, a @Enumared in an Enum datatype, or a @Table in a class).
- Forgetting to implement the Serializable interface

The tool consists of static analyzing ORM code looking for the ORM problems.
We use bytecode instrumentation to (1) obtain the ORM code and to (2) create
several assertions that check whether the ORM code contains one (or more) of the
curated ORM problems. We also provide enhanced error messages that aid developers
to fix the ORM problem found. After cataloging 12 mapping problems, and providing a
tool to automatically identify and report them, we conduct a developer experience
(DX) study with 13 participants to better understand the framework's
limitations and eventual points for improvements.

We observed several *benefits* with the usage of our tool. All the participants
agreed that the enhanced error messages helped them to conclude the experiments.
One particularly interesting finding is that two participants finished the tasks
without any ORM experience. When we interviewed them, we perceived that they were
able to accomplish the task by following the suggestions of the enhanced error
messages. There were also some *challenges*. We perceived that the tools'
documentation was not appropriated, since some participants had a hard time to
use some custom annotations. However, although the documentation was not
sufficient in some points, all participants were able to complete all the tasks.
Interestingly, my student did not experience these two problems in the company. This
may be  explained due to the fact that the architect of the tool as always
available to answer eventual questions.

Finally, one experienced developer may argue that this tool might not be relevant
today. However, when browsing Q&A websites, we still see these problems occurring.
For instance, [this question](stackoverflow.com/q/55466284), asked in April 2019,
could be fixed by our tool.

The tool is not yet available, since my student is still dealing with copyright
issues in this company (he wrote the tool while working there). I will update
this blog post when he gets over it. If you want to read the complete report,
click [here](http://gustavopinto.github.io/lost+found/esem2019-industry.pdf).

BTW: This paper was my very first submission to an industry track and my very fist
academia-industry collaboration. Lesson learned: if you happen to have students
that work in the industry, instead of suggesting your problems to them, ask them
what are their problems.
