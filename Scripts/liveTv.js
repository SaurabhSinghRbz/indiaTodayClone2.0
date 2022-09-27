// import {navbar} from "../Components/navbar.js"

import { header } from "../Components/header.js"

import { footer } from "../Components/footer.js"

//document.getElementById("navbar").innerHTML = navbar()

document.getElementById("head").innerHTML = header()

document.getElementById("footerContainer").innerHTML = footer()

let url = "http://localhost:3000/articles"


let getData = async () => {

    let res = await fetch(url)
    let data = await res.json()
    // console.log(data)
    return data
}

let appendData = async () => {
    let receivedData = await getData()

    receivedData.forEach((element, index) => {
        if (index < 4) {
            let containerDiv = document.getElementById("newsToday-flexbox-1")
            let parentDiv = document.createElement("div")
            let iframeDiv = document.createElement("div")
            let TextDiv = document.createElement("div")
            let text = document.createElement("p")

            TextDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })


            iframeDiv.innerHTML = element.videoUrl
            text.textContent = element.description
            text.setAttribute("class", "description")

            TextDiv.append(text)
            parentDiv.append(iframeDiv, TextDiv)
            containerDiv.append(parentDiv)
        }

        if (index >= 4 && index < 8) {
            let containerDiv = document.getElementById("newsToday-flexbox-2")
            let parentDiv = document.createElement("div")
            let iframeDiv = document.createElement("div")
            let TextDiv = document.createElement("div")
            let text = document.createElement("p")

            TextDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            iframeDiv.innerHTML = element.videoUrl
            text.textContent = element.description
            text.setAttribute("class", "description")

            TextDiv.append(text)
            parentDiv.append(iframeDiv, TextDiv)
            containerDiv.append(parentDiv)
        }

        if (index >= 8 && index < 12) {
            let containerDiv = document.getElementById("newsToday-flexbox-3")
            let parentDiv = document.createElement("div")
            let iframeDiv = document.createElement("div")
            let TextDiv = document.createElement("div")
            let text = document.createElement("p")
            text.setAttribute("class", "description")

            TextDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            iframeDiv.innerHTML = element.videoUrl
            text.textContent = element.description

            TextDiv.append(text)
            parentDiv.append(iframeDiv, TextDiv)
            containerDiv.append(parentDiv)
        }

        if (index >= 12 && index < 16) {
            let containerDiv = document.getElementById("newsToday-flexbox-4")
            let parentDiv = document.createElement("div")
            let iframeDiv = document.createElement("div")
            let TextDiv = document.createElement("div")
            let text = document.createElement("p")
            text.setAttribute("class", "description")
            TextDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            iframeDiv.innerHTML = element.videoUrl
            text.textContent = element.description

            TextDiv.append(text)
            parentDiv.append(iframeDiv, TextDiv)
            containerDiv.append(parentDiv)
        }

        if (index == 16) {
            let containerDiv = document.getElementById("bottom-1")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")
            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

        if (index == 17) {
            let containerDiv = document.getElementById("bottom-2")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

        if (index == 18) {
            let containerDiv = document.getElementById("bottom-3")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

        if (index == 19) {
            let containerDiv = document.getElementById("bottom-4")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }


        if (index == 20) {
            let containerDiv = document.getElementById("bottom-5")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

        if (index == 21) {
            let containerDiv = document.getElementById("bottom-6")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

        if (index == 22) {
            let containerDiv = document.getElementById("bottom-7")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

        if (index == 23) {
            let containerDiv = document.getElementById("bottom-8")
            let textDiv = document.createElement("div")
            let text = document.createElement("p")
            text.textContent = element.title
            text.setAttribute("class", "description")

            textDiv.addEventListener('click', function () {
                localStorage.setItem("articleId", element.source.id)
                location.href = "../Pages/detailedArticle.html"
            })

            let imgDiv = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage

            textDiv.append(text)
            imgDiv.append(image)
            containerDiv.append(textDiv, imgDiv)
        }

    });



}

appendData()
// getData()




// footer --->

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
window.speechSynthesis.cancel();
