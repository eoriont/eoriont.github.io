var markdownDiv = document.getElementById("markdown");

var headers = markdownDiv.getElementsByTagName("h1");
for (let e of headers) {
  if (e.classList.length == 0) {
    e.classList.add("text-4xl", "font-bold", "text-green-700", "my-5");
  }
}

var headers2 = markdownDiv.getElementsByTagName("h2");
for (let e of headers2) {
  if (e.classList.length == 0) {
    e.classList.add("text-3xl", "font-bold", "text-green-700", "my-5");
  }
}

var lists = markdownDiv.getElementsByTagName("ol");
for (let e of lists) {
  if (e.classList.length == 0) {
    e.classList.add("list-decimal");
  }
}

var lists = markdownDiv.getElementsByTagName("ul");
for (let e of lists) {
  if (e.classList.length == 0) {
    e.classList.add("list-disc");
  }
}

var links = markdownDiv.getElementsByTagName("a");
for (let e of links) {
  if (e.classList.length == 0) {
    e.classList.add("font-bold", "text-green-500");
  }
}

var paragraphs = markdownDiv.getElementsByTagName("p");
for (let e of paragraphs) {
  if (e.classList.length == 0) {
    e.classList.add("my-5");
  }
}

var codeblocks = markdownDiv.querySelectorAll("div.highlight");
for (let e of codeblocks) {
  e.classList.add("overflow-x-scroll");
}

var images = markdownDiv.getElementsByTagName("img");
for (let e of images) {
  e.classList.add("md:max-w-xl", "mx-auto");
}

// You can't do this for mathjax or katex because they load
// After the page loads
