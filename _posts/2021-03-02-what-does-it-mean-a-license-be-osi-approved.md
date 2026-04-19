---
layout: single
title: "What does it mean a license be OSI-approved?"
year: 2021
month: 03
day: 02
published: true
permalink: /blog/what-does-it-mean-a-license-be-osi-approved/
---

The [Open Source Initiative](https://opensource.org/) (or OSI for short), is a global, non-profit institution that promotes the adoption and awareness of open source software.

Among other things, OSI curated the [Open Source Definition (OSD)](https://opensource.org/osd) which describes the minimum standards that one software system needs to be "open source" (according to OSI views of open source).

Therefore, any license that rigorously follow the open source definition could be named as an open source license. The "could" is emphasized because OSI, the institution, also has a [license review process](https://opensource.org/approval).

Since anyone could create a new "open source" license, the goal of the license review process is to make sure that every open source license available out there (if submitted for review) is aligned with the community expectations, in general, and the OSD, in particular.

## Should I create my own license?

At first thought, it may sound like a good idea to can create your own license. Therefore you could fix that small corner case that is not covered by your loved license, which is also crucial for your project and business.

Unfortunately, licenses with very specific purposes do not fit well in the open source landscape. In fact, as Bruce Perens noted back in 1999: "do not write a new license if it is possible to use one of the ones listed here. The propagation of many different and incompatible licenses works to the detriment of Open Source software because fragments of one program cannot be used in another program with an incompatible license"

Following Perens suggestion, we also strongly suggest you resist the temptation and do not to create a new license.

But OSI also has additional goals. Another goal is to prevent license duplication and proliferation.

**License duplication** happens when one license is a (near-) verbatim copy of another license.

**License proliferation** happens when there are too many different (and sometimes conflicting) licenses, which hinder the build process of a software system that needs to combine several licenses.

<center>
***
</center>

A license that is not approved by OSI (or not submitted to the license review process) cannot be called as an open source license. An OSI-approved license is then any license that successfully passed through the OSI license review process.

Interesting things can happen when one claims a non-approved license as an open source one. Unlike what one would think, the decision of whether a license is open source or not is not always a binary one. This happens because there is more than one licensing regulator. For instance, as discussed in Chapter 2, the FSF and the OSI have complementary but also diverging views about what constitutes a free/open source program. […] Therefore, one license can be approved (and then claimed to be open source) in one of these regulators, but not in another one.

Nevertheless, even if a license is approved by OSI, it may not be a good choice for your next open source projects. The OSI-approved licenses also encompass the following categories of licenses: *special-purpose licenses*, *superseded licenses*, *redundant licenses*, *non-reusable licenses*, or *retired licenses*.

**Special-purpose licenses**: This category groups licenses that have a rather special need. These licenses are tailored for, for instance, schools or governments with particular concerns with copyright. Examples of "special-purpose licenses" include the [SIL Open Font License 1.1](https://opensource.org/licenses/OFL-1.1) (OFL-1.1), [The Unlicense](https://opensource.org/licenses/unlicense) (Unlicense), and the [NASA Open Source Agreement 1.3](https://opensource.org/licenses/NASA-1.3) (NASA-1.3).

**Superseded licenses**: This category groups licenses that have been superseded by newer versions. Examples include: [Mozilla Public License 1.1](https://opensource.org/licenses/MPL-1.1) (superseded by MPL 2.0), the [Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0) (superseded by EPL 2.0), and the [Apache Software License 1.1](https://opensource.org/licenses/Apache-1.1) (superseded by ASL 2.0).

**Redundant licenses**: This category groups licenses that were perceived as redundant with existing licenses, contributing to the problem of license proliferations. Examples include: the [X.Net License](https://opensource.org/licenses/Xnet), the [Academic Free License 3,0](https://opensource.org/licenses/AFL-3.0), the [The PostgreSQL License](https://opensource.org/licenses/PostgreSQL).

**Non-reusable licenses**: This category groups licenses that are rather specific and thus could be hardly reused. These licenses are also referred as vanity licenses (ie, a license that only fits one own needs). Examples include: the [Apple Public Source License](https://opensource.org/licenses/APSL-2.0), the [IBM Public License 1.0](https://opensource.org/licenses/IPL-1.0), and the [Sun Public License 1.0](https://opensource.org/licenses/SPL-1.0).

**Retired licenses**: This category groups licenses that were voluntarily retired. Examples include: the [Intel Open Source License](https://opensource.org/licenses/Intel), the [Jabber Open Source License](https://opensource.org/licenses/jabberpl), and the [Sun Industry Standards Source License](https://opensource.org/licenses/SISSL).

<center>
***
</center>

Iif you have to choose an open source license for your code, it is better to use a regular license.

<center>
***
</center>

If you want to know more about open source licensing and some hidden problems behind it, consider buying a copy of my ebook: [Open Source Licensing 101](https://gustavopinto.gumroad.com/l/open-source-licensing-101).
