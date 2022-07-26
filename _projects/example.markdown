---
layout: page
title: project 1
description: a project with a background image
img: /assets/img/1.jpg
importance: 1
---

Every project has a beautiful feature showcase page.

It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the 
<a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` 
classes.
Here's some example code:

```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/2.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/3.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
```
