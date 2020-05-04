---
layout: single
title: How do Scientists Develop Software
year: 2018
month: 2
day: 26
published: true
permalink: /blog/how-do-scientists-develop-software/
---

This is a summary of the paper "[How Do Scientists Develop Scientific Software? An External Replication](http://gustavopinto.org/lost+found/saner-rene2018.pdf)". As the name suggests, we conducted an external replication (different authors in a different context) of a well-known paper about [how scientists develop and use software](http://files.software-carpentry.org/training-course/2012/08/hannay-survey-2009.pdf). The original paper was published in 2009, and given the recent changes in the software development practices in the last few years (e.g., the introduction of social coding websites and the prevalence of on-line learning platforms) and unique challenges of scientific research (e.g., the frequent and unforeseen changes in requirements and the need for both highly specialized domain knowledge and programming expertise), we believe that we should update our understanding about this topic.

In the original study, the authors conducted an on-line survey with 2,000 scientists. In our replication, we surveyed 1,574 R developers. One might argue that not all R developers are indeed scientists. We concur. To mitigate this threat, in our invitation email we kindly asked R developers that do not consider themselves as scientists not to answer the questionnaire. We also asked them not to share the questionnaire with their peers, since some of them might not be scientists as well. We also mined their R repositories to complement some of the findings. For instance, the following figure shows the number of projects with commits in the master branch over the last decade.

<center>
<img src='/images/R-projects.png'/>
</center>

The following table compares the main findings of the two studies:

| **Original  Study** | **Replication Study** |
| 96.9% of the respondents state that informal self study is important or very important for developing scientific software (60.1% state that informal learning from peers is important or very important). Only 34.4% state that formal education at an educational institution is important or very important. | 99% of the respondents agree that self-study was important or very important (60% suggested that learning from peers is important or very important). However, 35% of the respondents believe that formal education is important or very important.|
|The importance of graduate studies is clearly greater than undergraduate studies. This, in turn, is clearly greater than that of high school studies. Formal training at work was considered as important or very important for only 13.1%. | Similarly, most of the respondents believe that graduate studies (72%) and their last five years at work (76%) were important or very important to learn what they know about software development. Our respondents also perceived High school (61%) and over the last 15 years at work (51%) as not important or not important at all.|
|84.3% of the responses state that developing scientific software is important or very important for their own research. 46.4% state that developing scientific software is important or very important for the research of others | 86% of the respondents believe that scientific software is important or very important to their own research. However, 63% of our respondents stated that developing software for the research of others is important or very important.|
| On average, scientist spend approximately 30% of their work time developing scientific software. | On average, our respondents spent 30% of their working hours developing software per week (min: 0%, 1st quartile: 10%, median: 20%, max: 100%, std dev: 23.73%|
| 53.5% of the respondents state that they spend more or much more time developing scientific software than they did 10 years ago (44.7% spend more or much more time than they did 5 years ago and 14.5% spend more or much more time than they did 1 year ago. | 82% of the respondents believe that they spend ''much more time'' or ''more time'' developing software than 10 years ago; 72% when compared to the last five years. Over the last decade, there is also an increase in activity, in terms of commits, in the studied projects.|
|Scientific software is either used by a very large number of people (more than 5,000 users) or by a very small number of people (less than three). | Our respondents work mostly alone (53% of the respondents develop software alone) or in small teams (another 42% develop software within a team of two to five). At maximum, we found 723 stars and 139 forks in the analyzed projects|
| The level of importance that scientists assigned to a software engineering concepts is mostly consistent with their understanding of this concept. Except for ''software testing'' and ''software verification'' scientists assigned a higher level of importance to these concepts than they judged understand. | Generally speaking, we observed that the respondents judged they knew less about the concepts of what they believe are important. A Chi-Square test confirmed that the scientist knowledge depends from what they judge important.|
|There is no consistent trend of association that links an increase of project or team size to perceived importance of software engineering concepts. | After performed the ANOVA test, we could not reject the null hypothesis that project and team size influences the respondent's perceptions about the software engineering concepts, once all p-values were higher than 0.05.|
