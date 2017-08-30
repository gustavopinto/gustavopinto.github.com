---
layout: post
title: Training students with open-source software
subtitle: My first experience in this direction
year: 2017
month: 8
day: 30
published: true
---

Following my recent experience with [POSSE workshop](http://gustavopinto.org/codefather/posse2017-experience-report/), I went back decided to put all of that in practice as soon as possible. My setting was an operating system lab, which consisted of 2 hours class per week. The course has two parts: first we cover basic Linux principles and commands, followed by some shell scripting. The second part was about concurrent programming. In such short course, students were introduced to basic threading and synchronization stuff. Although it touches basic concepts, I recognize that the second part is harder than the first one. Concurrent programming is hard itself. Exposing concurrent programming to second year students is even harder. Because of that, I decided to leverage open-source only in the first part of the course.

Since the first part was about Linux and shell script, I motivated students to work with [funcoeszz](https://github.com/funcoeszz/funcoeszz/), which is a long history, fairly active, Brazilian open-source software. More interesting to our subjects is that fact that this project is mostly written in shell script. Another important decision here was to focus on a Brazilian open-source software. Before students joined the project, I thought that students *may* benefit from having a community of developers that speak the same language. Turns out that students benefited a lot from sharing the same language. Still regarding the section of the open-source project, I didn't pay much attention whether funcoeszz had an active community of not. Again, turns out that one of the project maintainers ([@itamarnet](https://github.com/itamarnet)) is very active. He answered most (all?) questions that students raised in a timely manner (e.g., many questions were answered in the same day!). Low language barrier and an active community were key (unexpected) decisions.

Students worked in groups. Students were told to follow several "steps for contributing". For instance, they were told to (1) create a blog post about the given open-source project, (2) report bugs, (3) improve documentation, and (4) implement a change to the source code. In my opinion, the 1-3 steps were required because, if students start with implementing changes, they might face problems that might demotivate them to contribute. Turns out that most of the students skipped the 1-3 steps and went directly to implement the source code changes. I also asked students to find and fix an issue. This did not happen as well. Students proposed the changes they thought would be useful. To perform these tasks, I have students 3 weeks. Ideally, in the first week students would get acquainted with open-source and the pull-request model. In the second week students would try funcoeszz locally, and look for bugs. In the final week, students would learn the code and propose changes. In practice, none of this happened. Students left the assignment to the last minute.

Students have no Github or git background. I was not able to teach them git basics because (1) the course was too short and (2) it was not the main goal of the course --- they should catch up for themselves. Turns out that *all* students used the Github web interface to propose changes to the source code. Even with no pull-requests background, total of XXX pull-requests were made. All pull-requests performed were aimed at introducing new features. 


I acknowledge that introducing open-source software to such course made students shift the focus to non-related operating system activies, such as creating blog posts or learning Github. But I think this is not that bad, since they are still learning.
