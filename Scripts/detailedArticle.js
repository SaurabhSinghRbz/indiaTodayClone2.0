import { header } from "../Components/header.js"
// import { navbar } from "../Components/navbar.js"
import { createsibaritems } from "../Components/sidebar.js"
createsibaritems()
// document.getElementById("navbar").innerHTML = navbar()
document.getElementById("head").innerHTML = header()

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



// sideBAr -->
document.getElementById("searchicon").addEventListener("click", function () {
    displaysearchbar()
})
document.getElementById("sidebar1").addEventListener("click", function () {
    displaysidebar()
})
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



// sideBAr





window.speechSynthesis.cancel();

// Article result show --->
const getData = async (url) => {
    try {
        let res = await fetch(url)
        let data = await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}


var newsDataForLoadMore;
const initFunction = async () => {
    try {
        let newsData = await getData("http://localhost:3000/articles")
        newsDataForLoadMore = newsData
        // console.log(newsData)
        displayNews(newsData)
        readThis(newsData)
        readRightNow(newsData)
        topTakes(newsData)
        recommendedArticle(newsData)
        addArticleInBottom(newsData)
        addArticleInBottom(newsData)
        addArticleInBottom(newsData)
    } catch (error) {
        console.log(error)
    }
}
initFunction();
function displayNews(newsData) {
    let randomNews = localStorage.getItem("articleId") - 1
    let { country, category, title, description, author: authorName, publishedAt, urlToImage, content: articleContent } = newsData[randomNews]
    if (authorName == null || authorName == "") {
        authorName = "XYZ-XYZ"
    }
    let dateAndTime = publishedAt.split("T")

    if (articleContent == null || articleContent == "" || articleContent.length <= 150) {
        articleContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.]"
    }
    let newsContentArr = articleContent.split("[")

    // console.log(newsContentArr)
    document.getElementById("pageTitle").textContent = title;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("auName").textContent = authorName;
    document.getElementById("postedDate").textContent = `Date: ${dateAndTime[0]}, Time: ${dateAndTime[1]}`;
    document.getElementById("newsTitle").textContent = title;
    document.getElementById("showCategoery").textContent = `News / ${country} / ${category} / ${title}`;
    document.querySelector("em").innerHTML = description;
    document.getElementById("articlePoster").src = urlToImage;
    document.getElementById("newsContent1").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent2").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent3").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
    document.getElementById("newsContent4").textContent = `${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]} ${newsContentArr[0]}`;
}


//  ---Play Text and speed of text --->

document.getElementById("playPauseAudio").addEventListener("click", () => {
    changeIcon()
})

var speedCount = 1
document.getElementById("increaseSpeed").addEventListener("click", function () {
    if (speedCount < 4) {
        speedCount += 0.25
        stopText()
        playText(speedCount)
    }
    // background color amd cursor change when it reaches at max value -->
    if (speedCount == 4) {
        document.getElementById("increaseSpeed").style.backgroundColor = "white"
        document.getElementById("increaseSpeed").style.cursor = "not-allowed"
        document.getElementById("decreaseSpeed").style.backgroundColor = "grey"
        document.getElementById("decreaseSpeed").style.cursor = "pointer"
    } else {
        document.getElementById("increaseSpeed").style.backgroundColor = "grey"
        document.getElementById("decreaseSpeed").style.backgroundColor = "grey"
        document.getElementById("increaseSpeed").style.cursor = "pointer"
        document.getElementById("decreaseSpeed").style.cursor = "pointer"
    }
    span.innerHTML = `${speedCount} X`

})
document.getElementById("decreaseSpeed").addEventListener("click", function () {
    if (speedCount >= 0.5) {
        speedCount -= 0.25
        stopText()
        playText(speedCount)
    }

    // background color amd cursor change when it reaches at least value -->
    if (speedCount == 0.25) {
        document.getElementById("decreaseSpeed").style.backgroundColor = "white"
        document.getElementById("decreaseSpeed").style.cursor = "not-allowed"
        document.getElementById("increaseSpeed").style.cursor = "pointer"
        document.getElementById("increaseSpeed").style.backgroundColor = "grey"
    } else {
        document.getElementById("decreaseSpeed").style.backgroundColor = "grey"
        document.getElementById("decreaseSpeed").style.cursor = "pointer"
        document.getElementById("increaseSpeed").style.cursor = "pointer"
        document.getElementById("increaseSpeed").style.backgroundColor = "grey"
    }
    span.innerHTML = `${speedCount} X`

})
let span = document.getElementById("speedCount");
span.innerHTML = `${speedCount}.0 X`



let play = false
function changeIcon() {
    if (!play) {
        document.getElementById("playPauseAudio").src = "../Images/newsDetails/playingAnima.gif"
        play = true;
        document.getElementById("playPauseAudio").src = "../Images/newsDetails/playingAnima.gif"
        setTimeout(() => {
            playText(1)
        }, 1500)

    } else {
        // stopText();
        pauseText();
        play = false;
    }
}


function stopText() {
    // speechSynthesis.resume()
    speechSynthesis.cancel()
}

