---
layout: single
title: "Explaining the MIT license"
year: 2021
month: 01
day: 29
published: true
permalink: /blog/explaining-the-mit-license/
---

The MIT license is one of the shortest open source license available out there. It has only 167 words, grouped into four paragraphs.

Nevertheless, the MIT license is one of the most used open source licenses. Perhaps the reason of its widely use is because it is easy to read and understand.

Given its widespreadness, it might be worthy to understand what it is all about. In this blog post I distill its main ideas. The full license is available [here](https://opensource.org/licenses/MIT).

<center>
***
</center>

The MIT license begins as follows:

> Copyright \<YEAR\> \<COPYRIGHT HOLDER\>

This first line refers to the publication date (`<YEAR>`) and the author who is the copyright owner (`<COPYRIGHT HOLDER>`). When licensing your program under MIT, you should replace the tags with the actual year and author name. If you happen to be developing your program for more than one year, you could also use an en-dash to indicate the start and end of your development activities (for instance, as the [ruby on rails project did](https://github.com/rails/rails/blob/master/MIT-LICENSE)).

Similarly, the `<COPYRIGHT HOLDER>` tag is often replaced by the name of the author who started it (again, the [ruby on rails project](https://github.com/rails/rails/blob/master/MIT-LICENSE) states the name of its creator, David Heinemeier Hansson). However, knowing that other contributors might contribute to the project during throughout its evolution, some open source projects adopted a slightly different approach: instead of stating just the name of the original author, they state a legal entity as the copyright owner. For instance, the [django project](https://github.com/django/django/blob/master/LICENSE) states the "Django Software Foundation and individual contributors" as the legal entity that holds the copyright.

After the copyright notice, the MIT license has the following paragraph:

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

This paragraph has many interesting details we should highlight.

First, it essentially gives away all the rights that the copyright owner usually maintain (i.e., "rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies"). Although MIT is not a copyleft license, this license grant is aligned with the four freedoms coined by the Free Software Foundation (i.e., the freedom to run, study, distribute, and redistribute).

Second, by adopting this license, the original author is not vested anymore with the exclusive right to exploit their program commercially (i.e., "Permission is hereby granted […] to any person obtaining a copy of this software […] including […] sell copies of the Software"). That is, others are now allowed to exploit commercially the software. It does not mean, however, that the original author is not allowed to make money with her program; she definitely can do that. The original author is surrendering the rights to do this exclusively.

Third, this license grants users to use, copy, merge, etc. not only the software, but also its associated documentation. Nevertheless, for documentation and other assets, you may want to use a more tailored license.

Finally, there is the right to sublicense. According to Lawrence Rosen, "if a license is sublicensable , then any distributor has the right to grant a license to the software, including its component parts, directly to third parties". This allows a MIT-licensed program, say a library, to be incorporated in a program licensed under a different license, including GPL or proprietary ones.

However, there are three conditions that, if you don't follow, you don't enjoy what the license could offer. The first one:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

This condition is rather straightforward (and it is commonly seen in many other open source licenses). In other words, if you, either as the original author or as a user, want to distribute a MIT program, you should also include the license and the copyright notice.

The second condition is:

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

A warranty is a written guarantee that promises to repair a purchased good if needed within a specific period of time. If you buy a coffeemaker that does not perform well, you could return this item to the seller and ask for a new one. If you happen to use a program licensed under MIT, this statement clearly indicates that the program is provided without any kind of warranty. If you run a MIT program and it happens to cause problems with your printer driver, there is no one you could call.

Finally, there is:

> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

According to Kyle E. Mitchell, "The MIT License gives permission for software 'free of charge', but the law does not assume that folks receiving licenses free of charge give up their rights to sue when things go wrong and the licensor is to blame." In short, this sentence protects licensors from receiving lawsuits from the licensees.

David Heinemeier Hansson, the creator of Ruby on Rails, in RubyConf 2019, greatly summarized the MIT license: "Do what you want, do as you please (just don't sue me)".

<center>
***
</center>

If you want to know more about open source licensing and some hidden problems behind it, consider buying a copy of my ebook: [Open Source Licensing 101](https://gustavopinto.gumroad.com/l/open-source-licensing-101).
