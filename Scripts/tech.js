window.speechSynthesis.cancel();

import { header } from "../Components/header.js"
// import { navbar } from "../Components/navbar.js"
import { createsibaritems } from "../Components/sidebar.js"
// footer --->
import { footer, expandFooter } from "../Components/footer.js";
document.getElementById("footerContainer").innerHTML = footer();
// expandFooter();
// console.log(expandFooter())
let hiderFalg = true;
let hiderDiv = document.getElementById("hider").addEventListener('click', function () {
    if (hiderFalg) {
        document.getElementById("footerBlock2").style.display = "none"
        document.getElementById("hiderImg").src = "../Images/footer/expand.png"
        hiderFalg = false;
    } else {
        document.getElementById("footerBlock2").style.display = "grid"
        document.getElementById("hiderImg").src = "../Images/footer/hide.png"
        hiderFalg = true
    }
})
//  footer ends----------------------------------------------------------------------

createsibaritems()
document.getElementById("head").innerHTML = header()
// document.getElementById("navbar").innerHTML = navbar()
var fullBox = document.getElementById("newsBox")
getData()
async function getData() {
    let rnum = Math.floor((Math.random() * 100) + 1)
    try {
        let url = `http://localhost:3000/articles?_limit=585`
        let readUrl = `http://localhost:3000/articles?_limit=10&_start=${rnum}`
        let res = await fetch(url)
        let read = await fetch(readUrl)
        let data = await res.json()
        let sideData = await read.json()
        // console.log(data[6].title);
        display(data, sideData)
    } catch (error) {
        console.log(error);

    }
}


function display(data, sideData) {
    let category = "Technology"
    data.map(function (elem) {
        //box==> Containing all single news
        let box = document.getElementById("newsBox")

        //Single==>Holding 1 news
        let single = document.createElement("div")
        single.setAttribute("id", "single")
        //pic==>img of the news
        let pic = document.createElement("div")
        pic.setAttribute("id", "pic")
        //details==> have the text content of the news
        let details = document.createElement("div")
        details.setAttribute("id", "details")

        let name = document.createElement("p")
        let tittle = document.createElement("h4")
        let img = document.createElement("img")
        img.setAttribute("class", "img")
        if (elem.category == category) {
            name.textContent = elem.description + " " + elem.description
            tittle.innerText = elem.title
            img.setAttribute("src", elem.urlToImage)
            // console.log(tittle,name);
            pic.append(img)
            details.append(tittle, name)
            single.append(pic, details)
            // let line = document.createElement("hr")
            // single.append(line)
            box.append(single)
        }
        tittle.addEventListener('click', function () {
            localStorage.setItem("articleId", elem.source.id)
            location.href = "../Pages/detailedArticle.html"
        })

    })

    //side==>this is for "Read this" block 
    let side = document.createElement("aside")
    let head = document.createElement("h3")
    head.textContent = "READ THIS"
    head.setAttribute("class", "fontRed")
    let line = document.createElement("hr")
    side.append(head)
    sideData.map(function (elem) {
        let sideBox = document.getElementById("sideBox")
        let indiv = document.createElement("div")
        indiv.setAttribute("id", "innerdiv")
        //sideImage div
        let pic = document.createElement("div")
        pic.setAttribute("id", "sidepic")
        //sideImage
        let img = document.createElement("img")
        img.setAttribute("class", "sideimg")
        img.setAttribute("src", elem.urlToImage)

        let allList = document.createElement("div")
        allList.setAttribute("id", "read")
        console.log(elem);
        //list for each side data
        var li = document.createElement("li")
        li.textContent = elem.title


        allList.appendChild(li, line)
        pic.append(img)
        indiv.append(allList, pic)
        side.append(indiv, line)
        sideBox.append(side)
    })

}