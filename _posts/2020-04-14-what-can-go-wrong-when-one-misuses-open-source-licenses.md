---
layout: single
title: What can go wrong when one misuses open source licenses?
year: 2020
month: 4
day: 14
published: true
permalink: /blog/what-can-go-wrong-when-one-misuses-open-source-licenses/
---

[I am writing a book to make open source licensing easier to understand!](http://gum.co/demystifying-oss-licensing)
<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gum.co/demystifying-oss-licensing" target="_blank">I want this!</a>

Open source licenses create a legal framework that play key role on the widespread adoption of open source projects. Any open source project must be released under one (or more) open source license. Without a license, any source code available on the internet could not be openly (re)distributed.

As a natural consequence, open source licenses is one of the most important non-executable piece of any open source software project. Open source licenses not only drive how one can use an OSS but also ensure to what extent others can reuse it.

However, due to its non-technical nature, developers often misuse or misunderstand open source licenses. I believe there are at least _three_ reasons that may justify this fact.

First, the vocabulary used in open source licenses are not part of the developers daily vocabulary, so it may require developers to gain additional knowledge to understand software licensing.

Second, there are hundreds of open source licenses readily available for developers use. Indeed, many of these licenses are quite similar, differing by just one or two minor changes in the license text. Since developers are always busy, they might have very limited time to catch and understand these corner cases.

Third, many of the text books about open source licensing devote a good proportion of the document to explain the concepts, ideas, and differences between the existing open source licenses. However, developers might also have a hard time relating how these abstractions could make any sense in their daily activities.

In this book I argue that the lack of a clear understanding of software licensing could challenge the existence of any open source software project.

Let me give the reader one example.

In 2018, one of the core maintainers of the [Lerna](https://github.com/lerna/lerna/) project decided to change a bit the license. The maintainer made a [pull request](https://github.com/lerna/lerna/pull/1616) that changed the used MIT license to include _restrictive_ and _retroactive_ clauses to users of the Lerna project. With this pull-request, tech companies such as Microsoft, Amazon, Dell, Xerox, Canon, LinkedIn, and few other were not allowed to use Lerna to support their software development activities anymore. The maintainer went further and described that the motivation to perform this change was because these tech companies were collaborating with the US Immigration and Customs Enforcement ("ICE"). On his views, "these companies care only about the millions of dollars that ICE is paying them and are willing to ignore all the horrible things that ICE does." Although one might think that there are good intentions behind these changes, there are also two problems hidden on it.

- First, by restricting the use of the software to certain groups of users, the Lerna would actually be discriminating them. However, non-discrimination is a core value of open source. According to the fifth clause of the [Open Source Definition](https://opensource.org/osd-annotated), the "license must not discriminate against any person or group of persons".

- Second, there is no such thing such as a retroactive license change. Yes, you can change the license, but it would only work for new users, using the new release of your open source software. You cannot change a license expecting the existing users would be affected. These existing users could keep using the old version of your software (with the previous license), and this is just fine.

This single pull-request had several repercussions.

Eric Raymond, the author of the famous "The Cathedral and the Bazaar" and one of the creators of the Open Source Initiative, also shared [his views](http://esr.ibiblio.org/?p=8106) about this problem. He said that "The Lerna project's choice is, moreover, destructive of one of the deep norms that keeps the open-source community functional – keeping politics separated from our work". Open source developers, when not coding, are free do to whatever they want. It does not matter for the code if the developer supports ICE or a far right wing party. By mixing politics with open source, through the (mis)use of its license, the whole chain of users of the Lerna project was impacted.

Long story short: the pull-request was reverted, the maintainer was banned from the project, and the open source community around Lerna was hurted. All of this due to 22 lines added in the license file.

1st Lessons learned: It's possible to change a license, but these changes should not discriminate any person or group or field of endeavor. Moreover, it is not possible to change a license retroactively.

<center>
***
</center>

Do you want to know more about open source licensing and some hidden problems behind it? Please consider supporting my book on [Demystifying Open Source Licensing](https://gumroad.com/l/demystifying-oss-licensing), to be self-published in late July 2020.
