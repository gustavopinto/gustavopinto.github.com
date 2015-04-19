---
layout: default
title: Gustavo Pinto, PhD
---

## $ cat welcome! ##

Hi all. I received my PhD from the [Federal University of Pernambuco](http://cin.ufpe.br), Brazil, under supervision of [Fernando Castor](https://sites.google.com/a/cin.ufpe.br/castor). During 2013-2014, I was a visiting scholar at the [State University of New York](binghamton.edu), working with [Yu David Liu](http://www.cs.binghamton.edu/~davidl).

During my PhD I spent most of the time trying to understand how parallel programming techniques impact energy consumption. For instance, since we are moving from 2 to 32, 64 or even 128 cores, how can we save **energy** knowing that a 32 core processor consumes more **power** than one with 2 cores?

Today my research interests are a bit broader, including performance & energy consumption (*e.g.*, [FASE'2015](http://gustavopinto.github.io/lost+found/fase2015.pdf)), concurrent programming (*e.g.*, [OOPSLA'2014](http://gustavopinto.github.io/lost+found/oopsla2014.pdf)), social aspects of software enginering (*e.g.*, [MSR'2014](http://gustavopinto.github.io/lost+found/msr2014.pdf)), big data analytics (*e.g.*, [MSR'2015](http://gustavopinto.github.io/lost+found/msr2015.pdf)), and refactoring (*e.g.*, [GREENS'2015](http://gustavopinto.github.io/lost+found/greens2015.pdf)).

I am interested in new colleagues at all levels: undergraduates, graduate students, and postdocs. If your research interests overlap with mine, please drop me a letter.

### $ cat recent_pubs ###

- Paper to appear at [JSS 2015](http://gustavopinto.github.io/lost+found/jss_2015.pdf) -- "[A Large-Scale Study on the Usage of Java's Concurrent Programming Constructs.](http://gustavopinto.github.io/lost+found/jss_2015.pdf)"
- Paper to appear at [JSS 2015](http://www.journals.elsevier.com/journal-of-systems-and-software/) -- "[A Comprehensive Study on the Energy Efficiency of Java Thread-Safe Collections.](http://gustavopinto.github.io/lost+found/jss_seps2015.pdf)"
- Paper to appear at [MSR 2015](http://2015.msrconf.org/) -- "[Mining Energy-Aware Commits](http://gustavopinto.github.io/lost+found/msr2015.pdf)"
- Paper to appear at [GREENS 2015](http://greens.cs.vu.nl/) -- "[Refactoring for Energy Efficiency:
A Reflection on the State of the Art](http://gustavopinto.github.io/lost+found/greens2015.pdf)"
- Paper to appear at [FASE 2015](http://www.etaps.org/index.php/2015/fase) -- "[Data-Oriented Characterization of Application-Level Energy Optimization](http://gustavopinto.github.io/lost+found/fase2015.pdf)"

See full list [here](/publications)

### $ cat codefather ###
<ul class="posts">
{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>


### $ cat service ###

- 2015: [PyCon](https://us.pycon.org/2015/) (Poster Session Co-Chair).
- 2014: [OOPSLA](http://2014.splashcon.org/events/oopsla2014)[[AeC](http://2014.splashcon.org/committee/splash2014-artifacts-artifact-evaluation-committee)], SUSCOM, [ECOOP](http://ecoop14.it.uu.se/), SAC, [PyCon](https://us.pycon.org/2014) (Poster Session Co-Chair).
- 2013: CBSoft[SBES].
- 2012: CBSoft[SBES], WSL.
- 2011: CBSoft[SBES, Tools, WBDSDM], CSBC[SEMISH].
</ul>


### $ cat contact ###

<p>You can contact me at:</p>

<pre> <code>$ echo "ghlp at cin dot ufpe dot br" | sed -e 's/ dot /./g' -e 's/ at /@/g' </code></pre>
