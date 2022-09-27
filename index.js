
import { header } from "./Components/header.js"
import { navbar } from "./Components/navbar.js"
import { createsibaritems } from "./Components/sidebar.js"
import { displayfeatueddata } from "./Components/displaydata.js"
import { fetchfeatureddata } from "./Components/getdata.js"
import { footer, expandFooter } from "./Components/footer.js";
import { detailedarticle } from "./Components/displaydata.js"
document.getElementById("footerContainer").innerHTML = footer();
expandFooter();
// console.log(expandFooter())
let hiderFalg = true;
let hiderDiv = document.getElementById("hider").addEventListener('click', function () {
    if (hiderFalg) {
        document.getElementById("footerBlock2").style.display = "none"
        document.getElementById("hiderImg").src = "./Images/footer/expand.png"
        hiderFalg = false;
    } else {
        document.getElementById("footerBlock2").style.display = "grid"
        document.getElementById("hiderImg").src = "./Images/footer/hide.png"
        hiderFalg = true
    }
})

createsibaritems()
fetchfeatureddata(displayfeatueddata)
document.getElementById("navbar").innerHTML = navbar()
//document.getElementById("searchbar").style.display="none"
document.getElementById("searchbar").className = 'base'
document.getElementById("searchbar").style.display = ''
document.getElementById("head").innerHTML = header()
document.getElementById("searchicon").addEventListener("click", function () {
    displaysearchbar()
})
document.getElementById("sidebar1").addEventListener("click", function () {
    displaysidebar()
})
document.getElementById("opsr").addEventListener("click", opsr)
document.getElementById("opsl").addEventListener("click", opsl)
document.getElementById("vssr").addEventListener("click", vssr)
document.getElementById("vssl").addEventListener("click", vssl)
document.getElementById("tssr").addEventListener("click", tssr)
document.getElementById("tssl").addEventListener("click", tssl)

function opsr() {
    document.getElementById("opinions").scrollLeft += 400;
}
function opsl() {
    document.getElementById("opinions").scrollLeft -= 400;
}
function vssr() {
    document.getElementById("visualstories").scrollLeft += 400;
}
function vssl() {
    document.getElementById("visualstories").scrollLeft -= 400;
} function tssr() {
    document.getElementById("todaysspecials").scrollLeft += 400;
}
function tssl() {
    document.getElementById("todaysspecials").scrollLeft -= 400;
}


document.getElementById("account").addEventListener("click", userdetails)

function userdetails() {
    console.log("userdeatils")
    let id = localStorage.getItem("userid");
    if (id) {
        location.href = "./Pages/account.html"
    }
    else {
        location.href = "./Pages/signup.html"
    }
}





function displaysearchbar() {

    var searchbar = document.getElementById("searchbar");
    if (searchbar.className === "base") { searchbar.className = "visible" }
    else { searchbar.className = searchbar.className === 'base' ? 'visible' : 'base' }
    if (searchbar.style.display === '') searchbar.style.display = 'block'
    else searchbar.style.display = searchbar.style.display === 'none' ? 'block' : 'none'
    //console.log(searchbar.className)

}
function displaysidebar() {
    var searchbar = document.getElementById("mobilesidebar");
    if (searchbar.style.display === '') searchbar.style.display = 'block'
    else searchbar.style.display = searchbar.style.display === 'none' ? 'block' : 'none'

}

let categories1 = [
    "India",

    "BUSINESS",
    "TECH",
    "MOVIES",
    "CWG 2022 ",
    "SCIENCE",
    "BEST COLLEGES",
    "HEALTH",
    "TRENDING",
    "VIDEOS",
    "EDUCATION",
    "AUTO",
    "CITIES",
    "CRIME",
    "LIFESTYLE",
    "BINGE WATCH",
    "TELEVISION",
    "INTERACTIVES",
    "VISUAL STORIES",
    "HOROSCOPES",
    "FACTCHECK"]


categories1.forEach(element => {

    fetchcategoriedata(element)
});
async function fetchcategoriedata(element) {
    try {
        let rnum = Math.floor((Math.random() * 100) + 1)
        let res = await fetch(`http://localhost:3000/articles?_start=${rnum}q=${element}&_limit=5`)
        let data = await res.json()
        //console.log(data)
        displaycategoriesdata(element, data)
    } catch (error) {
        console.log(error)
    }

}
function displaycategoriesdata(element1, data) {
    if (data.length < 5) {
        console.log(data.length)
    }
    else {
        let divmain = document.getElementById("newscategories")
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.innerText = element1
        div.append(h2)
        let ul = document.createElement("ul")
        data.forEach(elem => {



            if (elem === data[0]) {

                let image = document.createElement("img")
                image.src = elem.urlToImage
                let headline = document.createElement("h1")
                headline.innerText = elem.title
                div.append(image, headline)
                image.addEventListener("click", function () {
                    detailedarticle(elem)
                })
                headline.addEventListener("click", function () {
                    detailedarticle(elem)
                })

            }


            let listitem = document.createElement("li")
            let h4 = document.createElement("h4")
            h4.innerText = elem.title
            listitem.append(h4)
            ul.append(listitem)


            h4.addEventListener("click", function () {
                detailedarticle(elem)
            })


        });
        div.append(ul)
        divmain.append(div)
    }

}