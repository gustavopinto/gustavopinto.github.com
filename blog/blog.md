---
layout: single
title: Blog
permalink: /blog/
type: post_archive
---

I write mostly about academic life. <br />

**Important note**: these posts might have typos or weird wording. Although I might be aware of some of these issues, I do not plan to fix any of them. This is because writing takes time. If I want my blog posts to be free of typos, I might ended up not publishing anything, because I may need to polish them a lot (since I'm not a native English speaker, this takes even more time). So, I decided not to polish these blog posts in order to give them existence.<br />

These posts are also published on <a href=" https://medium.com/@gustavopinto">Medium</a>.


<section class="post-list">
  <div class="container">
    {% for post in site.posts %}
      {% unless post.next %}
        <h2 class="category-title">{{ post.date | date: '%Y' }}</h2>
      {% else %}
        {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
        {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
        {% if year != nyear %}
          <h2 class="category-title">{{ post.date | date: '%Y' }}</h2>
        {% endif %}
      {% endunless %}
      <article class="post-item">
        <span class="post-meta date-label">{{ post.date | date: "%b %d" }}</span>
        <div class="article-title"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></div>
        <p class="archive-subtitle">{{ post.subtitle }}</p>
      </article>
    {% endfor %}
  </div>
  
<!--
  <div class="container">
    {% for post in site.posts %}
      {% unless post.next %}
        <h2 class="category-title">{{ post.date | date: '%Y' }}</h2>
      {% else %}
        {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
        {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
        {% if year != nyear %}
          <h2 class="category-title">{{ post.date | date: '%Y' }}</h2>
        {% endif %}
      {% endunless %}
      <article class="post-item">
        <span class="post-meta date-label">{{ post.date | date: "%b %d" }}</span>
        <div class="article-title"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></div>
        <p class="archive-subtitle">{{ post.subtitle }}</p>
      </article>
    {% endfor %}
  </div>
-->
