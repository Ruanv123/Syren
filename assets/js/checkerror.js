const every1 = Array.from(document.getElementsByTagName("a"));
for (let i = 0; i < every1.length; i++) {
    if (every1[i].href.includes("#")) {
        every1[i].href=("404.html")
    }
}
console.log("success changing hrefs # to 404.html")