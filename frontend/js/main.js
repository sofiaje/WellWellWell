import { getInfo } from "./api.js";

let pageContent = document.getElementById("pageContent")

async function loadPage() {
    let res = await getInfo("http://localhost:1337/api/first-page-info")
    console.log(res.data)

    pageContent.innerHTML = `<h1 class="heroText">${res.data.attributes.heading}</h1>`
    
}

loadPage()