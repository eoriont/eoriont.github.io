---
title: Removing the date from jekyll posts
tags: post jekyll
---

# Quick answer

Edit your `_config.yml` file, and add this singular line:

```yml
permalink: /posts/:title
```

That removes the part visible to the reader. (the url part) The last thing you would have to remove is the date from the filename.
Unfortunatly, jekyll is built with the date required in the filename, so you can't actually remove it.
BUT, there is an easy workaround, and that is to just make another collection.
You could name it something like 'blogs' but you can't name it 'posts' because that collection is built in.
<br><br>
Read this [stackoverflow post][2].

# My site

This website was built on jekyll, after I finally gave up trying to find the perfect static site generator.
I used [eleventy][1] for my site, and I remember it did its job well! I remade my whole site in eleventy a couple years ago, but I had one major problem.
The problem was that github pages didn't support serving from a folder in your main website. (for me, eoriont.github.io) This left me with a couple options.

1. I could stick with github, but I would be forced to add a second repository called `site` or something where I would put my eleventy code.
   Then, I'd just stick my compiled html, css, and js into my `eoriont.github.io` repository. This method was flawed obviously, because I needed 2 different
   repositories for 1 singular project, which would require me to double stage, commit, and push every time I made a change. This option wasn't going to work.
   <br><br>
2. I could use some other web hosting site with a server, like [heroku][4] or [netlify][3]. I tried out netlify and was surprised at how easy it was to setup the site, but there was another problem! I use github pages for a lot of my repositories, because most of them run on html or js canvas. With netlify,
   I wouldn't be able to host my repositories without putting them all on their own pages. This option wouldn't work either.

I ended up going with option 1, and they way I got around the double shenanigans was to just not make any posts at all. :P
Luckily, github decided to get their stuff together and add the "serving from folder" feature as a beta feature. Unluckily, I wasn't aware of this until I decided to completely waste a day relearning jekyll and redoing my site in it.
You could imagine how I felt when I finally went to github and it asked me if I wanted to serve from a folder...

# Adding cool code blocks

Another problem with my site was code blocks. I don't really know or care what the correct way to add custom css is, so I just kind of added it on top of the theme I have. That screwed a lot of things over, so I fixed it and here's how:

First, you need some code to format. This is some markdown for a simple line of js:

````md
```js
console.log("hi there!");
```
````

Now, you have to install a code theme! Go to [this example gallery][5] and find something that looks appealing to you, and paste it into a new file called `_sass/syntax.scss`. This is obviously a sass file, but it's fine because jekyll comes with a sass compiler in the box. Now all you need to do is go to the main css file, (mine is in `css/style.scss`) and import the sass file, like so:

```scss
---
---

@import "syntax.scss";

// other stuff
```

If you get any compiler errors, it's likely because the compiler doesn't like comments. If you have a regex find and replace tool handy, you can past this in to the find to select all the comments: `/\*[\s\S]*\*/`
Then you would just 'replace all' with nothing.

<br><br>
That's all!

[1]: https://www.11ty.dev/
[2]: https://stackoverflow.com/questions/27099427/jekyll-filename-without-date
[3]: https://www.netlify.com/
[4]: https://heroku.com
[5]: https://jwarby.github.io/jekyll-pygments-themes/languages/ruby.html
