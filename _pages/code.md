---
layout: page
permalink: /code/
title: Code
description: Research code releases and open-source projects
nav: true
---

## Research code

I have contributed to the following libraries/packages, which were released alongside research papers:

* [`activeeval`](https://github.com/ngmarchant/activeeval){:target="\_blank"}  implements a generic framework for 
  pool-based active evaluation in Python.
  Given an unlabelled pool of test instances and a set of classifiers to evaluate, the framework coordinates the 
  acquisition of ground truth labels in order to estimate a performance measure, such as precision and recall.
  It includes an implementation of our adaptive importance sampling method [(Marchant & Rubinstein, 2020)](/publications/#marchant2020general),
  which aims to minimize asymptotic variance of performance estimates.
  This approach can reduce labelling costs in important scenarios—e.g. significant reductions can be expected when 
  the classes are severely imbalanced. 
  This occurs, for example, when evaluating record linkage/entity resolution systems.
  Scripts for reproducing experiments in the paper are available [`here`](https://github.com/ngmarchant/ativeeval-experiments){:target="\_blank"} .

* [`exchanger`](https://github.com/cleanzr/exchanger){:target="\_blank"}  is an R package that implements a Bayesian 
  model for entity resolution as proposed in [(Marchant, Rubinstein & Steorts, 2020)](/publications/#marchant2020bayesian). 
  The model adopts the Ewens-Pitman family of infinitely-exchangeable random partitions as a prior on the linkage 
  structure and features an improved hit-miss distortion model. 
  The package is partially implemented in C++ and scales to data sets of modest size (~10k records) without 
  blocking.
  {% comment %} 
  The package is available on [CRAN](https://cran.r-project.org/web/packages/exchanger/){:target="\_blank"}. 
  {% endcomment %}

* [`dblink`](https://github.com/cleanzr/dblink){:target="\_blank"}  is an Apache Spark package for distributed 
  end-to-end Bayesian entity resolution. 
  The package implements extensions to the `blink` model [(Steorts, 2015)](http://doi.org/10.1214/15-BA965SI){:target="\_blank"} 
  as proposed in our [JCGS paper](/publications/#marchant2020dblink). 
  This includes integration of probabilistic blocking and a more efficient partially-collapsed Gibbs sampler. 
  An R interface called [`dblinkR`](https://github.com/cleanzr/dblinkR){:target="\_blank"}  is also available, in 
  addition to [scripts](https://github.com/cleanzr/dblink-experiments){:target="\_blank"} for reproducing experiments 
  in the paper.

* [`oasis`](https://github.com/ngmarchant/oasis){:target="\_blank"}  is a Python implementation of the active 
  evaluation method proposed in our [VLDB'17 paper](/publications/#marchant2017search). 


## Other projects

I am the lead developer of the following open-source projects:

* [`clevr`](https://github.com/cleanzr/clevr){:target="\_blank"}  is an R package that implements functions for 
  evaluating link prediction and clustering algorithms.
  It is available on [CRAN](https://cran.r-project.org/web/packages/clevr/){:target="\_blank"}.

* [`comparator`](https://github.com/ngmarchant/comparator){:target="\_blank"}  is an R package that implements 
  functions for comparing strings, sequences and numeric vectors for clustering and record linkage applications. 
  It is available on [CRAN](https://cran.r-project.org/web/packages/comparator/){:target="\_blank"} .
  
{% comment %} 
* [`BDD`](https://github.com/cleanzr/bdd){:target="\_blank"} 
{% endcomment %}
