function createsibaritems() {
    let sidebaritems = [
        "HOME",
        "MY FEEDS",
        "INDIA",
        "WORLD",
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
        "FACTCHECK",
        "DIU",
        "NEWSMO",
        "SHOPPING",
        "GAMING",
        "CODE OF ETHICS",
        "RATE CARD",
        "DARK MODE"
    ]


    sidebaritems.forEach(element => {
        let div = document.createElement("div")
        let a = document.createElement("a")

        a.innerText = element;
        div.className = "mobilesidebaritems"
        div.append(a)
        document.getElementById("mobilesidebar").append(div)
        if (element = sidebaritems[2]) {
            a.href = "./Pages/india.html"
        }
        if (element = sidebaritems[3]) {
            a.href = "./Pages/world.html"
        }
        if (element = sidebaritems[4]) {
            a.href = "./Pages/business.html"
        }
        if (element = sidebaritems[5]) {
            a.href = "./Pages/tech.html"
        }
    });
}
export { createsibaritems }