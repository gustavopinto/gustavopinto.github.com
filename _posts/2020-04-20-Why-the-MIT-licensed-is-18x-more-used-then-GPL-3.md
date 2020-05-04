---
layout: single
title: Why the MIT licensed is 18x more used then GPL-3?
year: 2020
month: 4
day: 20
published: true
permalink: /blog/Why-the-MIT-licensed-is-18x-more-used-then-GPL-3/
---

[I am writing a book to make open source licensing easier to understand!](http://gum.co/demystifying-oss-licensing)
<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gum.co/demystifying-oss-licensing" target="_blank">I want this!</a>

<center>
***
</center>

There are dozens or even hundreds of open source licenses available out there. More generally speaking, these licenses can be grouped in two groups: permissive licenses and restrictive licenses. On the permissive group, perhaps the MIT license is one of the most common one. On the other group, GPL is one of the most important restrictive licenses.

Which one is the most common used in open source projects?

Although the question is easy to pose, it is not necessarily easy to answer, mainly because the multiple threats hidden when analyzing license usage in open source projects.

First because there is not a single coding hosting website that hosts all open source projects. Although GitHub is one of the most common alternatives, many open source projects are hosted in the community git repository, in other repositories such as the Debian package archive, and GNU Project FTP archive, etc.

Second, because in order to understand open source license usage in scale, we should rely on tools that infer the license used. This process is not always precise because developers often state open source licenses in different ways. For example, while some developers declare their licenses as a comment in the header of every source code file, other developers just cite the license used for the whole project within the README file. Moreover, some developers copy and paste the full text of the license, whereas other developers might only mention the name of the license.

Given these limitation, we could still try to infer the open source license usage in practice by, for instance, using GitHub data stored on Libraries.io (an service that curates metadata from open source projects hosted in several package managers). Libraries.io provides data  available on Zenodo. Using this data, we inferred license usage as one could be see next.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using <a href="https://twitter.com/librariesio?ref_src=twsrc%5Etfw">@librariesio</a> data to investigate the most common open source licenses used in practice.<br><br>Permissive licenses (MIT, Apache, BSD) are by far the most used ones. <br><br>Want to know why and the implications behind this? Consider supporting this book ~&gt; <a href="https://t.co/WBQzzxP1oK">https://t.co/WBQzzxP1oK</a> <a href="https://t.co/nkozzNw643">pic.twitter.com/nkozzNw643</a></p>&mdash; Gustavo Pinto (@gustavopinto) <a href="https://twitter.com/gustavopinto/status/1251939815488135173?ref_src=twsrc%5Etfw">April 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

As one could see, permissive licenses are by far the most used one. Indeed, MIT is the most used license, appearing in more than 812k open source projects. Apache 2.0 comes next, appearing in 465k projects. BSD-3, also a permissive license, appears next, licensing 71k projects. These three licenses (MIT, Apache 2.0, and BSD-3) are used in about 70% of the overall open source license usage. On the other spectrum of this figure, one could see that the GPL family of licenses (GPL-2, GPL-3, AGPL-3, LGPL-3) comprehends around only 5% of the overall license usage.

## Why is this happening?

According to a 2016 survey with about 3,400 participants, it is estimated that 67% of the surveyed companies actively encourage developers to engage in and contribute to open source software. This shows a clear commercial interest in open source projects. However, some researchers also believe that GPL is not the most appropriated choice for a business that relies on open source.

Even though software licensed under GPL can be used (and even modified) in corporate environments, software companies should be aware of the characteristics of GPL. In particular, the key feature of GPL is that it restricts the terms of distribution of derived works. If any software company incorporates any source code licensed under GPL, the company must license the software products it sells that use GPL code under GPL as well.

GPL, created by the Free Software Foundation (FSF), is the principal copyleft license. The GPL license has the ultimate goal of making software 100% free for everyone. This decision of going 100% free is actually a challenge for business that may not always could support providing 100% of their code to the public (for instance, have you ever seen the actual Google implementation of its search engine?). As a consequence, some business might be not comfortable in using a license that is very aligned with such goals.

<center>
***
</center>

Do you want to know more about open source licensing and some hidden problems behind it? Please consider supporting my book on [Demystifying Open Source Licensing](https://gumroad.com/l/demystifying-oss-licensing), to be self-published in late July 2020.
