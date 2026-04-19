---
layout: single
title: "From Research to Pull-Requests"
year: 2023
month: 10
day: 01
published: true
permalink: /blog/from-research-to-pull-requests/
---

In the past, I wrote a blog post summarizing the first year of my transition to the software development industry. This October marks my second year working full-time in the industry, and it's time to reflect a bit.

## Summary of the first year

In my first year, I was working as a researcher in an educational department. Part of my job was to uncover potential problems the engineering teams had and help them overcome these challenges. We conducted several research experiments, including tool building, interviews, surveys, and so on. Some of these results were published as research papers, others on the company blog, and some were shared through internal meetings.

## Second year and a new market opportunity

Things were going well, but in 2023, tools like ChatGPT and Co-Pilot became an unquestionable reality in the software engineering arena.

Although these tools are great, they hardly provide a definitive answer to your prompt, mainly because they were not trained on your business data. For instance, if you ask, "write a wrapper for my client's API," Co-Pilot can't help much other than writing a generic wrapper that would require substantial editing from a developer before being pushed to a Git repository.

As a consequence, with the help of these tools, a new market opportunity opened up for specialized coding assistance that could provide more contextualized information for developers. These coding assistants use information retrieval techniques to mine proprietary company information to enhance an LLM's prompt. By enriching these prompts with contextualized information, these tools improve the odds of the output being more enriched and contextualized as well.

Given this new landscape and my academic background, I was invited to join a newly created team that focused on building such a specialized coding assistant tool.

## Working on engineering intensive tasks

Although I'm not that bad at designing programming solutions, I have to admit that I was not well familiar with the current libraries, frameworks, and infrastructure tools. Therefore, the first weeks of this move required a lot of patience from my team, helping me set up things correctly.

Some of my initial tasks involved experimentation, which was good given my background. For instance, since we are enriching prompts, what kind of information should we prioritize in the prompt? In what format should this information be provided? How long should this information be or last? These questions are all interesting, do not have clear answers (thus require experimentation), and could directly impact the tool's output. Some of these experiments became pull requests that were integrated into the product's repository. This was great.

However, when building a product, there are many other tasks aside from these experimentation-intensive ones. Therefore, I also took charge of some engineering-intensive tasks.

## Not all problems are worth investigating

While learning all these libraries, frameworks, and tools, my research-oriented mind often contemplates other research studies that I could conduct. There are dozens of research problems that are worth investigating, some of which could impact our product.

Unfortunately, I will not tackle most (perhaps all) of these problems using an academic lens. Instead, I may approach them using an engineering lens.

This means that, as I mentioned in the previous blog post, time is key here. Even if we end up creating a robust methodology and observe interesting findings, we may still not have the time to document the context and findings in a beautifully written academic paper.

Building this understanding of problems that are worth exploring is a great asset. In academic research, it is common to believe that any problem is worth investigating. However, in industry, we may have to discard ideas that do not contribute to the business's goals. It is, though, relatively easy to figure out the ideas that contribute to the business goal; for instance, those that make the clients happy.

In research, it is a bit harder to find the ideas that contribute to the business goal. After all, what is the business? Who is the client?

This is not to say that every research paper must need a business/client context. Indeed, pure research is important and often leads to significant breakthroughs.

However, fields like software engineering are, by design, less pure science. In such fields, if recent advances do not consider the intricacies of human interaction and their relation with the developers' tools, such advances would rarely translate into features used in real-world development tools.

## The metagame

This is the scenario that Masad calls "metagame", which happens when we focus too much on the theoretical aspects of a subject, without considering the underlying context. He goes even further by suggesting that: "Eventually, the lack of contact with reality will corrupt the field."

I found this text while doing a review for ICSE 2023. During my review duties, I remember reading some papers that, although very well-written, well-justified, and well-performed, I found them unrealistic; or, adapting Masad's term, too "meta", perhaps a "metaresearch".

This last week, I also attended a Brazilian software engineering conference. While there, I found some of the presented research, again, very much _meta_.

However, the most intriguing thing for me is the fact that I have been doing peer-review for quite some time, I have also attended dozens of software engineering conferences in the past. But the metagame only became clear to me when I started working for an engineering team.
