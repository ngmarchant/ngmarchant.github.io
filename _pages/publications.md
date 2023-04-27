---
layout: page
permalink: /publications/
title: Publications
years: [2023, 2022, 2021, 2017]
nav: true
nav_order: 1
---

Please see my <a href="https://scholar.google.com.au/citations?user=F7cVGr0AAAAJ">Google Scholar profile</a> 
for bibliometrics.

<div class="publications">

<h1>Manuscripts & Preprints</h1>

{% bibliography -f working %}

<h1>Conference Papers & Journal Articles</h1>

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

<h1>Theses</h1>

{% bibliography -f theses %}

</div>
