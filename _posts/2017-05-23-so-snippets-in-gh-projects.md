---
title: Stack Overflow Code Snippets in GitHub Projects
permalink: /blog/so-snippets-in-gh-projects
excerpt: Usage, Attribution, and Implications
---
<p align="center" style="margin-bottom: 40pt;">
    <img alt="Logo Snippets" src="/assets/images/logo_snippets_2.png" style="width: 95%;">
</p>

**TL;DR:** *Using code snippets copied from Stack Overflow into GitHub projects raises various maintenance and legal issues. Our research shows that: (1) developers rather refer to questions than to individual answers in source code comments; (2) at most one quarter of the copies of Stack Overflow snippets are attributed using a link to the post as required by the license; (3) most developers are not aware of the licensing of content from Stack Overflow and its implications; (4) about 10% of all projects on GitHub could be affected by licensing issues due to the usage of non-trivial code snippets from Stack Overflow.*

<i class="fa fa-fw fa-external-link" aria-hidden="true"></i> Discussion on [reddit<i class="fa fa-fw fa-reddit" aria-hidden="true"></i>](https://www.reddit.com/r/programming/comments/6cw3c1/finding_stack_overflow_code_snippets_in_github/)


## Motivation

Stack Overflow is the largest Q&A website for software developers. As of April 2017, its [public data dump](http://data.stackexchange.com/stackoverflow/query/new) lists 11.8 million answered questions and 6.9 million registered users. Many answers contain code snippets together with explanations. The availability of this huge amount of code snippets lead to changes in software developers’ behavior. Nowadays, they regularly face the ["build or borrow"](http://hci.stanford.edu/publications/2010/blueprint/brandt_chi10_blueprint.pdf) question: *Should I try to understand and solve an issue on my own or just copy and adapt a solution from Stack Overflow?*

<p align="center">
    <a href="https://twitter.com/ThePracticalDev/status/705825638851149824"><img alt="The Practical Dev - Copying And Pasting From SO" src="/assets/images/essential_copying_and_pasting_from_so.jpg" style="width: 40%;"/></a>
    <br/>
    <sub>Source: <a href="https://twitter.com/ThePracticalDev/status/705825638851149824">The Practical Developer</a></sub>
</p>

### Maintenance Issues

If developers copy and paste snippets from Stack Overflow without trying to thoroughly understand the copied code, it may be harder for them to refactor or debug the software later. Moreover, if developers do not add a link to the corresponding question or answer when copying code from Stack Overflow, it is not possible to check the thread for a corrected or improved solution in case problems occur. In a [blog post](https://www.christianheilmann.com/2015/07/17/the-full-stackoverflow-developer/), Christian Heilmann coined the sarcastic term *"Full Stack Overflow Developer"* for developers working *"almost entirely by copying and pasting code from Stack Overflow instead of understanding what they are doing"*.

### Licensing Issues

Beside these practical implications, copying and pasting code from Stack Overflow may also lead to licensing issues: All content on Stack Overflow is licensed under the *Creative Commons Attribution-ShareAlike 3.0* license ([CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)), which allows to share and adapt the published content, but requires **attribution** and demands contributions based on the content to be published under a compatible license (**share alike**). Even if users add a copyright remark to their posts, it [can still be used under CC BY-SA as well](https://meta.stackoverflow.com/questions/315413/does-stackoverflows-code-licensing-override-my-previously-specified-license/315417#315417). Regarding the attribution, it is unclear what Stack Overflow considers appropriate credit for code snippets. In their [terms of service](http://stackexchange.com/legal), they define attribution rules that require:

1. *A visual indication that the content is from Stack Overflow,*
2. *a hyperlink directly to the original question,*
3. *the authors’ names for every question and answer, and*
4. *a hyperlink for each author to their profile page on Stack Overflow.*

These requirements seem to mainly target republication of whole threads, but as they apply for all content on Stack Overflow, they also apply for code snippets.
The [CC BY-SA 3.0 license](https://creativecommons.org/licenses/by-sa/3.0/legalcode) further requires adaptions of licensed content to add a credit identifying how the content is used. The license defines an *adaption* as *"a work based upon"* the licensed content.
Regarding the licensing of such adaptions, CC BY-SA 3.0 restricts the way authors may distribute them, where *distribution* is defined as making the original work or an adaption *"available to the public"*. It is only allowed to publish adaptions under:

1. *CC BY-SA 3.0,*
2. *a later version of CC BY-SA 3.0 (i.e., CC BY-SA 4.0),*
3. *a ported version of CC BY-SA 3.0 (e.g., CC BY-SA 3.0 DE), or*
4. *a Creative Commons compatible license.*

However, there is currently no non-CC license that Creative Commons [considers 'share alike' compatible with CC BY-SA 3.0](https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses/). As CC licenses are [not common for software](http://ieeexplore.ieee.org/abstract/document/7203066/), using code snippets from Stack Overflow in public open source projects is thus problematic in terms of possible licensing conflicts.

There have been several discussions on different sites of the Stack Exchange network about licensing issues of source code posted on Stack Overflow (see, e.g., [1](http://meta.stackexchange.com/q/12527), [2](http://meta.stackoverflow.com/q/286582), [3](http://meta.stackexchange.com/q/25956)). Jeff Atwood, the co-founder of Stack Overflow, answered to one of those questions that *"a snippet of code [...] should be free to use under fair use"*. However, this statement is questioned by Dutch IT law specialist Arnoud Engelfriet, who wrote in a [blog post](https://ictrecht.nl/2016/01/07/what-is-the-license-status-of-stackoverflow-code-snippets/) about the license status of Stack Overflow code snippets that *"a snippet that is more than one or two lines of standard function calls would typically be creative enough for copyright"* and that he does not see a fair use or quotation argument for code snippets. There is no *international standard for originality* ([CC FAQ](https://creativecommons.org/faq/#what-is-an-adaptation)) that defines when a code snippet on Stack Overflow is protected by copyright. In our study, we used the length of the snippets as a proxy variable for their originality. 

### Stack Overflow’s Attempt to Change the License

In December 2015, Stack Overflow tried to switch to the more permissive MIT license for code snippets in new posts. [First](http://meta.stackexchange.com/q/271080), they planned to require attribution only upon request of the copyright holder or Stack Overflow, but after criticism from the community, they [changed their proposal](http://meta.stackexchange.com/q/272956) such that attribution would always be required. In January 2016, after another heated discussion, Stack Overflow delayed the implementation of a new license and since then, no new proposal has been made. Thus, as of April 2017, all source code posted on Stack Overflow is licensed under CC BY-SA 3.0 and the attribution and share alike requirements apply.

## Our Study

We conducted an empirical study to analyze attributed usages of Stack Overflow content in public GitHub projects for ten programming languages (Java, PHP, JavaScript, C, C++, C#, Objective-C, Python, Ruby, and R). Further, we used three different approaches to estimate the amount of unattributed usages in Java files. We also contacted developers to investigate their awareness regarding the license of code from Stack Overflow and its implications.


### Finding -Attributed- Usages of Stack Overflow Content

We searched for references to Stack Overflow content using the following regular expression:

    (?i:https?://stackoverflow\.com/[ˆ\s)\.\"]*)

For each programming language, we applied the regex to all lines of all source code files in the [Google BigQuery GitHub data set](https://cloud.google.com/bigquery/public-data/github). We excluded copied files from our analysis. Between 0.6% (C++) and 7.0% (PHP) of the matched links were either malformed or did not refer to questions or answers (e.g., links to tags or users). We excluded these URLs from our analysis and mapped the remaining ones to their corresponding sharing link such that, in the end, we analyzed only two kinds of links: http://stackoverflow.com/q/<ID> for links to questions and http://stackoverflow.com/a/<ID> for links to answers.

---
**Results:** Considering all analyzed languages, there were on average three times more references to the whole Stack Overflow thread (i.e., the question) than to specific answers. Overall 3.2% of the analyzed repositories and 7.3% of the popular ones (>21 watchers) contained a reference to Stack Overflow. 

---


### Finding -Unattributed- Usages of Stack Overflow Content

To find usages of code snippets from Stack Overflow that have not been attributed as required, we followed three different approaches: First, we created regular expressions matching the code snippets of the ten most frequently referenced Stack Overflow Java answers. With the help of [Google BigQuery](https://cloud.google.com/bigquery/), we utilized these regular expressions to find unreferenced usages in all Java projects in the data set. Second, we used a token-based code clone detector, the [PMD Copy-Paste Detector](https://pmd.github.io/pmd-5.4.1/usage/cpd-usage.html) (CPD), to find unreferenced usages of three different sets of Stack Overflow code snippets in a random sample of popular GitHub Java projects (n=2,313). Third, we again utilized BigQuery, this time searching for exact matches of 29,370 non-trivial snippets from Stack Overflow Java answers in 1.7 million Java files from 64,281 public GitHub projects.

### First Approach: Regular Expressions with BigQuery

For the ten most frequently referenced Java answers, we created regular expressions matching the contained (non-trivial) code snippets. For each snippet, we then used up to ten Java files from GitHub referencing the corresponding answer to test and adapt the regex until it matched as many of these files as possible. During this process, we took care that the regex does not become to generic, leading to false positives. To illustrate the approach, we provide the snippet from the [most frequently referenced Java answer](http://stackoverflow.com/a/3758880) (posted by user [aioobe](http://stackoverflow.com/users/276052/aioobe)) together with the final regex below:

    public static String humanReadableByteCount(long bytes, boolean
     si) {
      int unit = si ? 1000 : 1024;
      if (bytes < unit) return bytes + " B";
      int exp = (int) (Math.log(bytes) / Math.log(unit));
      String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ?
       "" : "i");
      return String.format("%.1f %sB", bytes / Math.pow(unit, exp),
       pre); 
    }

The final regex matched the snippet and 9 out of 10 files with a reference to the corresponding Stack Overflow answer (the test set can be found [here](/misc/snippets-top1-test-set)):

    ((?i:String[\s]+\w+\([ˆ\{]*long[ˆ\{]+\)[\s]*\{[\s\S]+if
    [\s]*\([ˆ<]+<[ˆ\)]+\)[\s\S]*return[ˆ;]+\+[ˆ;]*\”\ B\”
    [\s\S]+int[\s][ˆ\=]+\=[\s]*\([\s]*int[\s]*\)[\s]*\([\s]*
    Math[\s]*\.[\s]*log[\s]*\([ˆ\)]+\)[\s]*\/[\s]*Math[\s]*
    \.[\s]*log[\s]*\([ˆ\)]+\)[\s]*\)[\s\S]+return[ˆ\}]+
    String[\s]*\.[\s]*format[\s]*\([ˆ\}]+\}))

We used BigQuery’s [REGEXP_MATCH](https://cloud.google.com/bigquery/query-reference#regexp_match) function to find matches of this regular expressions in all Java files in the public GitHub data set:

    SELECT id, repo_name, path, content
    FROM (
      SELECT f.id as id, repo_name, path, content
      FROM (
        SELECT id, repo_name, path
        FROM [bigquery-public-data:github_repos.files]
        WHERE LOWER(path) LIKE ‘%.java’
      ) AS f
      JOIN [bigquery-public-data:github_repos.contents] AS c
      ON f.id = c.id
    )
    WHERE REGEXP_MATCH(content, r’((?i:String[\s]+\w+ ... \}))’);

<i class="fa fa-fw fa-external-link" aria-hidden="true"></i> [Complete Query](/assets/data/blog/snippets/java_top1_query.sql)

Using the above query, we found matches in 448 distinct Java files (copied files  excluded). Only 97 of these matches referenced the corresponding Stack Overflow question or answer. We did the same for the other nine snippets. Afterwards, we manually checked 100 matched files for each regex for false positives.

---
**Results:** At most 23.2% of all matched copies were attributed using a link to Stack Overflow. We found no match that did not clearly look like a copy of the Stack Overflow snippet. 

---

### Second Approach: PMD Copy-Paste Detector

To tune CPD for finding clones of snippets in a sample of Java projects, we compared different configurations using a test set of Java files containing references to certain Stack Overflow answers. After the test runs, we decided to use the configuration with the highest precision to avoid false positive results (minimum token count set to 40 &#8658; precision=0.94, recall=0.35). We manually extracted 222 Java code snippets from Stack Overflow and searched for [type-1 clones](http://www.sciencedirect.com/science/article/pii/S0167642309000367) (copied code that only varies in whitespace, layout, or comments) of these snippets in the sample of Java projects. Details on the extracted snippets can be found in the corresponding research papers (see section "More Information"). 

---
**Results:** We found that 199 repositories (9%) contained a copy of a snippet and only 24% of the copies were attributed using a link to Stack Overflow. We manually checked the results for false positive matches and found none.

---

### Third Approach: Exact Matches with BigQuery

We first filtered the Java files in the [BigQuery GitHub data set](https://cloud.google.com/bigquery/public-data/github) and the Java snippets in the [BigQuery Stack Overflow data set](https://cloud.google.com/bigquery/public-data/stackoverflow) to reduce the number of combinations to a level that allowed us to employ BigQuery’s [STRPOS](https://cloud.google.com/bigquery/docs/reference/standard-sql/functions-and-operators#strpos) function to search for matches of the snippets in the files.
For the snippets, we excluded trivial snippets (<6 LOC) and snippets that did not get a certain amount of attention (score <=10). 
For the files, we utilized the [BigQuery GHTorrent data set](http://ghtorrent.org/gcloud.html) and selected Java projects that were not a fork, had more than five Java files, and had at least one watcher. We did this to exclude the many non-software and *"toy"* projects [that are hosted on GitHub](http://research.cs.queensu.ca/~ahmed/home/teaching/CISC880/F14/papers/MiningGitHub_MSR2014.pdf).
From these projects, we then selected Java files with more than 68 LOC (75% quantile of all Java files).   

In a next step, we normalized both the snippets and the files (removing whitespaces, certain special characters, comments, converting all characters to lower case).
We then used the STRPOS function to search for the filtered 29,370 non-trivial Java snippets in the filtered 1.7 million Java files from 64,281 public GitHub projects.
We found 10,358 snippets file pairs, which we analyzed for false positives using a workflow including extensive manual coding and an analysis of external links in the posts to exclude a third source.
As a last step, we employed the [Git Hub API](https://developer.github.com/v3/) and searched for the commit that added the snippet to the repo. We then removed matches where the commit on GitHub was older than the post on Stack Overflow.

---
**Results:** In the end, we had 1,369 snippet-file-pairs that are likely to be true positives.
Of these matches, only 7.6% were attributed using a link to the corresponding question or answers on Stack Overflow.

---

### Awareness of Developers

The last part of our research was a survey with owners of GitHub repos in which we found non-trivial code from Stack Overflow to investigate the awareness of developers regarding the license of code from Stack Overflow and the implications. Of the 739 users we contacted, 87 responded (11.8% response rate).

---
**Results:** Most developers were not aware of the licensing of code published on Stack Overflow and the implications of the used license: 75% of the participants did not know that content on Stack Overflow is licensed under CC BY-SA 3.0 and 67% did not know that attribution is required.

---

## Conclusion

Combining the results from the three approaches described above and considering the fact that we took great care to exclude false positives from our results, we can conclude that at most one quarter of the copies of Java snippets from Stack Overflow answers in public GitHub projects are attributed with a link to Stack Overflow. In our analysis of attributed usages, we found that 3.2% of the analyzed repositories (and 7.3% of the popular ones) contained a file with a reference to Stack Overflow. Combining these results, we can hypothesize that about 10% of all repositories on GitHub could be affected by licensing issues due to the usage of CC BY-SA licensed code from Stack Overflow.

## More Information

This article only describes selected results and skips many details. A more detailed description of the research design and our complete results can be found in the research paper and posters linked on the [project page](/projects/snippets). One paper is currently under review. The final version will be added as soon as the paper is accepted. Nevertheless, the supplementary material for the papers including all scripts and data is already available.

## Acknowledgements

I would like to thank my advisor [Stephan Diehl](http://www.st.uni-trier.de/~diehl) and the [University of Trier](http://www.uni-trier.de) for supporting my research. Thanks also to Google and in particular to [Felipe Hoffa](https://twitter.com/felipehoffa) for their support.

