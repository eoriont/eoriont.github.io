var markdownDiv = document.getElementById("markdown");

var headers = markdownDiv.getElementsByTagName("h1");
for (let e of headers) {
  if (e.classList.length == 0) {
    e.classList.add("text-4xl", "font-bold", "text-green-700", "my-5");
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
