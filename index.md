---
title       : Interactive Learning Environment
subtitle    : Teaching R
author      : Ramnath Vaidyanathan
job         : Assistant Professor, McGill University
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow      # 
widgets     : [bootstrap, quiz, interactive, popcornjs]            
mode        : selfcontained # {standalone, draft}
shiny       : false
popcornjs:
  player: youtube
  video: http://youtu.be/9ubJSXKDMM4
---

## Summary

> 1. Author lesson using R Markdown.
> 2. Embed interactive components
> 3. Record lesson as screencast.
> 4. Sync screencast with slides.
> 5. Publish lesson online.

*** =pnotes

This is a short demo of an integrated learning environment for teaching R. 

The basic idea is to author a lesson using R Markdown, embed interactive components like quizzes and consoles seamlessly, record the lesson as a screencast, sync the screencast with the slides, and publish it online.

Just to illustrate the basic idea, let me give you a two slide lesson on using ggplot2 and googleVis Note that the video is synced to the slides, and so the lesson will automatically advance. Just sit back and relax!


--- &interactive

## ggplot2

<textarea class='interactive' id='interactive{{slide.num}}' data-cell='{{slide.num}}' data-results='markup' style='display:none'>require(ggplot2)
qplot(wt, mpg, data = mtcars)
</textarea>


> - Color the points based on the variable `cyl`

*** =hint

The solutions is

```
qplot(wt, mpg, data = mtcars, color = cyl)
```

*** =pnotes

In your first mini lesson, you are going to be creating a scatterplot using ggplot2, the finest plotting package across multiple languages. Let us start by creating a scatterplot of weight vs. mileage for cars in the `mtcars` dataset which ships with R.

We first load `ggplot2` and then use the quick plot function to specify the x variable, which is `wt`, the y variable which is `mpg`, the dataset `mtcars`. If you hit the run button, you will see a nice scatterplot of weight vs. mileage.

Now, what if you wanted to enhance this scatterplot by color coding the points based on the number of cylinders the engine has. Well, you can do it easily by just adding the argument color and setting it to the variable cyl. Why don't you try it yourself? If you need a hint, press the button with the bookmark sign on it. This video will pause now so that you can try it out. When you are done, press the play button so that we can resume.

--- &interactive

## googleVis

<textarea class='interactive' id='interactive{{slide.num}}' data-cell='{{slide.num}}' data-results='asis' style='display:none'>require(googleVis)
M1 <- gvisMotionChart(Fruits, idvar = 'Fruit', timevar = 'Year')
print(M1, tag = 'chart')
</textarea>


*** =pnotes

Let us now try a motion chart using `googleVis` another great package. We are using the Fruits dataset. The name of the fruit acts as the id variable, and the year is the time variabe for the motion chart. If we hit the run button now, you will see a nice motion chart on the slide. It is your turn to try it now. Press the play button to resume the lesson.


---

## Credits

> 1. [knitr](http://github.com/yihui/knitr)
> 2. [markdown](http://github.com/rstudio/markdown)
> 3. [OpenCPU](http://opencpu.org)
> 4. [Shiny](http://github.com/rstudio/shiny)
> 5. [PopcornJS](http://popcornjs.org/)


*** =pnotes

Thanks for watching this demo. It is still just a prototype and I would love to get some feedback. This demo uses several open-source projects, and I would like to give them due credit. 

First, I would like to acknowledge the `knitr` and `markdown` packages, which provide a simple, elegant authoring environment. 

Second, I would like to credit OpenCPU and Shiny, which allow R code to be executed on the server. This demo uses OpenCPU, but you can also run it from your laptop using Shiny.

Finally, I would like to thank Mozilla for PopcornJS, which makes it super easy to sync an html document with a video.

--- &popcorn

<style>
section.video {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1000;
}
</style>


<section class="video" id="video">
  <div id='player' style='width:200px;height:150px;'></div>
</section>