function playText(speed) {
    document.getElementById("playPauseAudio").src = "../Images/newsDetails/audioPause.png"
    document.getElementById("audioText").innerHTML = "Playing Article..."
    document.getElementById("speedButtons").style.visibility = "visible"
    let newsContent = document.getElementById("newsContent1").textContent + document.getElementById("newsContent1").textContent
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    } else {
        var msg = new SpeechSynthesisUtterance(newsContent);
        msg.rate = speed
        window.speechSynthesis.speak(msg);
    }
}


function pauseText() {
    document.getElementById("playPauseAudio").src = "../Images/newsDetails/audioPlay.png"
    document.getElementById("audioText").innerHTML = "Listen to this article now..."
    if (speechSynthesis.speaking) speechSynthesis.pause();
    document.getElementById("speedButtons").style.visibility = "hidden"
}
// play and speed of news ends here ---->







document.getElementById("readMoreButt").addEventListener("click", function () {
    document.getElementById("readMoreButt").style.display = "none"
    document.getElementById("newsContentBox").style.height = "auto"
})

let count = Math.floor(Math.random() * 10)
document.getElementById("commentCount").innerHTML = `POST A COMMENT (${count})`


function getRandomNumber() {
    return Math.floor(Math.random() * 668)
}





function readThis(newsData) {
    let parentNode = document.getElementById("random1")
    suggestedArticle(newsData, parentNode)
}
function readRightNow(newsData) {
    let parentNode = document.getElementById("random3")
    suggestedArticle(newsData, parentNode)
}
function topTakes(newsData) {
    let parentNode = document.getElementById("random4")
    suggestedArticle(newsData, parentNode)
}

function suggestedArticle(data, parentNode) {
    for (let i = 0; i < 5; i++) {
        let randomIdx = getRandomNumber();
        let { title, urlToImage } = data[randomIdx]

        let box = document.createElement("div");
        box.className = "smallPoster";

        box.addEventListener('click', function () {
            localStorage.setItem("articleId", data[randomIdx].source.id)
            location.href = "../Pages/detailedArticle.html"
        })

        let titleDiv = document.createElement("div");
        titleDiv.innerHTML = title;

        let imgBox = document.createElement("div")
        let img = document.createElement("img");
        img.src = urlToImage;
        imgBox.append(img);

        box.append(titleDiv, imgBox);
        parentNode.append(box)
    }
}



function recommendedArticle(data) {
    for (let i = 0; i < 10; i++) {
        let randomIdx = getRandomNumber();
        let { title, urlToImage } = data[randomIdx]

        let box = document.createElement("div");
        box.className = "bigPoster";
        box.addEventListener('click', function () {
            localStorage.setItem("articleId", data[randomIdx].source.id)
            location.href = "../Pages/detailedArticle.html"
        })
        let titleDiv = document.createElement("p");
        titleDiv.innerHTML = title;

        let imgBox = document.createElement("div")
        let img = document.createElement("img");
        img.src = urlToImage;
        imgBox.append(img);

        box.append(imgBox, titleDiv);
        document.getElementById("random2").append(box)
    }
}



function addArticleInBottom(data) {
    let mainDiv1 = document.createElement("div");
    mainDiv1.id = "bigArticlePoster";
    for (let i = 0; i < 4; i++) {
        let idx = getRandomNumber()
        let { title, urlToImage } = data[idx]
        // console.log(title, urlToImage)
        let box = document.createElement("div");
        box.addEventListener('click', function () {
            localStorage.setItem("articleId", data[idx].source.id)
            location.href = "../Pages/detailedArticle.html"
        })
        let img = document.createElement("img");
        img.src = urlToImage;

        let p = document.createElement("p");
        p.innerHTML = title;
        box.append(img, p)
        mainDiv1.append(box)
    }
    document.getElementById("relatedArticle").append(mainDiv1)




    let mainDiv2 = document.createElement("div");
    mainDiv2.id = "smallArticlePoster";
    for (let i = 0; i < 3; i++) {
        let idx = getRandomNumber()
        let { title, urlToImage } = data[idx]
        // console.log(title, urlToImage)
        let box = document.createElement("div");
        box.addEventListener('click', function () {
            localStorage.setItem("articleId", data[idx].source.id)
            location.href = "../Pages/detailedArticle.html"
        })
        let img = document.createElement("img");
        img.src = urlToImage;

        let p = document.createElement("p");
        p.innerHTML = title;
        box.append(img, p)
        mainDiv2.append(box)
    }
    document.getElementById("relatedArticle").append(mainDiv2)
}


document.getElementById("loadMoreButt").addEventListener("click", function () {
    addArticleInBottom(newsDataForLoadMore);
    addArticleInBottom(newsDataForLoadMore);
    addArticleInBottom(newsDataForLoadMore);
})




window.addEventListener('scroll', () => {
    let totalWindowHeight = document.documentElement.scrollHeight;
    let screenWidth = window.screen.availWidth
    let offsetOfMyPage;

    if (screenWidth <= 600) {
        offsetOfMyPage = 7000;
    } else {
        offsetOfMyPage = 2000;
    }

    let currentWindowHeight = window.scrollY;

    if (totalWindowHeight - currentWindowHeight <= offsetOfMyPage) {
        addArticleInBottom(newsDataForLoadMore);
    }

});


// done



