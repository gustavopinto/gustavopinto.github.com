---
layout: default
title: Gustavo Pinto, PhD
---

## $ cat welcome! ##

Hi all. I received my PhD from the [Federal University of Pernambuco](http://cin.ufpe.br), Brazil, under supervision of [Fernando Castor](https://sites.google.com/a/cin.ufpe.br/castor). During 2013-2014, I was a visiting scholar at the [State University of New York](binghamton.edu), working with [Yu David Liu](http://www.cs.binghamton.edu/~davidl). I'm currently a Postdoctoral	Research Fellow at the [Federal University of Pernambuco](http://cin.ufpe.br), Brazil.

During my Ph.D. study, I devoted several efforts to understand how parallel programming techniques impact energy consumption. For instance, since we are moving from 2 to 32, 64 or even 128 cores, how can we save **energy** knowing that a 32 core processor consumes more **power** than one with 2 cores? My work on this topic, which was presented in a number of [publications](/publications), is synthesized in my Ph.D. thesis, entitled "A Refactoring Approach to Improve Energy Consumption of Parallel Software Systems".


Today my research interests are a bit broader, including performance & energy consumption (*e.g.*, [FASE'2015](http://gustavopinto.github.io/lost+found/fase2015.pdf)), concurrent programming (*e.g.*, [OOPSLA'2014](http://gustavopinto.github.io/lost+found/oopsla2014.pdf)), social aspects of software enginering (*e.g.*, [SANER'2016](http://gustavopinto.github.io/lost+found/msr2014.pdf)), big data analytics (*e.g.*, [MSR'2015](http://gustavopinto.github.io/lost+found/msr2015.pdf)), and refactoring (*e.g.*, [GREENS'2015](http://gustavopinto.github.io/lost+found/greens2015.pdf)).

I am interested in new colleagues at all levels: undergraduates, graduate students, and postdocs. If your research interests overlap with mine, please drop me a letter. You can reach me at ghlp@cin.ufpe.br.

### $ cat recent_pubs ###

- Paper to appear at [SANER 2016](http://saner.inf.usi.ch/) -- "[More Common Than You Think: An In-Depth Study of Casual Contributors](http://gustavopinto.github.io/lost+found/saner2016.pdf)"
- Paper to appear at [SANER 2016](http://saner.inf.usi.ch/) -- "[An Empirical Study on the Usage of the Swift Programming Language](http://gustavopinto.github.io/lost+found/saner2016b.pdf)"


See full list [here](/publications).

### $ cat service ###

- 2016: [PyCon](https://us.pycon.org/2016/) (Poster Session Co-Chair).
- 2015: [SUSCOM](http://www.journals.elsevier.com/sustainable-computing/), [CBSoft](http://cbsoft.org/cbsoft2015/)[[SBES](cbsoft.org/sbes2015/), [SBLP](cbsoft.org/sblp2015/)], [CSBC](http://csbc2015.cin.ufpe.br/)[[CTD](http://cbsoft.org/cbsoft2015/wtdsoft?lang=pt)], [J. Science of Computer Programming](http://www.journals.elsevier.com/science-of-computer-programming/), [PyCon](https://us.pycon.org/2015/) (Poster Session Co-Chair).
- 2014: [OOPSLA](http://2014.splashcon.org/events/oopsla2014)[[AeC](http://2014.splashcon.org/committee/splash2014-artifacts-artifact-evaluation-committee)], [SUSCOM](http://www.journals.elsevier.com/sustainable-computing/), [ECOOP](http://ecoop14.it.uu.se/), SAC, [PyCon](https://us.pycon.org/2014) (Poster Session Co-Chair).
- 2013: CBSoft[SBES].
- 2012: CBSoft[SBES], WSL.
- 2011: CBSoft[SBES, Tools, WBDSDM], CSBC[SEMISH].


### $ cat codefather ###
<ul class="posts">
{% for post in site.posts %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
