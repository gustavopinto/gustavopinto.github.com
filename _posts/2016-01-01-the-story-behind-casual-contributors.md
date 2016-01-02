---
layout: post
title: The story behind casual contributors
subtitle: A summary of a SANER'16 paper
year: 2016
month: 1
day: 1
published: true
---

Github changed the way developers contribute to OSS projects, in particular by providing a single process of contribution, which is called pull-based model. Using this model, developers do not need to have write access to the repository in order to provide changes to the software. This kind of environment, together with its contribution model, encourages newcomers to participate in the process.

However, while some contributors want to have a key role on the project, some others do not share the same desire, although they still want to contribute nevertheless. In fact, it is well-known that popular projects have a restricted set of core developers, who drive the project, but also a broad set of "not that involved" developers, which are responsible for a long tail of small contributions.

Despite the growing number of newcomers interested in contributing to OSS, little is known about this particular kind of contributor: the casual contributor. In a study published on [SANER'16](http://saner.inf.usi.ch/), we investigated what we call "casual contributors". In particular, we were interested in understanding (1) how common they are, (2) what are the characteristics of their contributions, and (3) how they are perceived.

Here in this blog post, we will describe the main findings of the paper. If you want to know more about this research, consider reading the [pre-print](http://gustavopinto.github.io/lost+found/saner2016.pdf).

# OSS selection

We selected the top 20 most popular projects written in: C, C++, Clojure, CoffeeScript, Erlang, Go, Haskell, Java, JavaScript, Objective-C, Perl, PHP, Python, Ruby, Scala, and TypeScript. Our initial corpus comprises 320 mature, non-trivial, OSS projects. However, we removed 45 false-positive projects (*e.g.,* projects that are not software projects). Our final list of projects included [rails](https://github.com/rails/rails), [django](https://github.com/django/django), and [linux](https://github.com/torvalds/linux/).

# Surveys with practitioners

We conducted two surveys with 197 the casual contributors and 64 project maintainers. These surveys were aimed at understanding the motivation, the benefits, and the drawbacks of this kind of contribution. Given the opportunity, I would like to thank the 361 developers that answered the survey. Assuming that it took about 10 minutes to answer the survey, the combined effort amounts to 2.5 full days. As one reviewer said, "The big deal is the story in the survey part". **Thank you**.

We observed that 65.8% of our respondents contribute to OSS at least once per month, and 75.2% of them are used to making casual contributions.

# How common are casual contributors in OSS projects?

Figure 1 presents an overall picture of some of the studied projects. Each histogram groups the projects analyzed of each programming language.

<center>
<img src="/images/post-casual/overall.png" alt="Contributions per programming language" height="330"/>
</center>

To some extent, the analyzed projects have a similar characteristic: most of the contributors perform very few contributions. A non-negligible number of contributors (48.98%) performed a single contribution, which varies from programming language to programming language (*e.g.,* C projects have 39% of casual contributors, whereas JavaScript has 61%). Based on this finding, we decided that the casual contributor is a contributor that performed at most one commit to a software project.

This significant number of casual contributors might lead one to believe that an important proportion of the projects are intrinsically made by casual contributions. In reality, we found the opposite: these casual contributors are responsible for only 1.73% of the total number of contributions in our corpus of OSS projects (linux: 1.02%, rails: 3.46%, django: 3.19%). For a more detailed perspective, next figure shows the percentage of the casual contributors (top) and contributions (bottom) for each programming language analyzed.

<center>
<img src="/images/post-casual/percentage.png" alt="Percentage of casual contributors" width="400" height="330"/>
</center>

We can see that the programming language used matters. With some exception, projects written in static typed programming languages (*e.g.*, C, TypeScript and C++) seem to be less favorable to receive casual contributions than those using dynamic typed ones (*e.g.*, Ruby, Python and JavaScript). We believe this is because scripting programming languages are more concise than procedural and object-oriented ones, and size really matters when it comes to casual contributors.

# What are the characteristics of a casual contribution?

We observed that the number of additions, deletions and files touched of contributions do not vary signifi- cantly among the analyzed projects. In particular, the project [paperclip](https://github.com/thoughtbot/paperclip/) is the one with the highest number of additions and deletions among the Ruby projects (Adds mean, 3rd Quartile, and Std. deviation: 4.15, 5.75, and 1.72. Dels mean, 3rd Quartile, and Std. deviation: 1.02, 1.0, and 0.26). With more than 8 years old, 63% of its contributors are casual ones, who contributed to 12.74% of the project

We also analyzed the contributions with the lowest number of additions and deletions. In fact, 22.7% of the casual contributions performed on Ruby projects changed a single line of code. Some of them include, (1) [preventing a type from being null](https://github.com/thoughtbot/paperclip/commit/6f2ca93), (2) [updating documentation files](https://github.com/thoughtbot/paperclip/commit/d49bca2), or (3) [setting an option to a default value](https://github.com/thoughtbot/paperclip/commit/62a9f64).

We also analyzed a [statistically significant](https://en.wikipedia.org/wiki/Statistical_significance) sample of 384 casual contributions. We identified 8 categories of casual contributions, summarized next. Afterwards, we discuss the top 3 ones.


| Category                | #   | %      |
| ----------------------- |:---:| ------:|
| Bug Fix                 | 116 | 30.20% |
| Documentation           | 110 | 28.64% |
| Add new feature         | 72  | 18.75% |
| Refactoring             | 34  | 8.85%  |
| Update dependencies     | 25  | 6.51%  |
| Improve error message   | 14  | 3.64%  |
| Improve resource usage  | 8   | 2.08%  |
| Add test cases          | 5   | 1.30%  |



1. **Bug fix**. It is the most common kind of casual contribution found in our dataset. Some examples include: (1) [layout fix](https://github.com/TransitApp/SVProgressHUD/commit/eebd6ec), (2) [fixing compilation problems](https://github.com/koalaman/shellcheck/commit/f054e2e), and (3) [fixing a broken URL](https://github.com/lulzlabs/AirChat/commit/03cd91d). Still, some bug fixes are far from being trivial, as the one that [fixed a race condition at the linux operating system](https://github.com/torvalds/linux/commit/ddca3b8). Not only difficult to identify (such bugs are non-deterministic), the solution employed was also scattered between C preprocessors, which difficulties the reasoning of the compiled program.

2. **Documentation**. This category includes fix for typos, grammar, translation, formatting, and documentation issues. Although these contributions do not require significant programming effort, we found contributions that have [thoroughly rewritten the original material](https://github.com/codecombat/codecombat/commit/237b97a). Also, we found that 27 out of these 110 contributions were fixing typos on code examples. This finding reinforces the importance of complete and verified working code examples.

3. **Add New Feature**. Some of the examples include (1) [adding a new option for a command line tool](https://github.com/rg3/youtube-dl/commit/1a2adf3), (2) [adding support for disabling an option](https://github.com/angular/angular.js/commit/da9eac8), and (3) [adding support for IPv6 remote hosts](https://github.com/apenwarr/sshuttle/commit/95c9b78). Interestingly, 24 out of the 72 contributions in this category were performed at the Linux operating system. Most of them were adding support for a new driver/device, which usually require few additions.

# How do casual contributors and integrators perceive casual contributions?

We explicitly asked casual contributors and project maintainers "what motivates casual contributors' behavior", and the top cited perceived motivation was **scratch their own itch**, highly mentioned by both casual contributors (90 out of 197) and integrators (23 out of 64). Part of this high number of casual contributions can be explained by the pull-request model, which provided a clear and easy contribution process. It was mentioned by 9 out of 64 integrators.


Aligned with some studies on the motivation behind OSS contributors, we found that **give back to community** fosters casual contributions, as said by one casual contributor "As I use a lot of OSS projects, I like to give back to the community". Another motivation that is inline with the literature is **gaining reputation and prestige**.

Not among the top cited motivations, we found that four casual contributors reported that their motivation was **improving the project**. The following quotes clearly illustrate such motivation: "I want to improve the quality of the project", "That the project is in better shape after my contribution".

In addition to motivation, we investigated the reasons why casual contributors do not become full active contributors. **Lack of time** was far the most cited reason by the casual contributors (96 out of 197), like one mentioned "I don’t have time to devote to a more active role".  From the perspective of the integrators, **Lack of time** was also the most mentioned reason why casual contributors do not become a long term contributor (17 out of 64 respondents). The following quote exemplify it: "People often don’t have the time or desire to be long term contributors".

We also found people who reported that they do not contribute because of their **limited skills or knowledge**. Some also mentioned that the effort and knowledge needed to become a full contributor was too high. In both cases, they prefer to work on small or peripheral issues, which do not need specific abilities and usually require low effort. Like one of them said: "lack of skills (most of the low hanging fruit is gone)". Project maintainers noticed this, and eight participants mentioned that **code/project is hard to learn** was a reason why casual contributors do not become more active.

We also asked the participants their opinion about the main benefits and problems brought by the casual contributors phenomenon. The overall impression is that the benefits overcome the drawbacks brought by this phenomenon. One quote from a integrator shows: "Every little piece helps everyone else. We stand on the shoulders of many small giants. Problems? None".

On the other side, the most reported problems were **Time spent by the core members to review newcomers’ code** (reported by 12 people) and **contributions may go unmaintained** (reported by 5 people).

# Take away message

1. Casual contributors can see that they are not alone, and this behavior is, in fact, rather common in OSS communities. Also, we found that 22.93% of the casual contributions changed a single line of code. Thus, a developer does not need to be shy to contribute, even though her contribution is small. Yet,  this study revealed that project maintainers believe that casual contributions are a healthy way of contributing to OSS. Therefore, casual contributors can become even more motivated to do this kind of contribution.

2. Project owners can label tasks specific for casual contributors. Similarly, some casual contributors are more comfortable on solving low effort tasks. Thus, project owners can create specific roles for casual contributors (**e.g.**, casual translators), which could also foster more engagement. Finally, since several projects maintainers do not have enough time to review casual contributions, they can introduce "contributions guidelines", so that newcomers can read and get acquainted with them, therefore reducing code review effort.
