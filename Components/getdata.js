import { detailedarticle } from "./displaydata.js"


async function fetchfeatureddata(displayfeatueddata) {
    let rnum = Math.floor((Math.random() * 100) + 1)
    // console.log(rnum)
    try {
        let featuredres = await fetch(`http://localhost:3000/articles?_start=${rnum}&_limit=3`)
        let featureddata = await featuredres.json()
        let topres = await fetch(`http://localhost:3000/articles?_start=${rnum}&_limit=40&country=India`)
        let topdata = await topres.json()

        let feedsres = await fetch(`http://localhost:3000/articles?_start=${rnum}&_limit=100`)
        let feedsdata = await feedsres.json()
        console.log(feedsdata)
        displayfeatueddata(featureddata, topdata, feedsdata, detailedarticle)
    } catch (error) {
        console.log(error)
    }
}
export { fetchfeatureddata }