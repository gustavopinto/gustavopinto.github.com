---
layout: post
title: Do developers care about software energy consumption?
subtitle: A summary of a MSR'14 paper
year: 2014
month: 11
day: 25
published: true
---

Is energy consumption a real issue in the software development process? Do developer really care about that?

These questions were the start point of our paper, "[Mining Questions About Software Energy Consumption](http://gustavopinto.github.io/lost+found/msr2014.pdf)". In this paper, we investigated several questions about software energy consumption. Since we believe that research needs to be grounded in practice, we analyzed StackOverflow, one of the most famus software development web site.

We filter out all questions that contain at least one energy consumption related word (*e.g.,* energy efficiency). After this process, we found 615 question, but after removing false positives, we ended up with only 325  valid questions. We used a qualitative approach to analyze these questions, named [Thematic Analysis](http://en.wikipedia.org/wiki/Thematic_analysis).

Analyzing such questions, we observed that practitioners are aware of the energy consumption problems: the questions they ask are not only diverse -- we found 5 main themes of questions -- but also often more *interesting* and *challenging* when compared to the remaining questions on StackOverflow.

We found five main themes regarding energy consumption questions. They are:


1. **Measurements**. Questions about measurement tools or techniques.
2. **General Knowledge**. Questions that do not have a concrete use case.
3. **Code Design**. Questions about programming techniques that can help in saving energy.
4. **Context-specific**. The authors of such questions need to provide more details in order for other users to better understand the problem, and to facilitate replication
5. **Noise**. These questions are not directly associated with an energy consumption issue. Usually, the user first wants to improve one aspect of her application and, as a secondary goal, also improve energy consumption


Since questions in the Code Design theme are usually focused on how programmer decisions may improve energy consumption, we believe that the Code Design category is the most important one for future energy-aware software development. This category is also the most popular among developers. In a in-depth analysis of this theme, we identified 8 solutions that developers use in order to save energy. They are:

1. Keep IO to a minimum.
2. Bulk operations.
3. Avoid Polling.
4. Hardware Coordination.
5. Concurrent programming.
6. Lazy Initialization.
7. Race to Idle.
8. Efficient Data structure.

We also observed that some reseachers support such solutions proposed by software developers. However, for some of them, like concurrent programming, solutions cannot be seen as one-size-fits-all, since no consensus has emerged from the relationship between concurrent programming, performance and energy consumption.

In conclusion, this study serves as a research agenda for future energy consumption research. The needs of developers and the challenges they face may help energy-efficiency researchers stay focused on the real-world problems. The collective wisdom shared by developers may serve as a practical guide for future energy- aware and energy-efficient software development. The conceptually incorrect views they hold may inspire educators to develop more state-of-the-art curricula.

For more details, please check out [our paper](http://gustavopinto.github.io/lost+found/msr2014.pdf).
