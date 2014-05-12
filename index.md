---
layout: default
title: Gustavo Pinto - PhD candidate - UFPE/SUNY
---

### $ cat welcome!</h3>

Hi Folks! My name is Gustavo Pinto and I'm a Ph.D. student (since 2011) at the <a href="http://cin.ufpe.br">Federal University of Pernambuco</a>, Brazil, working with <a href="https://sites.google.com/a/cin.ufpe.br/castor/">Fernando Castor</a>. I also spent time in the <a href="binghamton.edu">State University of New York</a>, working with <a href="http://www.cs.binghamton.edu/~davidl/">David Liu</a>. My research interested are all related to software engineering. Currently, I'm spending most of my time trying to understand how parallel programming techniques impact on energy consumption. For instance, since we are moving from 2 to 32, 64 or even 128 cores, how can we save energy knowing that a 32 core processor consumes more power than one with 2 cores?

<!--<p>I received my Master of Computer Science at the <a
href="http://www.inf.ufpr.br">Federal University of Paraná</a>, Brazil after a bachelor's degree in Computer Science at the <a
href="http://www.cesupa.br">University Center of Pará</a>, Brazil.</p>-->


### $ cat codefather
<p>
{% for post in site.posts %}
<span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a><br/>
{% endfor %}
</p>


### $ cat service

<p><b>2014:</b> OOPSLA[AeC], SUSCOM, ECOOP, SAC, PyCon (poster co-chair).<br/>
<b>2013:</b> CBSoft[SBES].<br/>
<b>2012:</b> CBSoft[SBES], WSL.<br/>
<b>2011:</b> CBSoft[SBES, Tools, WBDSDM], CSBC[SEMISH]</p>

### $ cat OSS_projects

<p>
  <!-- <a href="http://haskell-br.org">haskell-br.org</a><br />
  <a href="http://euescritor.com.br">euescritor.com.br</a><br />
  <a href="http://propost.com.br">propost.com.br</a><br />-->
  <a href="https://github.com/spgroup/groundhog">Groundhog Crawler</a><br />
</p>


### $ cat contact

<p>You can contact me at:</p>

<pre> <code>$ echo "ghlp at cin dot ufpe dot br" | sed -e 's/ dot /./g' -e 's/ at /@/g' </code></pre>
