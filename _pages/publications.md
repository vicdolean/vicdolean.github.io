---
layout: page
permalink: /publications/
title: publications
description: Victorita Dolean's publications.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

# {% bibliography %}1
{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
