---
layout: single
title: Continuous Integration Theater
excerpt: A summary of an ESEM'19 paper
year: 2019
month: 7
day: 10
published: true
---

According to [this post](https://www.gocd.org/2017/05/16/its-not-CI-its-CI-theatre.html),
"CI theatre describes the illusion of practising continuous integration (CI)
while not really practising it." Common failure modes include:

- running CI against a shared mainline but with infrequent commits, so integration isn't really continuous;
- running a build with poor test coverage;
- allowing the build to stay red for long periods;
- running CI against feature branches which results in continuous isolation.

Although practitioners have been discussing about this for a long time (for instance,
the ThoughtWorks tech radar recently recommended putting this antipattern on
"Hold" two years ago), little research has been devoted to understand how does this
antipattern  happens in the real world. We dedicated an entire paper to study
how common are open source projects that face CI theater. We explored four research questions:

**RQ1. How common is running CI in the master branch but with infrequent commits?** <br>
**Rationale.** One of the main advantages of CI systems is that they decrease the pain of merging new changes. This relief comes from the practice of merging continuously. However, sometimes software engineers opt not to integrate continuously (e.g., they take too much time working on a separate branch and only after days of work they apply the changes in the master branch). Practitioners have baptized the bad practice of working in silos---either in their local branches or remote branches---as ''Continuous Isolation''.<br>
**Answer.** We empirically defined the value of our metrics for infrequent commits as 2.36 commits per weekday. We then found that 60% of the studied projects have less than 2.36 commits, suffering from infrequent commits. The size of the project has no influence on the (in)frequency of commits. Large Ruby projects, however, are the most active ones and do not adhere to this rule.

**RQ2: How common is running a build with poor test coverage?**<br>
**Rationale.** Test coverage measures how much of a software project is exercised during testing. If a project has a fragile test suite (and consequently a low test coverage), new changes that clearly introduce bugs are potentially not caught during build time. Therefore, CI systems offer little help in software projects that do not carefully build their testing arsenal. Although many criteria were introduced to measure code coverage, roughly speaking, test coverage is measured by the number of lines of code exercised by test cases divided by the total number of lines of code.<br>
**Answer.**  We found 51 projects in our dataset that have records on [Coveralls](https://coveralls.io/). Although the overall coverage was 78%, the coverage of Java and Ruby projects differs greatly. The average code coverage of Ruby projects was 86%, whilst for Java projects it was 63%. This suggests that although poor test coverage exist, a significant number of studied projects take care of their code coverage.


**RQ3. How common is allowing the build to stay broken for long periods?**<br>
**Rationale.** Here we sought to investigate how common and how long broken builds stay broken in our dataset. A broken master is particularly undesirable because it may block features from rolling out (i.e., a faulty commit needs to be detected and rolled backed). Notable practitioners, such as [Martin Fowler](https://www.martinfowler.com/articles/continuousIntegration.html), have suggested that ''if the mainline build fails, it needs to be fixed right away'', making a broken build an urgent, high priority task. However, if broken builds stay red longer than this, it may suggest that projects maintainers may not be taking into account the build status and, perhaps, releasing software with bugs. Still, if developers work on a faulty master, their productivity may get hampered substantially.<br>
**Answer.** We observed that 85% of the analyzed projects have at least one build that took more than four days to be fixed. This finding is particularly unfortunate since broken builds that take several days to be fixed may introduce an additional burden (or distrust) on the development team. Interestingly, we observed that large projects (either Java or Ruby) have less instances of long to be fixed broken builds than smaller projects. These long to be fixed builds, on very small projects, are fixed, on average, in 40 days, which is strong smell of the CI theater.

**RQ4. How common are long running builds?**<br>
**Rationale.** In this final research question, our intention is to explore how long take the builds in our dataset to process. The whole point of Continuous Integration is to provide rapid feedback. Advocates from the XP practices provide a general rule of thumb suggesting that, for most projects, 10 minutes is an expected metric. According to [Fowler](https://www.martinfowler.com/articles/continuousIntegration.html), ''it's worth putting in concentrated effort to make [the ten minutes rule] happen, because every minute you reduce off the build time is a minute saved for each developer every time they commit.''<br>
**Answer.** In order to provide quick feedback, builds should be executed under 10 minutes. We found only 43 projects that do not adhere to this general rule of thumb. As an exception to this rule, we found 43 very large and complex projects, such as  the JRuby (the Ruby implementation for the Java VM) or the Facebook Presto (a distributed SQL query engine for big data), that have builds which take longer than 30 minutes. In spite of these cases, this symptom of the CI theater was hardly observed.

If you want to know more about this study, you can read the preprint available [here](https://arxiv.org/abs/1907.01602), and the data is also available as a Jupyter notebook [here](https://github.com/wagnernegrao/ci-analysis/).
