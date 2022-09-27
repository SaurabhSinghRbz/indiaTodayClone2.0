function displayfeatueddata(featuredata, topdata, feedsdata) {
    let featurenews = document.createElement("div")
    featurenews.className = "featurednews"
    featuredata.forEach(element => {

        let featuredpost1 = document.createElement("div")
        featuredpost1.className = "post"
        if (element === featuredata[0]) {
            featuredpost1.id = "post1"
        }
        let postimg = document.createElement("img");
        postimg.className = "postimg"
        postimg.src = element.urlToImage
        let posttitle = document.createElement("h3")
        posttitle.innerText = element.title;
        featuredpost1.append(postimg, posttitle);
        featurenews.append(featuredpost1);
        document.getElementById("featurednewsdiv").append(featurenews)

        posttitle.addEventListener("click", function () {
            detailedarticle(element)
        })
        postimg.addEventListener("click", function () {
            detailedarticle(element)
        })

    });
    let i = 1
    topdata.forEach(element => {

        let topstories = document.createElement("div")
        topstories.className = "topstories"
        let h4 = document.createElement("h4")
        h4.innerText = element.title;
        topstories.append(h4);
        document.getElementById("topstoriesdiv").append(topstories)

        h4.addEventListener("click", function () {
            detailedarticle(element)
        })

    });

    topdata.forEach(element => {
        i++
        if (i > 0 && i < 15) {
            i++
            let visual = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage
            let h4 = document.createElement("h4")
            h4.innerText = element.title;
            visual.append(image, h4)
            document.getElementById("visualstories").append(visual)
            image.addEventListener("click", function () {
                detailedarticle(element)
            })
            h4.addEventListener("click", function () {
                detailedarticle(element)
            })

        }
        else if (i >= 15 && i < 30) {
            let today = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage
            let h4 = document.createElement("h4")
            h4.innerText = element.title;
            today.append(image, h4)
            document.getElementById("todaysspecials").append(today)
            image.addEventListener("click", function () {
                detailedarticle(element)
            })
            h4.addEventListener("click", function () {
                detailedarticle(element)
            })

        }
        else {
            let today = document.createElement("div")
            let image = document.createElement("img")
            image.src = element.urlToImage
            let h4 = document.createElement("h4")
            h4.innerText = element.title;
            today.append(image, h4)
            document.getElementById("opinions").append(today)
            image.addEventListener("click", function () {
                detailedarticle(element)
            })
            h4.addEventListener("click", function () {
                detailedarticle(element)
            })

        }

    });
    feedsdata.forEach(element => {
        let stories = document.createElement("div")
        stories.className = "stories"
        let image = document.createElement("img")
        image.src = element.urlToImage
        let h4 = document.createElement("h4")
        h4.innerText = element.title;
        stories.append(image, h4);
        document.getElementById("feeds").append(stories)
        image.addEventListener("click", function () {
            detailedarticle(element)
        })
        h4.addEventListener("click", function () {
            detailedarticle(element)
        })
    });

}

function detailedarticle(element) {
    let id = element.source.id
    localStorage.setItem("articleId", id)
    location.href = "./Pages/detailedArticle.html"
}
export { displayfeatueddata }
export { detailedarticle }