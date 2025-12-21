---
title: Posts
---

{% for post in site.posts %}
<p class="text-xl link">
  <a href="{{ post.url }}"> {{ post.title }} </a>
  <span class="text-base text-gray-500">— {{ post.date | date: "%Y-%m-%d" }}</span>
</p>
{% endfor %}
